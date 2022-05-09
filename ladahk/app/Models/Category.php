<?php

namespace App\Models;
class Category extends Base
{
  protected $table = 'categories';


  protected $fillable = array('name', 'slug');
  public function articles() {
     return $this->belongsToMany('App\Models\Article', 'articles_categories', 'category_id', 'article_id');
  }
  public function image() {
    return $this->belongsTo('App\Models\Document', 'image_id');
  }
}
