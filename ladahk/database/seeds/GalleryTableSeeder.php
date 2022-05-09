<?php

use Illuminate\Database\Seeder;
use App\Models\Video;
use Carbon\Carbon as Carbon;
use App\Models\Gallery;
use App\Models\Document;

class GalleryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
       
        $categories = [
            [
                'name' => 'History & culture',
                'slug' => 'history-and-culture'
            ],
            [
                'name' => 'Festivals',
                'slug' => 'festivals'
            ],
            [
                'name' => 'Sports',
                'slug' => 'sports'
            ],
            [
                'name' => 'Events',
                'slug' => 'events'
            ],
            [
                'name' => 'Videos',
                'slug' => 'videos'
            ],
            [
                'name' => 'Trekking',
                'slug' => 'trekking'
            ],
            [
                'name' => 'Places & People',
                'slug' => 'places-and-people'
            ]
        ];
        
        DB::table('gallery_category')->insert($categories);

        $doc = Document::create([
            'path' => '/img/images/Screenshot 2020-09-16 at 12.57.11 PM.png',
            'filename' => $faker->lastName(),
            'type' => 'gallery'
        ]);
        Gallery::create([
            'category_id' => $faker->numberBetween(1, 7),
            'document_id' => $doc->id,
            'author_id' =>'14'
        ]);
        $doc2 = Document::create([
            'path' => '/img/images/river-rafting-ladakh-head-526.png',
            'filename' => $faker->lastName(),
            'type' => 'gallery'
        ]);
        Gallery::create([
            'category_id' => $faker->numberBetween(1, 7),
            'document_id' => $doc2->id,
            'author_id' =>'14'
        ]);
        $doc3 = Document::create([
            'path' => '/img/images/matho-nagrang.png',
            'filename' => $faker->lastName(),
            'type' => 'gallery'
        ]);
        Gallery::create([
            'category_id' => $faker->numberBetween(1, 7),
            'document_id' => $doc3->id,
            'author_id' =>'14'
        ]);
        $doc4 = Document::create([
            'path' => '/img/images/0_G8YkyMgXEB_eoiLJ.png',
            'filename' => $faker->lastName(),
            'type' => 'gallery'
        ]);
        Gallery::create([
            'category_id' => $faker->numberBetween(1, 7),
            'document_id' => $doc4->id,
            'author_id' =>'14'
        ]);
        $doc5 = Document::create([
            'path' => '/img/images/mountainerring-in-ladakh@2x.png',
            'filename' => $faker->lastName(),
            'type' => 'gallery'
        ]);
        Gallery::create([
            'category_id' => $faker->numberBetween(1, 7),
            'document_id' => $doc5->id,
            'author_id' =>'14'
        ]);

        

        if (DB::connection()->getDriverName() == 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }
    }
}
