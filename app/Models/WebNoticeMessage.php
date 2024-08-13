<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebNoticeMessage extends Model
{
    use HasFactory;

    protected $hidden = [
        'web_notice_id',
        'created_at',
        'updated_at'
    ];
}
