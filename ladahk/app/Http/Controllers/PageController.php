<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Gallery;
use App\Models\GalleryCategory;
use App\Models\StaticPage;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function faq() {        
        $pages = StaticPage::all();
        return view('pages.faq',compact('pages'));
    }      

    public function contact() {
        return view('pages.contact');
    }

    public function gallery(Request $request) {   

        $galleryCategory = GalleryCategory::all();
        
        if(isset($request['q'])) {
            $gallery = Gallery::where('category_id',$request['q'])->paginate(8);
        }else{
            $gallery = Gallery::paginate(8);    
        }
        
        return view('pages.gallery', compact('galleryCategory','gallery'));
    } 
    public function staff() {
        return view('pages.staff');
    } 

    public function about() {
        return view('pages.about-ladakh');
    }
    public function termOfUse() {
        return view('pages.term-of-use');  
    }
    public function privacyPolicy() {        
        return view('pages.privacy-policy');
    }
    public function cookies() {        
        return view('pages.cookies');
    }  
   
}
