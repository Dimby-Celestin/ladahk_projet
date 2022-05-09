<?php

namespace App\Models;


class Information extends Base
{
    protected $table = 'information';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'displayName',
        'subCategory',
        'lat',
        'lng',
        'locationCategory',
        'locationSubCategory',
        'activityCategory',
        'description',
        'imageUrl'
    ];
}
