<?php

namespace App\Http\Controllers;

use App\Models\Roadtoladakh;


class RoadtoladakhController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }
    public function index($slug) {
        $roadtoladakh = Roadtoladakh::where('slug', $slug)->first();
        $banners = $roadtoladakh->images->where('type', 'banner');
        $gallery = $roadtoladakh->images->where('type', 'gallery');
        return view('pages.roadtoladakh.index', compact('roadtoladakh', 'banners', 'gallery'));
    }
}
