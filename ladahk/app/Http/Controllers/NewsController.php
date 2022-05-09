<?php

namespace App\Http\Controllers;

use App\Models\News;


class NewsController extends Controller
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
        $news = News::where('slug', $slug)->first();
        $banners = $news->images->where('type', 'banner');
        $gallery = $news->images->where('type', 'gallery');
        return view('pages.news.index', compact('news', 'banners', 'gallery'));
    }
}
