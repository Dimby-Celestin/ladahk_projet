<?php

use Illuminate\Database\Seeder;
use App\Models\Boptions;
use Carbon\Carbon as Carbon;

class BoptionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $b_options = [
            [
                'name' => 'wifi'  ,
                'kind' => 'highlights' 
            ],
            [
                'name' => 'room service' ,
                'kind' => 'highlights'  
            ],
            [
                'name' => 'Hot water',
                'kind' => 'highlights' 
               
            ],
            [
                'name' => 'Meal',
                'kind' => 'highlights' 
            ],
            [
                'name' => 'parking',
                'kind' => 'highlights' 
            ],
            // amenities
            [
                'name' => 'Swimming pool'  ,
                'kind' => 'amenities' 
            ],
            [
                'name' => 'Conference hall' ,
                'kind' => 'amenities'  
            ],
            [
                'name' => 'Bar,',
                'kind' => 'amenities' 
               
            ],
            [
                'name' => 'Indoor games',
                'kind' => 'amenities' 
            ],
            [
                'name' => 'Spa',
                'kind' => 'amenities' 
            ],
            [
                'name' => 'Garden',
                'kind' => 'amenities' 
            ]
        ];
        DB::table('b_options')->insert($b_options);
        
        if (DB::connection()->getDriverName() == 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }
    }
}
