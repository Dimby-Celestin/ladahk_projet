<?php

namespace App\Models;

class Agenda extends Base
{
    protected $table = 'agenda';
    protected $dates = ['date'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'content',
        'date',
        'type'
    ];

}
