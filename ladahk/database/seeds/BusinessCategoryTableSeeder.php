<?php

use Illuminate\Database\Seeder;
use App\Models\Business;
use App\Models\Document;
use Carbon\Carbon as Carbon;
use Illuminate\Support\Facades\Hash;

class BusinessCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            $businessCategories = [
                [
                    'name' => 'Excursion Agent/Travel Agent',
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 1,
                    'parent_id' => null,
                    'register_fee' => 10,
                    'renewal_fee' => 8,
                    'accommodation' => false
                ],
                [
                    'name' => 'Hotel/Resort/Camp',
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 0,
                    'parent_id' => null,
                    'register_fee' => 10,
                    'renewal_fee' => 8,
                    'accommodation' => true
                ],
                [
                    'name' => 'Guest House',
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 0,
                    'parent_id' => null,
                    'register_fee' => 10,
                    'renewal_fee' => 8,
                    'accommodation' => true
                ],
                [
                    'name' => ' Home Stay',
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 0,
                    'register_fee' => 10,
                    'parent_id' => null,
                    'renewal_fee' => 8,
                    'accommodation' => true
                ],
                [
                    'name' => 'Camping Site',
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 0,
                    'register_fee' => 10,
                    'parent_id' => null,
                    'renewal_fee' => 8,
                    'accommodation' => true
                ],
                [
                    'name' => 'Restaurant/Cafeteria',
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 0,
                    'register_fee' => 10,
                    'parent_id' => null,
                    'renewal_fee' => 8,
                    'accommodation' => true
                ],
                [
                    'name' => 'Tourist Guide',
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 0,
                    'register_fee' => 10,
                    'parent_id' => null,
                    'renewal_fee' => 8,
                    'accommodation' => false
                ],
                [
                    'name' => 'Camel/Yak/Pony',
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 0,
                    'register_fee' => 10,
                    'parent_id' => null,
                    'renewal_fee' => 8,
                    'accommodation' => false
                ],
                [
                    'name' => 'Photographer',
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 0,
                    'register_fee' => 10,
                    'parent_id' => null,
                    'renewal_fee' => 8,
                    'accommodation' => false
                ],
                // sous cat
                [
                    'name' => 'A',
                    'parent_id' => 1,
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 0,
                    'register_fee' => 10,
                    'renewal_fee' => 8,
                    'accommodation' => false
                ],
                [
                    'name' => 'B',
                    'parent_id' => 1,
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 0,
                    'register_fee' => 10,
                    'renewal_fee' => 8,
                    'accommodation' => false
                ],
                [
                    'name' => 'C',
                    'parent_id' => 1,
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 0,
                    'register_fee' => 10,
                    'renewal_fee' => 8,
                    'accommodation' => false
                ],
                [
                    'name' => 'D',
                    'parent_id' => 1,
                    'createPropertyListing' => 0,
                    'ableToTransfertRegistration' => 0,
                    'register_fee' => 10,
                    'renewal_fee' => 8,
                    'accommodation' => false
                ]
            ];

        DB::table('business_category')->insert($businessCategories);
        
        if (DB::connection()->getDriverName() == 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }
    }
}

      