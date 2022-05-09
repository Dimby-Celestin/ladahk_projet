<?php

namespace App\Models;

class BusinessTransfertRequiredDocument extends Base
{
    protected $table = 'business_transfert_required_documents';
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $fillable = ['mime_type', 'filename', 'requiredDocumentId', 'transfertId', 'businessId', 'path', 'extension','status', 'refusedReason'];
    public function getRealPathAttribute(): string
    {
        if (substr( $this->path, 0, 4 ) === "http") {
            return $this->path;
        } else {
            return \url($this->path);
        }
    }
}
