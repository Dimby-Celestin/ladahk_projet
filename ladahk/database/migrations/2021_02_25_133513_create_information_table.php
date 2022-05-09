<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('displayName')->nullable();
            $table->string('subCategory')->nullable();
            $table->float('lat')->nullable();
            $table->float('lng')->nullable();
            $table->string('locationCategory')->nullable();
            $table->string('locationSubCategory')->nullable();
            $table->string('activityCategory')->nullable();
            $table->text('description')->nullable();
            $table->text('imageUrl')->nullable();
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
        Schema::dropIfExists('information');
    }
}
