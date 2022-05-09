<?php

namespace App\Models;

class BusinessCategory extends Base
{
    protected $table = 'business_category';
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $fillable = ['name', 'ableToTransfertRegistration', 'createPropertyListing', 'price', 
    'renewal_fee', 'register_fee'];
    /**
     * Get the comments for the blog post.
     */
    public function businesses()
    {
        return $this->hasMany('App\Models\Business');
    }
    public function requiredDocuments() {
        return $this->hasMany('App\Models\RequiredDocument');
    }
    public function parent() {
        return $this->belongsTo('App\Models\BusinessCategory', 'parent_id');
    }
 
}
