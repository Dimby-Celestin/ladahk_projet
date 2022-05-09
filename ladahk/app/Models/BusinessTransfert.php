<?php

namespace App\Models;

class BusinessTransfert extends Base
{
    protected $table = 'business_transferts';
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $fillable = ['status', 'businessId', 'newEmail', 'newPhone', 'oldEmail', 'oldPhone', 'newOwner', 'oldOwner'];

}
