<?php

namespace App\Models;


class Video extends Base
{
    protected $table = 'videos';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type',
        'url'
    ];
   
}
