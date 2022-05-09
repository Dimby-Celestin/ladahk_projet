<?php

use Illuminate\Database\Seeder;
use App\Models\Document;
use Carbon\Carbon as Carbon;

class DocumentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $documents = [
            
            [
                'filename' => 'Festivals in ladakh',
                'original_filename' => '',
                'mime_type' => 'image/png',
                'path' => 'img/images/river-rafting-ladakh-head-526@3x.png',
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now(),
            ],
            [
                'filename' => 'Top things to do',
                'original_filename' => '',
                'mime_type' => 'image/png',
                'path' => 'img/images/matho-nagrang.png',
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now(),
            ], 
            [
                'filename' => 'Places of interest',
                'original_filename' => '',
                'mime_type' => 'image/png',
                'path' => 'img/images/0_G8YkyMgXEB_eoiLJ.png',
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now(),
            ],

            [
                'filename' => 'History & culture',
                'original_filename' => '',
                'mime_type' => 'image/png',
                'path' => 'img/images/667x445_leh-bazar-and-leh-palace-in-1873.png',
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now(),
            ],
            [
                'filename' => 'Air & craft',
                'original_filename' => '',
                'mime_type' => 'image/png',
                'path' => 'img/images/Screenshot%202020-09-16%20at%2012.57.11%20PM.png',
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now(),
            ],
            [
                'filename' => 'Adventures & sports',
                'original_filename' => '',
                'mime_type' => 'image/png',
                'path' => 'img/images/mountainerring-in-ladakh@2x.png',
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now(),
            ]
        ];

        DB::table('document')->insert($documents);
        
        if (DB::connection()->getDriverName() == 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }
    }
}
