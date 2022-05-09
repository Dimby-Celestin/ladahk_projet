<?php

use Illuminate\Database\Seeder;
use App\Models\RoomOption;
use Carbon\Carbon as Carbon;

class RoomOptionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $room_options = [
            [
                "title" => '1 x Bedroom B2',
                "subtitle" => '1 King Size Bed'
            ],
            [
                "title" => '2 x Bedroom B1',
                "subtitle" => '2 prince Size Bed'
            ],
            [
                "title" => 'Bedroom B3',
                "subtitle" => '1 King Size Bed (2 places) + 1 Sofa'
            ],
            [
                "title" => 'Bedroom B4',
                "subtitle" => '2 King Size Bed'
            ],
       ];

        DB::table('room_option')->insert($room_options);
        
        if (DB::connection()->getDriverName() == 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }
    }
}
