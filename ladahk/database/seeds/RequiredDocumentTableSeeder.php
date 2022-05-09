<?php

use Illuminate\Database\Seeder;
use App\Models\RequiredDocument;
use Carbon\Carbon as Carbon;

class RequiredDocumentTableSeeder extends Seeder
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
 
          
            $datas = [
                [
                    'name' => 'Ownership papers of Land.',
                    'business_category_id' => 1,
                    'ownership' => 1
                ],
                [
                'name' => 'Lease deed/Rent deed/Partnership deed of the premises where the applicant proprietor desire to start the Travel/Excursion agent.',
                'business_category_id' => 1,
                'ownership' => 0
                ],
                [
                    'name' => 'Bank balance Certificate of applicant proprietor from the police department.',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'Character Certificate of applicant proprietor from the Police Department.',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self-attested copy of Schedule Tribe Certificate of the applicant proprietor.',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'Qualification Certificate (Pass on class 12th / Graduation)',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'Two passport size self attested photos of the applicant proprietor.',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'Site plan of shop indicating the location of proposed Travel/Excursion agency.',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'Press cutting regarding the No Objection from general public (within two weeks from the date of publication).',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'NOC from All Ladakh Tour Operator Association (ALTOA)',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'Photograph of the team undertaking the inspection of premises should also be done to establish physical presence of the official from the Tourism Department.',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'Lease deed/Rent deed/Partnership deed of the premises where the applicant proprietor desire to start the Travel/Excursion agent.',
                    'business_category_id' => 2,
                    'ownership' => 0
                ],
                [
                    'name' => 'Lease deed/Rent deed/Partnership deed of the premises where the applicant proprietor desire to start the Hotel/Camp/Resort.',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'Drawing/Site Plan duly approved  by the competent
                    authority.',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                
                [
                    'name' => 'Self-attested copy of Schedule Tribe Certificate of the applicant proprietor under UT Ladakh.',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'Two passport size self attested photos of the applicant proprietor.',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'Press cutting regarding the No Objection from general public (within two weeks from the date of publication).',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'NOC from All Ladakh Tour Operator Association (ALTOA).',
                    'business_category_id' => 1,
                    'ownership' => 1
                ],
                [
                    'name' => 'Photograph of the team undertaking the inspection of premises should also be done to establish physical presence of the official from the Tourism Department.',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'Bank balance Certificate of having more than  Rs.50,000/-(Fifty thousand Only) in the name of proposed Travel/Excursion Agent.',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],
                [
                    'name' => 'The academic qualification may be relaxed in case of the other two staff members who are exceptionally experienced personel in Airlines, ',
                    'business_category_id' => 1,
                    'ownership' => 0
                ],



                [
                    'name' => 'Drawing/Site Plan duly approved  by the competent authority.',
                    'business_category_id' => 2,
                    'ownership' => 0
                ],

                [
                    'name' => 'Sophisticated Accommodation (for hotels is should be minimum Twelve rooms i,e 24 Bed Capacity)',
                    'business_category_id' => 2,
                    'ownership' => 0
                ],
                [
                    'name' => 'Ownership papers of Land.',
                    'business_category_id' => 2,
                    'ownership' => 1
                ],
                [
                    'name' => 'Lease deed/Rent deed/Partnership deed of the premises where the applicant proprietor desire to start the Hotel/Camp/Resort.',
                    'business_category_id' => 2,
                    'ownership' => 0
                ],
                [
                    'name' => 'Character Certificate of applicant proprietor from the Police Department.',
                    'business_category_id' => 2,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self-attested copy of Schedule Tribe Certificate of the applicant proprietor under UT Ladakh.',
                    'business_category_id' => 2,
                    'ownership' => 0
                ],
                [
                    'name' => 'Two passport size self attested photos of the applicant proprietor.',
                    'business_category_id' => 2,
                    'ownership' => 1
                ],
                [
                    'name' => 'Self attested copy of PAN Card/Aadhar Card/Election Card of applicant/proprietor.',
                    'business_category_id' => 2,
                    'ownership' => 0
                ],
                [
                    'name' => 'Consent order from UT Ladakh Pollution Control Board for Hotels (Hotels with upto Six (6) rooms are exempted  from consent from the pollution board.',
                    'business_category_id' => 2,
                    'ownership' => 1
                ],
                [
                    'name' => 'NOC from UT Ladakh Fire Service Department.',
                    'business_category_id' => 2,
                    'ownership' => 1
                ],
                [
                    'name' => 'NOC from PHE Department, UT Ladakh/Electric Department UT Ladakh.',
                    'business_category_id' => 2,
                    'ownership' => 0
                ],
                [
                    'name' => 'Building permission from NAC Department.',
                    'business_category_id' => 2,
                    'ownership' => 0
                ],
                [
                    'name' => 'Photograph of the team undertaking the inspection of premises should also be done to establish physical presence of the official from the Tourism Department.',
                    'business_category_id' => 2,
                    'ownership' => 0
                ],
                [
                    'name' => 'Minimum 10 Vehicle parking capacity.',
                    'business_category_id' => 2,
                    'ownership' => 0
                ],



                [
                    'name' => 'Sophisticated Accommodation (for hotels is should be minimum Twelve rooms i,e 24 Bed Capacity)
                    a-  Single Bed Room+ 110 sft. B. Double Bed Room+ 168 Sft
                    b-  Bath room +40 Sft Economy Class + 55 sft each Bed',
                    'business_category_id' => 3,
                    'ownership' => 0
                ],
                [
                    'name' => 'Ownership papers of Land.',
                    'business_category_id' => 3,
                    'ownership' => 0
                ],
                [
                    'name' => 'Lease deed/Rent deed/Partnership deed of the premises where the applicant proprietor desire to start the Guest House.',
                    'business_category_id' => 3,
                    'ownership' => 0
                ],
                [
                    'name' => 'Character Certificate of applicant proprietor from the Police Department.',
                    'business_category_id' => 3,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self attested copy of Schedule Tribe Certificate of the applicant proprietor under UT Ladakh.',
                    'business_category_id' => 3,
                    'ownership' => 0
                ],
                [
                    'name' => 'Two passport size self attested photos of the applicant proprietor.',
                    'business_category_id' => 3,
                    'ownership' => 1
                ],
                [
                    'name' => 'Self attested copy of PAN Card/Aadhar Card/Election Card of applicant/proprietor.',
                    'business_category_id' => 3,
                    'ownership' => 0
                ],
                 
                [
                    'name' => 'Consent order from UT Ladakh Pollution Control Board for Hotels (Hotels with upto Six (6) rooms are exempted  from consent from the pollution board.',
                    'business_category_id' => 3,
                    'ownership' => 0
                ],
                [
                    'name' => 'NOC from UT Ladakh Fire Service Department.',
                    'business_category_id' => 3,
                    'ownership' => 0
                ],
                [
                    'name' => 'NOC from PHE Department, UT Ladakh/Electric Department UT Ladakh.',
                    'business_category_id' => 3,
                    'ownership' => 0
                ],
                [
                    'name' => 'Photograph of the team undertaking the inspection of premises should also be done to establish physical presence of the official from the Tourism Department.',
                    'business_category_id' => 3,
                    'ownership' => 0
                ],
                [
                    'name' => 'Minimum 10 Vehicle parking capacity.',
                    'business_category_id' => 3,
                    'ownership' => 0
                ],
               

                [
                    'name' => 'Ownership papers of Land.',
                    'business_category_id' => 4,
                    'ownership' => 1
                ],
                [
                    'name' => 'Lease deed/Rent deed/Partnership deed of the premises where the applicant proprietor desire to start the Homestay.',
                    'business_category_id' => 4,
                    'ownership' => 0
                ],

                [
                    'name' => 'Character Certificate of applicant proprietor from the Police Department.',
                    'business_category_id' => 4,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self-attested copy of Schedule Tribe Certificate of the applicant proprietor under UT Ladakh.',
                    'business_category_id' => 4,
                    'ownership' => 0
                ],
                [
                    'name' => 'Two passport size self attested photos of the applicant proprietor.',
                    'business_category_id' => 4,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self attested copy of PAN Card/Aadhar Card/Election Card of applicant/proprietor.',
                    'business_category_id' => 4,
                    'ownership' => 0
                ],
                [
                    'name' => 'NOC from Nambardar/Councillor.',
                    'business_category_id' => 4,
                    'ownership' => 0
                ],
                [
                    'name' => 'Building plan.',
                    'business_category_id' => 4,
                    'ownership' => 0
                ],
                [
                    'name' => 'NOC from Wildlife Warden Department (Area of Wildlife Sanctuary).',
                    'business_category_id' => 4,
                    'ownership' => 0
                ],

                [
                    'name' => 'Ownership papers of Land.',
                    'business_category_id' => 5,
                    'ownership' => 1
                ],
                [
                    'name' => 'Lease deed/Rent deed/Partnership deed of the premises where the applicant proprietor desire to start the Camping Site.',
                    'business_category_id' => 5,
                    'ownership' => 0
                ],
                [
                    'name' => 'Character Certificate of applicant proprietor from the Police Department.',
                    'business_category_id' => 5,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self attested copy of Schedule Tribe Certificate of the applicant proprietor under UT Ladakh.',
                    'business_category_id' => 5,
                    'ownership' => 0
                ],
                [
                    'name' => 'Two passport size self attested photos of the applicant proprietor.',
                    'business_category_id' => 5,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self attested copy of PAN Card/Aadhar Card/Election Card of applicant/proprietor.',
                    'business_category_id' => 5,
                    'ownership' => 0
                ],
                [
                    'name' => 'NOC from Nambardar/Councillor.',
                    'business_category_id' => 5,
                    'ownership' => 0
                ],
                [
                    'name' => 'Site plan of Camp indicating the location of proposed Camping site.',
                    'business_category_id' => 5,
                    'ownership' => 0
                ],


                [
                    'name' => 'Ownership papers of Land.',
                    'business_category_id' => 6,
                    'ownership' => 0
                ],
                [
                    'name' => 'Lease deed/Rent deed/Partnership deed of the premises where the applicant proprietor desire to start the Travel/Excursion agent.',
                    'business_category_id' => 6,
                    'ownership' => 0
                ],
                [
                    'name' => 'Character Certificate of applicant proprietor from the Police Department.',
                    'business_category_id' => 6,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self attested copy of Schedule Tribe Certificate of the applicant proprietor under UT Ladakh.',
                    'business_category_id' => 6,
                    'ownership' => 0
                ],


                [
                    'name' => 'Character Certificate of applicant proprietor from the Police Department.',
                    'business_category_id' => 7,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self attested copy of Schedule Tribe Certificate of the applicant proprietor under UT Ladakh.',
                    'business_category_id' => 7,
                    'ownership' => 0
                ],
                [
                    'name' => 'Two passport size self attested photos of the applicant proprietor.',
                    'business_category_id' => 7,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self attested copy of PAN Card/Aadhar Card/Election Card of applicant/proprietor.',
                    'business_category_id' => 7,
                    'ownership' => 0
                ],
                [
                    'name' => 'Qualification Graduate/12th.',
                    'business_category_id' => 7,
                    'ownership' => 0
                ],
                [
                    'name' => 'Candidate have to submit the proof of guide training Course.',
                    'business_category_id' => 7,
                    'ownership' => 0
                ],
                [
                    'name' => 'Two passport size self attested photos of the applicant proprietor.',
                    'business_category_id' => 7,
                    'ownership' => 0
                ],
                [
                    'name' => 'Certificate of residence proof by the Competent Authority.
                    Passeport, Voter Card, Ration Card.',
                    'business_category_id' => 7,
                    'ownership' => 0
                ],
                [
                    'name' => 'Graduate from recognized University.',
                    'business_category_id' => 7,
                    'ownership' => 0
                ],
                [
                    'name' => 'Holder of three year Degree Tourims/Hospitality Candidate have to submit the proof of guide training Course.',
                    'business_category_id' => 7,
                    'ownership' => 0
                ],





                [
                    'name' => 'Character Certificate of applicant proprietor from the Police Department.',
                    'business_category_id' => 8,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self attested copy of Schedule Tribe Certificate of the applicant proprietor under UT Ladakh.',
                    'business_category_id' => 8,
                    'ownership' => 0
                ], 
               
            ];
            for($i = 9;$i <= 13; $i++) {
                $docs = [

                [
                    'name' => 'Character Certificate of applicant proprietor from the Police Department.',
                    'business_category_id' => $i,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self attested copy of Schedule Tribe Certificate of the applicant proprietor under UT Ladakh.',
                    'business_category_id' => $i,
                    'ownership' => 0
                ],
                [
                    'name' => 'Two passport size self attested photos of the applicant proprietor.',
                    'business_category_id' => $i,
                    'ownership' => 0
                ],
                [
                    'name' => 'Self attested copy of PAN Card/Aadhar Card/Election Card of applicant/proprietor.',
                    'business_category_id' => $i,
                    'ownership' => 0
               
                ]
                ];
            }

        DB::table('required_documents')->insert($datas);
        DB::table('required_documents')->insert($docs);

    
        
        if (DB::connection()->getDriverName() == 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }
    }
}

      