<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class News extends Base
{
    protected $table = 'news';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'content',
        'slug',
        'thumbnail_id',
        'banner_id'
    ];


    /**
     * The "booting" method of the model.
     */
    protected static function boot(): void
    {
        parent::boot();
        static::deleting(function($article) { 
            $article->images()->detach();
            $article->thumbnail()->dissociate();
            $article->banner()->dissociate();
       });
    }

    /**
     * Prepare a date for array / JSON serialization.
     */
    protected function serializeDate(DateTimeInterface $date): string
    {
        return $date->format('Y-m-d H:i:s');
    }

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName(): string
    {
        if (request()->expectsJson()) {
            return 'id';
        }

        return 'slug';
    }

    /**
     * Scope a query to search news
     */
    public function scopeSearch(Builder $query, ?string $search)
    {
        if ($search) {
            return $query->where('title', 'LIKE', "%{$search}%");
        }
    }

    /**
     * Scope a query to order news by latest posted
     */
    public function scopeLatest(Builder $query): Builder
    {
        return $query->orderBy('posted_at', 'desc');
    }

    /**
     * Scope a query to only include news posted last month.
     */
    public function scopeLastMonth(Builder $query, int $limit = 5): Builder
    {
        return $query->whereBetween('posted_at', [carbon('1 month ago'), now()])
                     ->latest()
                     ->limit($limit);
    }

    /**
     * Scope a query to only include news posted last week.
     */
    public function scopeLastWeek(Builder $query): Builder
    {
        return $query->whereBetween('posted_at', [carbon('1 week ago'), now()])
                     ->latest();
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
    public function hasbanner(): bool
    {
        return filled($this->banner_id);
    }
    /**
     *  Relationship
     */
    public function banner(): BelongsTo
    {
        return $this->belongsTo(Document::class, 'banner_id');
    }
    public function thumbnail(): BelongsTo
    {
        return $this->belongsTo(Document::class, 'thumbnail_id');
    }
    public function images() {
        return $this->belongsToMany('App\Models\Document', 'news_images', 'news_id', 'image_id');
    }
}
