<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Request;
use App\Http\Utils\Utils;
use Illuminate\Support\Facades\Log;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;
use Illuminate\Support\Facades\DB;


class PopulateInformationCenter extends Command
{
    protected $signature = 'populate-information-center';
    //protected $filePath = 'imports/information_centre_database.xlsx';
    protected $filePath = 'imports/Information_Centre_Database.csv';
    public function handle()
    {
        try {
            $this->comment(date('[Y-m-d h:i:s]') . $this->signature . " starting...");
            $spreadsheet =  IOFactory::load(storage_path(). '/' .$this->filePath);
            $workSheet = $spreadsheet->getActiveSheet();
            $this->info('file load at '. storage_path(). '/' .$this->filePath );
            $this->info('populating information center:  ' .  date('Y-m-d'));
            $rows = $workSheet->toArray();
            $key = [
                'displayName', 
                'subCategory',
                'lat',
                'lng',
                'locationCategory',
                'locationSubCategory',
                'activityCategory',
                'description',
                'imageUrl',
            ];
            $array = [];
            for ($i = 2; $i < count($rows); $i++) {
                $latLng = explode(',' ,$rows[$i][2]);
                $item = [
                    'displayName' => $rows[$i][0],
                    'subCategory' => $rows[$i][1],
                    'lat' => $latLng[0],
                    'lng' => $latLng[1],
                    'locationCategory' => $rows[$i][3],
                    'locationSubCategory' => $rows[$i][4],
                    'activityCategory' => $rows[$i][5],
                    'description' => $rows[$i][6],
                    'imageUrl' => $rows[$i][7],
                ];
                array_push($array, $item);
            }
            // Get tickets expired more than 24h
            // $this->info(print_r($array, true));
            DB::table('information')->delete();
            DB::table('information')->insert($array);

            
            $this->info(date('[Y-m-d h:i:s]') . $this->signature . " done!");
        } catch (QueryException $e) {
            $this->error($e->getMessage());
        }
    }
}
