<?php

use Illuminate\Database\Seeder;
use App\Models\Business;
use App\Models\Document;
use Carbon\Carbon as Carbon;
use Illuminate\Support\Facades\Hash;

class BusinessTransferTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            $businessTransfer = [
                [
                    'businessId' => '1',
                    'newEmail' => 'jeanNew@yahoo.com',
                    'newPhone' => '+261 32 56 789 00',
                    'oldEmail' => 'jeanOld@yahoo.com',
                    'oldPhone' => '+261 34 45 890 11',
                    'newOwner' => 'Owner New',
                    'oldOwner' => 'Owner Old',
                    'status' => 'pending',
                ],
                [
                    'businessId' => '2',
                    'newEmail' => 'yvesNew@yahoo.com',
                    'newPhone' => '+261 32 12 000 20',
                    'oldEmail' => 'yvesOld@yahoo.com',
                    'oldPhone' => '+261 34 90 450 13',
                    'newOwner' => 'Owner New',
                    'oldOwner' => 'Owner Old',
                    'status' => 'pending',
                ],
                [
                    'businessId' => '3',
                    'newEmail' => 'lucNew@yahoo.com',
                    'newPhone' => '+261 32 33 190 30',
                    'oldEmail' => 'lucOld@yahoo.com',
                    'oldPhone' => '+261 34 80 189 13',
                    'newOwner' => 'Owner New',
                    'oldOwner' => 'Owner Old',
                    'status' => 'pending',
                ]
              
            ];

        DB::table('business_transferts')->insert($businessTransfer);
        
        if (DB::connection()->getDriverName() == 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }
    }
}

      