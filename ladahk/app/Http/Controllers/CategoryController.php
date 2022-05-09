<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Article;


class CategoryController extends Controller
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
        $category = Category::where('slug', $slug)->first();
        $articles = $category->articles;
        return view('pages.category.index', compact('category', 'articles'));
    }
    public function all() {
        $categories = Category::all();
        return view('pages.category.all', compact('categories'));
    }
   
}
