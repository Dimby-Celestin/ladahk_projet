<?php

use Illuminate\Database\Seeder;
use App\Models\BusinessRequiredDocument;
use App\Models\RequiredDocument;
use App\Models\Business;
use Carbon\Carbon as Carbon;

class BusinessRequiredDocumentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $businesses = Business::all(); // fetra
        foreach ($businesses as $business) {
            $docs = RequiredDocument::where('business_category_id',  $business->business_category_id)->get();
            foreach( $docs as $doc) {
                $ne = BusinessRequiredDocument::create([
                    'businessId' => $business->id,
                    'requiredDocumentId' => $doc->id,
                    'filename' => 'test',
                    'path' => 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
                    // 'path'=> '/img/images/river-rafting-ladakh-head-526@3x.png',
                    'extension' => 'pdf',
                    'status' => 'pending'
                ]);
            }
        }

    }
}
