<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notes extends Model
{
    protected $fillable = [
        'user_id',
        'project_id',
        'status',
        'note',

    ];
}