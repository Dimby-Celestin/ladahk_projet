<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Business extends Base
{
    protected $table = 'business';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'phone',
        //'password',
        "email",
        'name',
        'city',
        'address',
        'lat',
        'lng',
        'status',
        'price',
        'business_category_id',
        'price_start',
        'property_name',
        'website_address',
        'about',
        'address_business',
        'nearby',
        'comment',
        'thumbnail_id',
        'banner_id',
        'images_id',
        'rejectedReason'
    ];
    function getDocumentStatusColorAttribute(): String
    {
        if ($this->documentStatus == 'pending') {
            return 'btn-warning';
        } else if ($this->documentStatus == 'valid') {
            return 'btn-success';
        } else if ($this->documentStatus == 'refused') {
            return  'btn-danger';
        } 
    }
     function getDisplayStatusColorAttribute(): String
    {
        if ($this->displayStatus == 'pending') {
            return 'btn-warning';
        } else if ($this->displayStatus == 'valid') {
            return 'btn-success';
        } else if ($this->displayStatus == 'refused') {
            return  'btn-danger';
        }
     }
    /**
     * Return the post's author
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    /**
     * return the excerpt of the post content
     */
    public function excerpt(int $length = 50): string
    {
        return Str::limit(strip_tags($this->content), $length);
    }

    /**
     * return true if the post has a thumbnail
     */
    public function hasThumbnail(): bool
    {
        return filled($this->thumbnail_id);
    }
    public function hasBanner(): bool
    {
        return filled($this->banner_id);
    }
    /**
     *  Relationship
     */
    public function thumbnail(): BelongsTo
    {
        return $this->belongsTo(Document::class, 'thumbnail_id');
    }
    public function getRandomBannerAttribute() {
        if (count($this->banners) > 0) {
            return $this->banners->random();
        } else {
            return null;
        }
    }
    public function banner(): BelongsTo
    {
        return $this->belongsTo(Document::class, 'banner_id');
    }
    public function highlights() {
        return $this->belongsToMany('App\Models\Boption', 'business_b_options', 'business_id', 'b_options_id');
    }
    public function amenities() {
        return $this->belongsToMany('App\Models\Boption', 'business_amenities_options', 'business_id', 'b_options_id');
    }
    public function category() {
        return $this->belongsTo('App\Models\BusinessCategory', 'business_category_id');
    }
    public function rooms() {
        return $this->belongsToMany('App\Models\RoomOption', 'business_room_options', 'business_id', 'room_option_id')->withPivot(['customTitle', 'customSubtitle']);
    }
    public function subcategory() {
        return $this->belongsTo('App\Models\BusinessCategory', 'business_subcategory_id');
    }
    public function room_option(): BelongsTo
    {
        return $this->belongsTo(RoomOption::class, 'room_option_id');
    }
    public function banners() {
        return $this->belongsToMany('App\Models\Document', 'business_document', 'business_id','document_id');
    }
   
}
