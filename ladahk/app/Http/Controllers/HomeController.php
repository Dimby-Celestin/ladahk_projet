<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Roadtoladakh;
use App\Models\News;
use App\Models\Article;
use App\Models\Calendar;
use App\Models\Slider;
use App\Models\Video;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    }

    public function index() {
        $categories = Category::all();
        $sliders = Slider::orderBy('order')->get();
        $roadtoladakh = Roadtoladakh::all();
        $videos = Video::all();
        $musttodo = Article::where('must_to_do', 1)->skip(0)->take(4)->orderBy('order')->get();
        $news = News::all();
        $calendars = Calendar::all()->map(function($item, $key) {
            unset($item['updated_at']);
            unset($item['created_at']);
            return $item;
        });
        return view('pages.home', compact(
            'calendars',
            'categories', 
            'roadtoladakh',
            'news',
            'musttodo',
            'sliders',
            'videos'
        ));
    }
   
}
