<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoadtoladakhTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roadtoladakh', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('slug')->unique();
            $table->integer('thumbnail_id')->unsigned()->nullable();
            $table->foreign('thumbnail_id')->references('id')->on('document');
            $table->integer('banner_id')->unsigned()->nullable();
            $table->foreign('banner_id')->references('id')->on('document');
            $table->text('content');
            $table->integer('author_id')->unsigned()->default(0);
            $table->datetime('posted_at')->default(null);
            $table->timestamps();
            $table->index('title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('roadtoladakh');
    }
}
