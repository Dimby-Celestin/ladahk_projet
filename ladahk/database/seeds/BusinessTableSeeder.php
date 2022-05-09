<?php

use Illuminate\Database\Seeder;
use App\Models\Business;
use App\Models\Document;
use Carbon\Carbon as Carbon;
use Illuminate\Support\Facades\Hash;
use App\Models\Boption;

class BusinessTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            /*  */

            $faker = Faker\Factory::create();
            $wifi = Boption::find(1);
            $theatre = Boption::find(2);
            $cafeteria = Boption::find(3);
           /* $img = Business::create([
               'filename' => $faker->lastName(),
               // 'path' => $faker->imageUrl(600, 600),
               // 'type' => 'gallery'
            ]);*/
            $img = Document::create([
                'filename' => $faker->lastName(),
                'path' => '/img/images/mountainerring-in-ladakh@2x.png',
                'type' => 'gallery'
            ]);
                /* article 1 */
            $thumbnail = Document::create([
                'filename' => 'Ice hockey',
                'path' => 'img/articles/icehockey.jpg',
                'type' => 'thumbnail'
            ]);
            $banners = array();
            $banners[0] = Document::create([
                'filename' => $faker->lastName(),
                'path' => '/img/stay/1.png',
                'type' => 'banner'
            ]);
            $banners[1] = Document::create([
                'filename' => $faker->lastName(),
                'path' => '/img/stay/2.png',
                'type' => 'banner'
            ]);
            
            $business = [
                [
               'name' => 'Fetra Rest',
               'password' => Hash::make('1234'),
               'status' =>  'waiting_form',
               'email' => 'fetrarij@gmail.com',
               'phone' => '0341157170',
               'price'=>$faker->randomNumber(2),
               'price_start'=>$faker->randomNumber(2),
               'property_name'=>"Asa",
               'business_category_id' => 2,
               'business_subcategory_id' => 13,
                'documentStatus' => 'pending',
                'displayStatus' => 'pending',
                'comment'=>"Lorem ipsum",
                'website_address'=> $faker->url(),
                'about' => $faker->text(150),
                'city'=>'leh',
                'lat'=>34.2268,
                'lng'=>77.5619,
                'address'=>"Ladakh",
                "banner_id" => $banners[0]->id,
                "thumbnail_id" =>  $thumbnail->id, 
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now()  
                ],
                [
                    'name' => 'Selesy HOTEL',
                    'password' => Hash::make('1234'),
                    'status' =>  'valid',
                    'email' => 'celestin.web3lance@gmail.com',
                    'phone' => '0343884438',
                    'price'=>$faker->randomNumber(2),
                    'price_start'=>$faker->randomNumber(2),
                    'property_name'=>"Asa",
                    'business_category_id' => 1,
                    'business_subcategory_id' => 10,
                     'documentStatus' => 'valid',
                     'displayStatus' => 'valid',
                     'comment'=> $faker->text(50),
                     'website_address'=> $faker->url(),
                     'about' => $faker->text(250),
                     'city'=>'leh',
                     'lat'=>34.2268,
                     'lng'=>77.5619,
                     'address'=>"13 rue de dalton",
                     "banner_id" => $banners[0]->id,
                     "thumbnail_id" =>  $thumbnail->id, 
                     'created_at'        => Carbon::now(),
                     'updated_at'        => Carbon::now()  
                     ],
                [
                'name' => $faker->company(),
                'password' => Hash::make('1234'),
                'status' =>  'valid',
                'business_category_id' => 2,
                'business_subcategory_id' => null,
                'email' => $faker->email(),
                'phone' => '0328874164',
                'price'=> $faker->randomNumber(2),
                'price_start'=>$faker->randomNumber(2),
                'property_name'=>"Asa",
                 'documentStatus' => 'pending',
                 
                 'displayStatus' => 'valid',
                 'comment'=>"Lorem ipsum",
                 'website_address'=> $faker->url(),
                 'about'=> $faker->text(150),
                 'city'=> 'leh',
                 'lat'=>34.2268,
                 'lng'=>77.5619,
                 'address'=>"Ladakh",
                 "banner_id" => $banners[0]->id,
                 "thumbnail_id" =>  $thumbnail->id,
                 'created_at'        => Carbon::now(),
                 'updated_at'        => Carbon::now()
                ],
                [
                'name' => $faker->company(),
                'password' => Hash::make('1234'),
                'status' =>  'valid',
                'business_category_id' => 3,
                'business_subcategory_id' => null,
                'email' => $faker->email(),
                'phone' => $faker->phoneNumber(),
                'price'=> $faker->randomNumber(2),
                'price_start'=>$faker->randomNumber(2),
                'property_name'=>"Asa",
                 'documentStatus' => 'pending',
                 
                 'displayStatus' => 'valid',
                 'comment'=>"Lorem ipsum",
                 'website_address'=> $faker->url(),
                 'about' => $faker->text(150),
                 'city'=> 'leh',
                 'lat'=>34.2268,
                 'lng'=>77.5619,
                 'address'=>"Ladakh",
                 "banner_id" => $banners[0]->id,
                 "thumbnail_id" =>  $thumbnail->id,
                 'created_at'        => Carbon::now(),
                 'updated_at'        => Carbon::now()
                ],
                [
                'name' => $faker->company(),
                'password' => Hash::make('1234'),
                'status' =>  'valid',
                'business_category_id' => 1,
                'business_subcategory_id' => 10,
                'email' => $faker->email(),
                'phone' => $faker->phoneNumber(),
                'price'=>$faker->randomNumber(2),
                'price_start'=>$faker->randomNumber(2),
                'property_name'=>"Asa",
                'documentStatus' => 'pending',
                
                'displayStatus' => 'valid',
                'comment'=>"Lorem ipsum",
                'website_address'=> $faker->url(),
                'about' => $faker->text(150),
                'city'=>'leh',
                'lat'=>34.2268,
                'lng'=>77.5619,
                'address'=>"Ladakh",
                "banner_id" => $banners[0]->id,
                "thumbnail_id" =>  $thumbnail->id,
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now()
                ],
                [
                'name' => $faker->company(),
                'password' => Hash::make('1234'),
                'status' =>  'valid',
                'business_category_id' => 1,
                'business_subcategory_id' => 11,
                'email' => $faker->email(),
                'phone' => $faker->phoneNumber(),
                'price'=>$faker->randomNumber(2),
                'price_start'=>$faker->randomNumber(2),
                'property_name'=>"Asa",
                'documentStatus' => 'pending',
                
                'displayStatus' => 'valid',
                'comment'=>"Lorem ipsum",
                'website_address'=> $faker->url(),
                'about' => $faker->text(150),
                'city'=>'leh',
                'lat'=>34.2268,
                'lng'=>77.5619,
                'address'=>"Ladakh",
                "banner_id" => $banners[0]->id,
                "thumbnail_id" =>  $thumbnail->id,
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now()
                ],
                [
                'name' => $faker->company(),
                'password' => Hash::make('1234'),
                'status' =>  'valid',
                'business_category_id' => 1,
                'business_subcategory_id' => 11,
                'email' => $faker->email(),
                'phone' => $faker->phoneNumber(),
                'price'=>$faker->randomNumber(2),
                'price_start'=>$faker->randomNumber(2),
                'property_name'=>"Asa",
                'documentStatus' => 'pending',
                
                'displayStatus' => 'valid',
                'comment'=>"Lorem ipsum",
                'website_address'=> $faker->url(),
                'about' => $faker->text(150),
                'city'=>'leh',
                'lat'=>34.2268,
                'lng'=>77.5619,
                'address'=>"Ladakh",
                "banner_id" => $banners[0]->id,
                "thumbnail_id" =>  $thumbnail->id,
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now()
                ],
                [
                'name' => $faker->company(),
                'password' => Hash::make('1234'),
                'status' =>  'valid',
                'business_category_id' => 3,
                'business_subcategory_id' => null,
                'email' => $faker->email(),
                'phone' => '0344080088',
                'price'=>$faker->randomNumber(2),
                'price_start'=>$faker->randomNumber(2),
                'property_name'=>"Asa",
                'documentStatus' => 'pending',
                
                'displayStatus' => 'valid',
                'comment'=>"Lorem ipsum",
                'website_address'=> $faker->url(),
                'about' => $faker->text(150),
                'city'=>'leh',
                'lat'=>34.2268,
                'lng'=>77.5619,
                'address'=>"Ladakh",
                "banner_id" => $banners[0]->id,
                "thumbnail_id" =>  $thumbnail->id,
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now()
                ],
                [
                'name' => $faker->company(),
                'password' => Hash::make('1234'),
                'status' =>  'valid',
                'business_category_id' => 1,
                'business_subcategory_id' => 11,
                'email' => $faker->email(),
                'phone' => $faker->phoneNumber(),
                'price'=>$faker->randomNumber(2),
                'price_start'=>$faker->randomNumber(2),
                'property_name'=>"Asa",
                'documentStatus' => 'pending',
                
                'displayStatus' => 'valid',
                'comment'=>"Lorem ipsum",
                'website_address'=> $faker->url(),
                'about' => $faker->text(150),
                'city'=>'leh',
                'lat'=>34.2268,
                'lng'=>77.5619,
                'address'=>"Ladakh",
                "banner_id" => $banners[0]->id,
                "thumbnail_id" =>  $thumbnail->id,
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now()
                ],
                [
                'name' => $faker->company(),
                'password' => Hash::make('1234'),
                'status' =>  'valid',
                'business_category_id' => 1,
                'business_subcategory_id' => 10,
                'email' => $faker->email(),
                'phone' => $faker->phoneNumber(),
                'price'=>$faker->randomNumber(2),
                'price_start'=>$faker->randomNumber(2),
                'property_name'=>"Asa",
                'documentStatus' => 'pending',
                
                'displayStatus' => 'valid',
                'comment'=>"Lorem ipsum",
                'website_address'=> $faker->url(),
                'about' => $faker->text(150),
                'city'=>'leh',
                'lat'=>34.2268,
                'lng'=>77.5619,
                'address'=>"Ladakh",
                "banner_id" => $banners[0]->id,
                "thumbnail_id" =>  $thumbnail->id,
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now()
                ],
                [
                'name' => $faker->company(),
                'password' => Hash::make('1234'),
                'status' =>  'valid',
                'business_category_id' => 1,
                'business_subcategory_id' => 11,
                
                'email' => $faker->email(),
                'phone' => $faker->phoneNumber(),
                'price'=>$faker->randomNumber(2),
                'price_start'=>$faker->randomNumber(2),
                'property_name'=>"Asa",
                'documentStatus' => 'pending',
                
                'displayStatus' => 'valid',
                'comment'=>"Lorem ipsum",
                'website_address'=> $faker->url(),
                'about' => $faker->text(150),
                'city'=> 'test',
                'lat'=>34.2268,
                'lng'=>77.5619,
                'address'=>"Ladakh",
                "banner_id" => $banners[0]->id,
                "thumbnail_id" =>  $thumbnail->id,
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now()
                ],
                [
                'name' => $faker->company(),
                'password' => Hash::make('1234'),
                'status' =>  'valid',
                'business_category_id' => 1,
                'business_subcategory_id' => 12,
                'email' => $faker->email(),
                'phone' => $faker->phoneNumber(),
                'price'=>32,
                'price_start'=>$faker->randomNumber(2),
                'property_name'=>"Asa",
                'documentStatus' => 'pending',
                
                'displayStatus' => 'valid',
                'comment'=>"Lorem ipsum",
                'website_address'=> $faker->url(),
                'about' => $faker->text(150),
                'city'=>'leh',
                'lat'=>34.2268,
                'lng'=>77.5619,
                'address'=>"Ladakh",
                "banner_id" => $banners[0]->id,
                "thumbnail_id" =>  $thumbnail->id,
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now()
                ],
                [
                'name' => $faker->company(),
                'password' => Hash::make('1234'),
                'status' =>  'valid',
                'business_category_id' => 1,
                'business_subcategory_id' => 13,
                
                'email' => $faker->email(),
                'phone' => $faker->phoneNumber(),
                'price'=>$faker->randomNumber(2),
                'price_start'=>$faker->randomNumber(2),
                'property_name'=>"Asa",
                'documentStatus' => 'pending',
                
                'displayStatus' => 'valid',
                'comment'=>"Lorem ipsum",
                'website_address'=> $faker->url(),
                'about' => $faker->text(150),
                'city'=>'leh',
                'lat'=>34.2268,
                'lng'=>77.5619,
                'address'=>"Ladakh",
                "banner_id" => $banners[0]->id,
                "thumbnail_id" =>  $thumbnail->id,
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now()
                ],
                [
                'name' => $faker->company(),
                'password' => Hash::make('1234'),
                'status' =>  'valid',
                'business_category_id' => 9,
                'business_subcategory_id' => null,
                
                'email' => $faker->email(),
                'phone' => $faker->phoneNumber(),
                'price'=>$faker->randomNumber(2),
                'price_start'=>$faker->randomNumber(2),
                'property_name'=>"Asa",
                'documentStatus' => 'pending',
                
                'displayStatus' => 'valid',
                'comment'=>"Lorem ipsum",
                'website_address'=> $faker->url(),
                'about' => $faker->text(150),
                'city'=>'leh',
                'lat'=>34.2268,
                'lng'=>77.5619,
                'address'=>"Ladakh",
                "banner_id" => $banners[0]->id,
                "thumbnail_id" =>  $thumbnail->id,
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now()
                ],
            ];
         
        DB::table('business')->insert($business);
        for ($i = 1; $i< count($business);$i++) {
                $bus = Business::find($i);
                $bus->banners()->attach( $banners[0]);
                $bus->banners()->attach( $banners[1]);
        }
        // seed room options
        for($i = 1; $i < 14;$i++) {
            $business = Business::find($i);
            $business->rooms()->sync([
                1 => [
                    'customTitle' => $faker->text(8),
                    'customSubtitle' => $faker->text(15),
                ],
                2 => [
                    'customTitle' => $faker->text(8),
                    'customSubtitle' => $faker->text(15),
                ],
            ]);
        }
      
        if (DB::connection()->getDriverName() == 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }
    }
}

      