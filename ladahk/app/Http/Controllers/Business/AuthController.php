<?php

namespace App\Http\Controllers\Business;

use Exception;
use App\Models\User;
use \Firebase\JWT\JWT;
use App\Models\Business;
use App\Models\Category;
use App\Http\Utils\Utils;
use Illuminate\Http\Request;
use App\Models\BusinessCategory;
use App\Models\RequiredDocument;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Models\BusinessRequiredDocument;
use Illuminate\Support\Facades\Validator;
use App\Models\BusinessTransfertRequiredDocument;

class AuthController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->currentUser = $this->request->session()->get('userData');
        // get new data in db
        if (isset($this->currentUser) && $this->currentUser->id) {
            $currentUser = Business::find($this->currentUser->id);
            $this->request->session()->put('userData', $currentUser);
            $this->currentUser = $currentUser;
        }
    }

    public function login(){
        if (isset($this->currentUser)) {
            return redirect('/registerBusiness');
        }
        return view('pages.business.auth.login');
    }
    public function postLogin()
    {
        $input = $this->request->all();
        if (isset($input)){
            $user = Business::where('email', strtolower($input["email"]))->orWhere('phone', $input["email"])->first();
            if(!$user) {
                // User does not exist, so returning error
                $this->request->session()->flash('error',"User not found");
                return redirect('/login');
            } else {
                if (Hash::check($input["password"], $user->password)) {
                    $this->request->session()->put('userData', $user);
                    if($user->status === "registering"){
                         return redirect("/registerBusiness");
                    }
                    else if($user->status === "waiting_form"){
                        return redirect("/registerForm");
                    } else if ($user->status === "new") {
                        $this->request->session()->flash('error', 'You need to wait for admin approval before to log in.');
                        return redirect('/login');
                    } else {
                        return redirect("/registerForm");
                    }
                   
                } else {
                   $this->request->session()->flash('error',"Wrong password");
                   return redirect('/login');
                }
            }            
        }  
    }
    public function registerPro() {
        if (isset($this->currentUser)) {
            return redirect('/registerBusiness');
        }
        return  view("pages.business.auth.register");
    }
    public function postRegisterPro(Request $request)
    {

        $input = $this->request->all();
        $validator = Validator::make($request->all(), [
            'phone' => 'required|max:10|regex:/[0-9]{9}/',
            'email' => 'required|email'
        ]);
        if($validator->fails()){
            $this->request->session()->flash('errors', $validator->errors());
            return redirect('/register');
        }
        else{

            if (isset($input["email"])) {
                $business = Business::where('email', $input["email"])->first();
                if (isset($business) && isset($business->id)) {
                    // User already exists, so returning error
                    $this->request->session()->flash('error', "Email already in use");
                    return  redirect('/register');
                }
            }
            if (isset($input["phone"])) {
                $business = Business::where('phone', $input["phone"])->first();
    
                if ($business) {
                    $this->request->session()->flash('error', "Phone already in use");
                    return  redirect('/register');
                }
            }
            $input['status'] = 'new';
            $passwordGenerated = Utils::generatePassword();
            $business = new Business((array) $input);
            $business->password = Hash::make($passwordGenerated);
            try {
                Utils::sendEmail($business->email, 'Welcome '. $business->name, 'Hello, We thanks you for your signup request.
                 Our admin will take action on that. When the admin confirm your account, your password will be: '. $passwordGenerated);
            } catch (Exception $e) {
                var_dump($e);
                die;
            }
            // $business->role = 'user';
            $business->save();
            $this->request->session()->flash('success', 'Thank you for showing interest. We have sent you an email with your password, however, your account needs approval by the admin before continuing');
            return redirect('/login');
        }
    }

    public function registerBusiness() {
        if (!isset($this->currentUser)) {
            return redirect('/register');
        }
        if ($this->currentUser->status !== 'registering') {
            return redirect('/registerForm');
        }
        if ($this->currentUser->status === 'new') {
            $this->request->session()->flush();
            $this->request->session()->flash('error', 'Your account still need to be approved by admin, try later!');
            return redirect('/login');
        }
        $business = Business::find($this->currentUser->id);
        $businessCategories = BusinessCategory::where('parent_id', NULL)->get();
        if (isset($this->currentUser)){
            return view("pages.business.auth.registerBusiness",compact("businessCategories", 'business'));
        }else{
            return redirect("/login");
        }
    }
    public function postRegisterBusiness() {
        $input = $this->request->all();
        $this->currentUser = $this->request->session()->get('userData');
        if(isset($this->currentUser)){
            $business = Business::find($this->currentUser->id);
            $business->business_category_id = $input["type"];
            try {
                Utils::sendEmail($business->email, 'Thanks for your registering request',
                 'Hello, We have received your registering request. The admin will take action on that. Thank you!');
            }catch (exception $e) {
                var_dump($e);
                die;
            }
            $business->save();
            //success message 
            $this->request->session()->flash('success','Business updated successfully');
            return redirect('/registerBusiness');
            
            
           
        }
        else{
            return redirect ("/login");
        }
    }
    /**
     * 
     */
    public function registerForm() {
        if (!isset($this->currentUser)) {
            return redirect('/register');
        }
        if ($this->currentUser->status === 'registering') {
            return redirect('/registerBusiness');
        }
        if ($this->currentUser->status === 'new') {
            $this->request->session()->flush();
            $this->request->session()->flash('error', 'Your account still need to be confirmed by admin');
            return redirect('/login');
        }
        $username = $this->currentUser->name;
        if(isset($this->currentUser)){
            $business = Business::find($this->currentUser->id);
            $listeCategories = BusinessCategory::where('parent_id',$business->category->id)->get();
            $documents = RequiredDocument::where('business_category_id',$business->category->id)->get();
            $businessDocuments = BusinessRequiredDocument::where('businessId', $business->id)->get();
            foreach($documents as $document) {
                $documentFound = $businessDocuments->firstWhere('requiredDocumentId', $document->id);
                if (isset($documentFound)) {
                    $document->doc = $documentFound;
                }
            }
        }
        return view("pages.business.auth.registerForm" ,compact("documents", "username", 'businessDocuments', 'business','listeCategories'));
    }
    public function postRegisterForm() {
        $input = $this->request->all();
        $this->currentUser = $this->request->session()->get('userData');
        if (!isset($this->currentUser)) {
            return redirect('/register');
        }
        $business = Business::find($this->currentUser->id);
        
        $documents = RequiredDocument::where('business_category_id',$business->category->id)->get();
        $businessDocuments = BusinessRequiredDocument::where('businessId', $business->id)->get();
        foreach ($documents as $document) {
            $documentFound = $businessDocuments->firstWhere('requiredDocumentId', $document->id);
            if (!isset($documentFound)) {
                $error = 'Kindly upload all the required documents to allow us to process your request';
                break;
            }
        }
        if (isset($error)) {
            $this->request->session()->flash('error', $error);
            return redirect('/registerForm');
        } else {
            $business->status = 'under_review';
            $business->save();
            $this->request->session()->flash('success', 'Your business is now awaiting for approval before continuing');
            return redirect('/registerForm');
        }
    }
    /**
     * 
     */
    public function postRegisterSubCategory(Request $request){   
        $input = $this->request->all(); 
        if(isset($this->currentUser)){
            $business = Business::find($this->currentUser->id);
            if (isset( $input['type']) &&  $input['type']) {
                $business->business_subcategory_id = $input['type'];
            } else {
                $business->business_subcategory_id = null;
            }
            $business->save();
        }
        return redirect('/registerForm');        
    }
    public function logout(){
        $this->request->session()->flush();
        return redirect(('/login'));
    }
}
