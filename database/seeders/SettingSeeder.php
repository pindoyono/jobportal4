<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Setting::truncate();

        Setting::insert([
            [
                'name' => 'color_scheme',
                'value' => 'blue',
            ]
        ]);
    }
}
