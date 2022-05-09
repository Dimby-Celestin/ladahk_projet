<?php

use Illuminate\Database\Seeder;
use App\Models\Calendar;
use Carbon\Carbon as Carbon;

class CalendarTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $calendar = [
            [
                'date' => '2021-4-22',
                'kind' => 'gazetted_holiday',
                "title" => $faker->text()
               
            ],
            [
                'date' => '2021-4-15',
                'kind' => 'gazetted_holiday',
                "title" => $faker->text()
               
            ],
           
            [
                'date' => '2021-4-23',
                'kind' => 'restricted_holiday',
                "title" => $faker->text()
               
            ],
            [
                'date' => '2021-4-12',
                'kind' => 'restricted_holiday',
                "title" => $faker->text()
            ],
            [
                'date' => '2021-4-25',
                'kind' => 'restricted_holiday',
                "title" => $faker->text()
            ],

            // may
            [
                'date' => '2021-5-22',
                'kind' => 'gazetted_holiday',
                "title" => $faker->text()
               
            ],
            [
                'date' => '2021-5-15',
                'kind' => 'gazetted_holiday',
                "title" => $faker->text()
               
            ],
           
            [
                'date' => '2021-5-23',
                'kind' => 'restricted_holiday',
                "title" => $faker->text()
               
            ],
            [
                'date' => '2021-5-12',
                'kind' => 'restricted_holiday',
                "title" => $faker->text()
            ],
        ];

        DB::table('calendar')->insert($calendar);
        
        if (DB::connection()->getDriverName() == 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }
    }
}
