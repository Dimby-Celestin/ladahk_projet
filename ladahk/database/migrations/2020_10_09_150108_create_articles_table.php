<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('author_id')->unsigned()->default(0);
            $table->foreign('author_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('title');
            $table->integer('order');
            $table->string('slug')->unique();
            $table->text('content');
            $table->boolean('must_to_do')->default(false);
            $table->integer('thumbnail_id')->unsigned()->nullable();
            $table->foreign('thumbnail_id')->references('id')->on('document');
            $table->integer('banner_id')->unsigned()->nullable();
            $table->foreign('banner_id')->references('id')->on('document');
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
        Schema::drop('articles');
    }
}
