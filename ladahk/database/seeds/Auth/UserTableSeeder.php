<?php

use App\Events\Backend\UserCreated;
use App\Models\User;
use Carbon\Carbon as Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

/**
 * Class UserTableSeeder.
 */
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seed.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();

        $faker = Faker\Factory::create();

        // Add the master administrator, user id of 1
        $users = [
            [
                'name'         => 'Ladakh Admin',
                'email'             => 'admin@ladakh.com',
                'password'          => Hash::make('123456'),
                'approved'          => true,
                'role'          => 'admin',
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now(),
            ],
            [
                'name'         => 'Ladakh Vendor',
                'email'             => 'vendor@ladakh.com',
               // 'password'          => Hash::make('123456'),
                'approved'          => true,
                'role' => 'vendor',
                'password'          => Hash::make('1234'),
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now(),
            ],
            [
                'name'         => 'Ladakh User',
                'email'             => 'user@ladakh.com',
               // 'password'          => Hash::make('123456'),
                'approved'          => true,
                'password'          => Hash::make('1234'),
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now(),
            ],
            [
                'name'         => 'Ladakh Manager',
                'email'             => 'manager@ladakh.com',
               // 'password'          => Hash::make('123456'),
                'approved'          => true,
                'role' => 'manager',
                'password'          => Hash::make('1234'),
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now(),
            ],
            [
                'name'         => 'Tay photograpther',
                'email'             => 'photographer@ladakh.com',
                'password'          => Hash::make('123456'),
                'approved'          => true,
                'password'          => Hash::make('1234'),
                'role'          => 'photographer',
                'created_at'        => Carbon::now(),
                'updated_at'        => Carbon::now(),
            ]
        ];

        foreach ($users as $user_data) {
            $user = User::create($user_data);
        }

        Schema::enableForeignKeyConstraints();
    }
}
