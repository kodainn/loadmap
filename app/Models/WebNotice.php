<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WebNotice extends Model
{
    use HasFactory;

    protected $hidden = [
        'received_user_id',
        'created_at',
        'updated_at'
    ];

    public function messages(): HasMany
    {
        return $this->hasMany(WebNoticeMessage::class);
    }
}
