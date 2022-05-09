<?php

namespace App\Models;

class StaticPage extends Base
{
    protected $table = 'static_page';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'content',
        'kind'
    ];


}
