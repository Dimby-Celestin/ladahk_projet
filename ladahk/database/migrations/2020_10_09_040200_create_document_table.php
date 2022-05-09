<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('document', function (Blueprint $table) {
            $table->increments('id');

            $table->string('filename')->nullable();
            $table->string('original_filename')->nullable();
            $table->string('path');
            $table->string('extension', 5)->nullable();
            $table->string('mime_type')->nullable();
            $table->enum('type', ['banner', 'thumbnail', 'gallery', 'other'])->default('gallery');

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
        Schema::dropIfExists('document');
    }
}
