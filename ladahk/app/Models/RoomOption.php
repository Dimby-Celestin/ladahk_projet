<?php

namespace App\Models;


class RoomOption extends Base
{
    protected $table = 'room_option';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'subtitle',
        'customTitle'
    ];
    public function businesses()
    {
        return $this->hasMany(Business::class, 'room_option_id');
    }
}
