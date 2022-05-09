<?php

namespace App\Models;
class Gallery extends Base
{
  protected $table = 'gallery';


  protected $fillable = array('category_id', 'document_id');
  public function category() {
     return $this->belongsTo('App\Models\GalleryCategory', 'category_id');
  }
  public function document() {
    return $this->belongsTo('App\Models\Document', 'document_id');
 }
  public function author() {
    return $this->belongsTo('App\Models\Business', 'author_id');
 }

}
