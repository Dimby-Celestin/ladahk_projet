<?php

use Illuminate\Database\Seeder;
use App\Models\Business;
use Carbon\Carbon as Carbon;

class BusinessManyRelationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $businesses = Business::all();
        foreach($businesses as $business) {
            $business->amenities()->sync([1,3]);
            $business->highlights()->sync([1,2]);
        }
        $businessSelestin = Business::find(2); // selestin hotel

        $businessSelestin->rooms()->sync([1, 3]);
    }
}
