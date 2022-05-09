<?php

use Illuminate\Database\Seeder;
use App\Models\Roadtoladakh;
use App\Models\Document;
use Carbon\Carbon as Carbon;

class RoadtoladakhTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $faker = Faker\Factory::create();
        // roadtoladakh 1
        $thumbnail = Document::create([
            'filename' => 'Ice hockey',
            'path' => 'img/articles/trekking.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Ice hockey',
            'path' => 'img/articles/pangonglake1.jpg',
            'type' => 'banner'
        ]); 
        $roadtoladakh1 = Roadtoladakh::create([
            "title" => 'Expected to open till December 12th 2020.',
            "content" => $faker->text(),
            "slug" => $faker->slug(),
            "author_id" => '1',
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            "created_at" => $faker->dateTime(),
            "updated_at" => $faker->dateTime(),
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
            
        ]);
        // roadtoladakh 2
        $thumbnail = Document::create([
            'filename' => $faker->lastName(),
            'path' => $faker->imageUrl(150, 150),
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => $faker->lastName(),
            'path' => $faker->imageUrl(800, 400),
            'type' => 'banner'
        ]);;
        $roadtoladakh1 = Roadtoladakh::create([
            "title" => $faker->realText(60),
            "content" => $faker->text(),
            "slug" => $faker->slug(),
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            "created_at" => $faker->dateTime(),
            "updated_at" => $faker->dateTime(),
            "posted_at" => $faker->dateTime(),
            "author_id" => '1',
        ]);
    }
}
