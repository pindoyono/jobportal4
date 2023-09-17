<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        'department_name',
    ];

    // no timestamps
    public $timestamps = false;

    // has many jobs
    public function jobs()
    {
        return $this->hasMany(Job::class);
    }

    public function scopeApplyFilters($query, Request $request)
    {
        if ($request->filled("department")) {
            $query->where("department_id", $request->department);
        }
    }
}
