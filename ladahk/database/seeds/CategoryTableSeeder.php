<?php

use Illuminate\Database\Seeder;
use App\Models\Category;
use Carbon\Carbon as Carbon;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Festivals in Ladakh',
                'slug' => 'festivals',
                'image_id' => "1",
                'bootstrap_class' => 'col-lg-6'
            ],
            [
                'name' => 'Top things to do',
                'slug' => 'top-things-to-do',
                'image_id' => "2",
                'bootstrap_class' => 'col-lg-3'
            ], 
            [
                'name' => 'Places of interests',
                'slug' => 'places',
                'image_id' => "3",
                'bootstrap_class' => 'col-lg-3'
            ],
            [
                'name' => 'History & Cultures of Ladakh',
                'slug' => 'history-and-cultures',
                'image_id' => "4",
                'bootstrap_class' => 'col-lg-4'
            ],
            [
                'name' => 'Art & Craft',
                'slug' => 'art-and-craft',
                'image_id' => "5",
                'bootstrap_class' => 'col-lg-4'
            ],
            [
                'name' => 'Adventure Sports',
                'slug' => 'adventure-sport',
                'image_id' => "6",
                'bootstrap_class' => 'col-lg-4'
            ],
       
        ];

        DB::table('categories')->insert($categories);
        
        if (DB::connection()->getDriverName() == 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }
    }
}
