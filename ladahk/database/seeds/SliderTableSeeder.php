<?php

use Illuminate\Database\Seeder;
use App\Models\Slider;
use App\Models\Document;
use Carbon\Carbon as Carbon;

class SliderTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $faker = Faker\Factory::create();
    // slide 1
    $img1 = Document::create([
       
        'path' => 'img/slide/1.jpg',
    ]);
    $slide1 = Slider::create([
       
        'title' => '',
        'content' => 'Across New Zealand, you can find everything from untamed wilderness to rich culture. Find inspiration in <br/>towering mountains and mist-cloaked fjords.',
        'image_id' => $img1->id,
        'created_at'        => Carbon::now(),
        'updated_at'        => Carbon::now(),
    ]);
    // slide 2
    $img2 = Document::create([
        'path' => 'img/slide/2.png',
    ]);
    $slide2 = Slider::create([
        'title' => 'DEMO SITE DESIGN
        All contents are for visual purpose only.',
        'content' => 'Across New Zealand, you can find everything from untamed wilderness to rich culture. Find inspiration in <br/>towering mountains and mist-cloaked fjords.',
        'image_id' => $img2->id,
        'created_at'        => Carbon::now(),
        'updated_at'        => Carbon::now()
    ]);
    }
    }
