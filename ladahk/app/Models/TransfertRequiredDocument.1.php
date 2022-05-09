<?php

namespace App\Models;

class TransfertRequiredDocument extends Base
{
    protected $table = 'transfert_required_documents';
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $fillable = ['name'];
}
