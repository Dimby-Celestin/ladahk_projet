<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\BusinessCategory;
use Illuminate\Support\Facades\DB;
use App\Models\Information;
use Illuminate\Http\Request;


class InfoController extends Controller
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
        $input = $request->all();
        $catPlace = Category::where('slug', 'places')->first();
        $catThingsToDo = Category::where('slug', 'top-things-to-do')->first();
        $businessCategories = BusinessCategory::inRandomOrder()->limit(3)->get();

        // subCategories
        $subCategories = DB::table('information')->select('subCategory')->distinct()->get()->map(function($i) {
            return $i->subCategory;
        });
        // locationCategories
        $locationCategories = DB::table('information')->select('locationCategory')->distinct()->get()->map(function($i) {
            return $i->locationCategory;
        });
        // locationSubCategories
        $locationSubCategories = DB::table('information')->select('locationSubCategory')->distinct()->get()->map(function($i) {
            return $i->locationSubCategory;
        });
        // activityCategories
        $activityCategories = DB::table('information')->select('activityCategory')->distinct()->get()->map(function($i) {
            return $i->activityCategory;
        });
        // data
        $data = new Information();
        if (isset($input['location']) && $input['location']) {
            $data = $data->where('locationCategory', $input['location']);
        }
        if (isset($input['activity']) && $input['activity']) {
            $data = $data->where('activityCategory', $input['activity']);
        }
        if (isset($input['locationSubCategory']) && $input['locationSubCategory']) {
            $data = $data->where('locationSubCategory', $input['locationSubCategory']);
        }
        return view('pages.info', compact(
            'activityCategories',
            'locationCategories',
            'locationSubCategories',
            'subCategories',
            'data'
        ));
    }
}
