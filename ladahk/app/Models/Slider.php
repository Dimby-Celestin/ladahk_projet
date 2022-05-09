<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Slider extends Base
{
    protected $table = 'sliders';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'content',
        'image_id',
    ];
/**
     * return the excerpt of the post content
     */
    public function excerpt(int $length = 50): string
    {
        return Str::limit(strip_tags($this->content), $length);
    }

    public function image() {
        return $this->belongsTo('App\Models\Document','image_id');
    }
}
