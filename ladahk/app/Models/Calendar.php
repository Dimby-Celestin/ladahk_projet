<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Calendar extends Base
{
    protected $table = 'calendar';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'date',
        'kind',
        'title'
    ];
     /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'date'
    ];
}
