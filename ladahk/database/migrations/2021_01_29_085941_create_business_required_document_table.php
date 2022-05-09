<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessRequiredDocumentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('business_required_document', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('requiredDocumentId',500)->nullable();
            $table->string('businessId')->nullable();
            $table->string('filename')->nullable();
            $table->string('path');
            $table->string('extension', 5)->nullable();
            $table->enum('status', ['valid', 'pending', 'refused'])->default('pending');
            $table->string('refusedReason', 250)->nullable();
            $table->string('mime_type')->nullable();
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
        Schema::dropIfExists('business_required_document');
    }
}
