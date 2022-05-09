<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('content');
            $table->string('slug')->unique();;
            $table->integer('thumbnail_id')->unsigned()->nullable();
            $table->foreign('thumbnail_id')->references('id')->on('document');
            $table->integer('banner_id')->unsigned()->nullable();
            $table->foreign('banner_id')->references('id')->on('document');
            $table->integer('author_id')->unsigned()->default(0);
            $table->datetime('posted_at');
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
        Schema::drop('news');
    }
}
