<?php

namespace App\Models;


class RequiredDocument extends Base
{
    protected $table = 'required_documents';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'business_type',
        'name'
    ];
    public function businessCategory() {
        return $this->belongsTo('App\Models\BusinessCategory', 'business_category_id');
    }
   
   
}
