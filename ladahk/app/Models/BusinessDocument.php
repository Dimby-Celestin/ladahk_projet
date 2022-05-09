<?php

namespace App\Models;

class BusinessDocument extends Base
{
    protected $table = 'business_document';
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $fillable = ['mime_type', 'filename', 'businessId', 'path', 'extension','status', 'refusedReason'];
    public function getRealPathAttribute(): string
    {
        if (substr( $this->path, 0, 4 ) === "http") {
            return $this->path;
        } else {
            return \url($this->path);
        }
    }
}
