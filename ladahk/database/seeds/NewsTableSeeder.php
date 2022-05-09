<?php

use Illuminate\Database\Seeder;
use App\Models\News;
use App\Models\Document;
use Carbon\Carbon as Carbon;

class NewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $faker = Faker\Factory::create();
        // news 1
        /* article 1 */
        $thumbnail = Document::create([
            'filename' => 'Ice hockey',
            'path' => 'img/articles/icehockey.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Ice hockey',
            'path' => 'img/articles/pangonglake1.jpg',
            'type' => 'banner'
        ]);   
        $news1 = News::create([
            "title" => 'Order: Ensuring Oxygen supply and heating arrangement at health facilities-regarding.',
            "content" => $faker->realText(8000, 4),
            "slug" => $faker->slug(),
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            "created_at" => $faker->dateTime(),
            "updated_at" => $faker->dateTime(),
            "posted_at" => $faker->dateTime(),
            "author_id" => '1',
        ]);
        // news 2
        $news2 = News::create([
            "title" => 'Vision 2050 for Ladakh Union Territory',
            "content" => $faker->realText(8000, 4),
            "slug" => $faker->slug(),
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            "created_at" => $faker->dateTime(),
            "updated_at" => $faker->dateTime(),
            "posted_at" => $faker->dateTime(),
            "author_id" => '1',
        ]);
        // news 3

        $news3 = News::create([
            "title" => 'Extension of date of Admission in Govt. ITIs of Ladakh.',
            "content" => $faker->realText(8000, 4),
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
