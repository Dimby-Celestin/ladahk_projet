<?php

use Illuminate\Database\Seeder;
use App\Models\StaticPage;

class StaticPageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $docs = [
          [
              'title' => 'How to get into Ladakh?',
              'content' => $faker->text(250),
              'kind' => 'faq'
          ],
          [
              'title' => 'How to contact gouvernment in Ladakh?',
              'content' => $faker->text(250),
              'kind' => 'faq'
          ],
          [
              'title' => 'Bird watching?',
              'content' => $faker->text(250),
              'kind' => 'faq'
          ]
       ];

        DB::table('static_page')->insert($docs);
        
        if (DB::connection()->getDriverName() == 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }
    }
}
