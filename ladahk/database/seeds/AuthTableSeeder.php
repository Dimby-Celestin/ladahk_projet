<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

/**
 * Class AuthTableSeeder.
 */
class AuthTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();

        $this->call(UserTableSeeder::class);

        Schema::enableForeignKeyConstraints();
    }
}
