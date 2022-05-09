<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\BusinessCategory;
use App\Models\BusinessRequiredDocument;
use App\Models\RoomOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StaysController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }
    public function list(Request $request) {
        $orderBy = 'name';
        $order = 'asc';
        $input = $request->all();
        $class = array();
        $types = BusinessCategory::where('parent_id', NULL)->where('accommodation', true)->get();
        $catIds = array_map(function($c) {
            return $c['id'];
        }, $types->toArray());
        $query = Business::where('status','valid')
            ->whereIn('business_category_id', $catIds);
        if (isset($input['price']) && ($input['price'] == 'asc' || $input['price'] == 'desc')) {
            $orderBy = 'price';
            $order = $input['price'];
        }
        if (isset($input['type']) && $input['type']) {
            $query = $query->where('business_category_id', $input['type']);
            $class = BusinessCategory::where('parent_id', $input['type'])->get();
        }
        if (isset($input['city']) && $input['city']) {
            $query = $query->where('city', $input['city']);
        }
        if (isset($input['class']) && $input['class']) {
            $query = $query->where('business_subcategory_id', $input['class']);
        }
        $query  = $query ->orderBy($orderBy, $order);
        $business = $query->paginate(9); 
        
        return view('pages.stays', compact("business","types", 'input', 'class'));
    }
    
    public function detail($id) {
        $business = Business::where('id', $id)->first();
        $businessNears = Business::where('city',$business->city)->where('id', '!=', $id)->take(3)->get();
        $images  = BusinessRequiredDocument::where('businessId',$business->id)->get(); 
        return view('pages.staysDetail',compact('business', 'images','businessNears'));
    }
   
}
