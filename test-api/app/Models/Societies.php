<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Societies extends Authenticatable
{
    use HasFactory;

    protected $table = 'societies';
    protected $fillable = ['id', 'id_card_number','password','name','born_date', 'gender','regional_id' ,'login_tokens'];

    public $timestamps = false;

    public function regional(): BelongsTo
    {
        return $this->belongsTo(Regional::class, 'regional_id');
    }


}
