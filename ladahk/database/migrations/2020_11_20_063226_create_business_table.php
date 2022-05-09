
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('business', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable()->default(null);
            $table->string('city')->nullable()->default('leh');
            $table->string('address')->nullable()->default(null);
            $table->float('lat')->nullable()->default(null);
            $table->float('lng')->nullable()->default(null);
            $table->string('password')->nullable();
            $table->enum('status', ['new', 'registering', 'waiting_form', 'under_review', 'ignoring_guidelines', 'document_missing', 'waiting_payment', 'valid','rejected'])->default('under_review');
            $table->float('price')->default(0);
            $table->integer('business_category_id')->unsigned()->nullable();;
            $table->integer('business_subcategory_id')->unsigned()->nullable();;
            $table->string('comment')->default('');
            $table->string('rejectedReason')->nullable();
            $table->string('email')->unique()->nullable();
            $table->string('phone')->nullable();
            $table->integer('thumbnail_id')->unsigned()->nullable();
            $table->float('price_start')->default(0);
            $table->text('property_name')->nullable()->default(null);
            $table->string('website_address')->nullable()->default(null);
            $table->text('about')->nullable()->default(null);
            $table->foreign('thumbnail_id')->references('id')->on('document');
            $table->integer('banner_id')->unsigned()->nullable();
            $table->foreign('banner_id')->references('id')->on('document');  
            $table->enum('documentStatus', ['pending', 'refused', 'valid'])->default('pending');
            $table->enum('displayStatus', ['pending', 'refused', 'valid'])->default('pending');
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
        Schema::dropIfExists('business');
    }
}
