<?php

namespace App\Http\Controllers\Business;
use App\Models\Boption;
use App\Models\Business;
use App\Models\Document;
use App\Http\Utils\Utils;
Use Redirect;
use App\Models\RoomOption;
use Illuminate\Http\Request;
use App\Models\BusinessBoption;
use App\Models\BusinessCategory;
use App\Models\RequiredDocument;
use App\Models\BusinessTransfert;
use \App\Http\Controllers\Controller;
use App\Models\BusinessTransfertRequiredDocument;

class BusinessController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->currentUser = $request->session()->get('userData');
    }

    public function editMyBusiness(Request $request) {

        $input = $request->all();
        if (!isset($this->currentUser)) {
            return redirect('/register');
        }
        $business = Business::find($this->currentUser->id);
        if ($business->status === 'registering') {
            return redirect('/registerBusiness');
        }
        if ($this->currentUser->status === 'new') {
            $this->request->session()->flush();
            $this->request->session()->flash('error', 'Your account still need to be confirmed by admin');
            return redirect('/login');
        }
        $optionsAmenities = Boption::where('kind', 'amenities')->get();
        $optionsHighlights = Boption::where('kind', 'highlights')->get();
        $roomOptions = RoomOption::all();
        //dd($business->rooms->where('id', 5)->first());
        $highlightsIds = $business->highlights->keyBy('id')->keys()->toArray();
        $amenitiesIds = $business->amenities->keyBy('id')->keys()->toArray();
        $roomsIds = $business->rooms->keyBy('id')->keys()->toArray();
        return view("pages.business.my-business", compact('optionsHighlights', 'optionsAmenities',
        'business', 'amenitiesIds', 'highlightsIds', 'roomOptions', 'roomsIds'));
    }

    public function postEditMyBusiness(Request $request){
        $input = $request->all();
        if(isset($input['submit'])){
            $this->currentUser = $request->session()->get('userData');
            $business = Business::find($this->currentUser->id); 
            if ($request->hasFile('banner')) {
                $image = $request->file('banner');
                $path = 'banners/' . $this->currentUser->id . '/';
                $result = Utils::uploadFile($image, $path, null, 'banner', []);
                $doc = Document::create($result); 
                
                $business->banner()->associate($doc);
                $business->save();
                //return redirect('/editMyBusiness');
            }
            if ($request->hasFile('thumbnail')) {
                $image = $request->file('thumbnail');
                $path = 'thumbnails/' . $this->currentUser->id . '/';
                $result = Utils::uploadFile($image, $path, null, 'thumbnail', []);
                $doc = Document::create($result);
                $business->thumbnail()->associate($doc);
                $business->save();
                // return redirect('/editMyBusiness');
            }
      
      
            $business->price_start = $input["price_start"];
            $business->property_name = $input["property_name"];
            $business->website_address = $input["website_address"];
            $business->about = $input["about"];
            if ($input["address"]) {
                $business->address = $input["address"];
            }
            if ($input["city"]) {
                $business->city = $input["city"];
            }
            if (isset($input['lat'])) {
                $business->lat = (float) $input["lat"];
                $business->lng = (float) $input["lng"];
            }
  
            $business->save();
            if (isset($input['highlights']) && $input['highlights']) {
                $business->highlights()->sync($input['highlights']);
            } else {
                $business->highlights()->sync([]);
            }
            if (isset($input['amenities']) && $input['amenities']) {
                $business->amenities()->sync($input['amenities']);
            } else {
                $business->amenities()->sync([]);
            }
             // rooms options
             if (isset($input['roomOptions']) && count($input['roomOptions']) > 0) {
                $options = array_filter($input['roomOptions'], function($r) {
                    return isset($r['customTitle']) && $r['customTitle'] != '' && isset($r['customSubtitle']) && $r['customSubtitle'] != '';
                });
                $business->rooms()->sync($options);
            } else {
                $business->rooms()->sync([]);
            }
            // rooms
            /*if (isset($input['rooms']) && $input['rooms']) {
                $business->rooms()->sync($input['rooms']);
            } else {
                $business->rooms()->sync([]);
            }*/
            //redirect 
            $request->session()->flash('success', 'Business updated successfully');
            return redirect('/editMyBusiness');
        
        }
    }
    public function transfer(Request $request) {
        $input = $request->all();
        if (!isset($this->currentUser)) {
            return redirect('/register');
        }
        $business = Business::find($this->currentUser->id);
        // find current transfer
        $transfer = BusinessTransfert::where('businessId', $business->id)->where('status', '!=', 'valid')->first();
        if (!isset($transfer) || !$transfer ) {
            $transfer = BusinessTransfert::create([
                'businessId' =>  $business->id,
                'status' => 'draft',
                'oldEmail' => $business->email,
                'oldPhone' => $business->phone,
                'oldOwner' => $business->name
            ]);
        }
        $username = $this->currentUser->name;
        $listeCategories = BusinessCategory::where('parent_id',$business->category->id)->get();
        $documents = RequiredDocument::where('business_category_id',$business->category->id)
            ->where('ownership', 1)->get();
        $businessDocuments = BusinessTransfertRequiredDocument::where('transfertId', $transfer->id)->get();
        foreach($documents as $document) {
            $documentFound = $businessDocuments->firstWhere('requiredDocumentId', $document->id);
            if (isset($documentFound)) {
                $document->doc = $documentFound;
            }
        }
        if ($business->status === 'registering') {
            return redirect('/registerBusiness');
        }
        if ($this->currentUser->status === 'new') {
            $this->request->session()->flush();
            $this->request->session()->flash('error', 'Your account still need to be confirmed by admin');
            return redirect('/login');
        }
        return view("pages.business.transfer", compact('documents','username', 'business', 'transfer'));
        
    }

    public function postTransfer(){

        $input = $this->request->all();
        $this->currentUser = $this->request->session()->get('userData');
        if (!isset($this->currentUser)) {
            return redirect('/register');
        }
        $business = Business::find($this->currentUser->id);
        $businessTransfer = BusinessTransfert::where('businessId', $business->id)->where('status', '!=', 'valid')->first();
        $businessTransfer->newEmail = $input["newEmail"];
        $businessTransfer->newOwner = $input["newOwner"];
        $businessTransfer->newPhone = $input["newPhone"];
        $businessTransfer->save();
        
        $documents = RequiredDocument::where('business_category_id',$business->category->id)
            ->where('ownership', 1)->get();
        $businessDocuments = BusinessTransfertRequiredDocument::where('transfertId', $businessTransfer->id)->get();
        foreach ($documents as $document) {
            $documentFound = $businessDocuments->firstWhere('requiredDocumentId', $document->id);
            if (!isset($documentFound)) {
                $error = 'You should upload all required document';
                break;
            }
        }
        if (isset($error)) {
            $this->request->session()->flash('error', $error);
            return redirect('/transfer');
        } else {
            $businessTransfer->status = 'pending';
            $businessTransfer->save();
            $this->request->session()->flash('success', 'Your request of transfer are now awaiting for approval');
            return redirect('/transfer');
        }
    }
    public function payment() {
        $this->currentUser = $this->request->session()->get('userData');
        if (!isset($this->currentUser)) {
            return redirect('/register');
        }
        $business = Business::find($this->currentUser->id);
        $business->status = 'valid';
        $business->save();
        $this->request->session()->flash('success', 'Thank you for your payment. Your business is now valid');
        return redirect('/registerForm');
    }
}
