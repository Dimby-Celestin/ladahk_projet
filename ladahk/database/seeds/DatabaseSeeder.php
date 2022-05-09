<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		Schema::disableForeignKeyConstraints();

        $this->call(AuthTableSeeder::class);
        $this->call(DocumentTableSeeder::class);
        $this->call(CategoryTableSeeder::class);
        $this->call(ArticleTableSeeder::class);
        $this->call(SliderTableSeeder::class);
        $this->call(NewsTableSeeder::class);
        $this->call(RoadtoladakhTableSeeder::class);
        $this->call(BoptionsTableSeeder::class);
        $this->call(BusinessCategoryTableSeeder::class);
        $this->call(RoomOptionTableSeeder::class);
        $this->call(BusinessTableSeeder::class);
        $this->call(CalendarTableSeeder::class);
        $this->call(RequiredDocumentTableSeeder::class);
        $this->call(VideoTableSeeder::class);
        $this->call(BusinessManyRelationsSeeder::class);
        $this->call(GalleryTableSeeder::class);
        $this->call(StaticPageTableSeeder::class);
        $this->call(BusinessTransferTableSeeder::class);
        $this->call(BusinessRequiredDocumentTableSeeder::class);

        Schema::enableForeignKeyConstraints();
        Artisan::call("populate-information-center");
    }
}
