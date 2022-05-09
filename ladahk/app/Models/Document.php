<?php

namespace App\Models;

class Document extends Base
{
    protected $table = 'document';
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $fillable = ['mime_type', 'filename', 'original_filename', 'path', 'extension', 'type'];
    public function getRealPathAttribute(): string
    {
        if (substr( $this->path, 0, 4 ) === "http") {
            return $this->path;
        } else {
            return \url($this->path);
        }
    }
}
