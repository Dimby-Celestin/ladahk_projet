<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessTransfertsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('business_transferts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('businessId')->unsigned();
            $table->string('newEmail')->nullable();
            $table->string('newPhone')->nullable();
            $table->string('oldEmail');
            $table->string('oldPhone');
            $table->string('newOwner')->nullable();
            $table->string('oldOwner');
            $table->enum('status', ['draft', 'valid', 'pending', 'refused'])->default('pending');
            $table->string('refusedReason', 250)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('business_transferts');
    }
}
