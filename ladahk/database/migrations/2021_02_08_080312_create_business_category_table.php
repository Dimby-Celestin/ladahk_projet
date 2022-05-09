<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('business_category', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 255);
            $table->boolean('createPropertyListing')->default(0);
            $table->boolean('ableToTransfertRegistration')->default(0);
            $table->float('renewal_fee')->default(0);
            $table->float('register_fee')->default(0);
            $table->boolean('accommodation')->default(false);
            $table->integer('parent_id')->nullable()->default(null);
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
        Schema::dropIfExists('business_category');
    }
}
