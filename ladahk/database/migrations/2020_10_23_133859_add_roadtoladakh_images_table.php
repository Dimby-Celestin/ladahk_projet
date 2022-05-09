<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRoadtoladakhImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roadtoladakh_images', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('roadtoladakh_id')->unsigned();
            $table->foreign('roadtoladakh_id')->references('id')->on('roadtoladakh');
            $table->integer('image_id')->unsigned();
            $table->foreign('image_id')->references('id')->on('document');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('roadtoladakh_images');
    }
}
