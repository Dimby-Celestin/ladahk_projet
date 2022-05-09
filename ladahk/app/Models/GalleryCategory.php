<?php

namespace App\Models;
class GalleryCategory extends Base
{
  protected $table = 'gallery_category';


  protected $fillable = array('name', 'slug');
  public function images() {
     return $this->belongsToMany('App\Models\Document', 'gallery', 'category_id', 'document_id');
  }

}
