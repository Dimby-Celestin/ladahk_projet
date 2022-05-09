<?php

namespace App\Http\Controllers;

use App\Models\Article;


class ArticleController extends Controller
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
        $article = Article::where('slug', $slug)->first();   
        $banners = [];
        $gallery = [];
        if (isset($article->images)) {
            $banners = $article->images->where('type', 'banner');
            $gallery = $article->images->where('type', 'gallery');
        } else {
            $banners = [];
            $gallery = [];
        }         
        return view('pages.article.index', compact('article', 'banners', 'gallery'));
    }
    public function mustToDo() {
        $articles = Article::where('must_to_do', 1)->get();
        return view('pages.article.must-to-do', compact('articles'));
    }
 
   
}
