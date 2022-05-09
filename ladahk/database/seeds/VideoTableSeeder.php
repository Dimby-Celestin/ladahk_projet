<?php

use Illuminate\Database\Seeder;
use App\Models\Video;
use Carbon\Carbon as Carbon;

class VideoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $videos = [
            [
                "type" => 'Tourism',
                "url" => 'https://ladakh-tourism.s3.ap-south-1.amazonaws.com/Videos/Department+of+Tourism.mov'
            ],
            [
                "type" => 'Culture',
                "url" => 'https://ladakh-tourism.s3.ap-south-1.amazonaws.com/Videos/Video+1+final+30+seconds+jk+tourism+lahdc.mov'
            ],
            [
                "type" => 'Trekking',
                "url" => 'https://ladakh-tourism.s3.ap-south-1.amazonaws.com/Videos/Video+2+final+30+seconds+jk+tourism+lahdc.mov'
            ],
            [
                "type" => 'Traditions',
                "url" => 'https://ladakh-tourism.s3.ap-south-1.amazonaws.com/Videos/Video+3+final+30+seconds+jk+tourism+lahdc.mov'
            ],
            [
                "type" => 'Festivals',
                "url" => 'https://ladakh-tourism.s3.ap-south-1.amazonaws.com/Videos/Video+4+final+30+seconds+jk+tourism+lahdc.mov'
            ],
       ];

        DB::table('videos')->insert($videos);
        
        if (DB::connection()->getDriverName() == 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }
    }
}
