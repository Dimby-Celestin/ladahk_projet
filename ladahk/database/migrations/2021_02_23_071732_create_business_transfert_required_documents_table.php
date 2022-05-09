<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessTransfertRequiredDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('business_transfert_required_documents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('requiredDocumentId')->nullable();
            $table->string('transfertId')->nullable();
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
        Schema::dropIfExists('business_transfert_required_documents');
    }
}
