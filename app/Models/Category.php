<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $casts = ['id' => 'string'];

    protected $table = 'categories';
    protected $parentColumn = 'category_id';
    public $timestamps = false;

    protected $fillable = ['category_name','category_link','category_id'];

    public function category(){
        return $this->belongsTo(Category::class,$this->parentColumn)->select('category_name','id');
    }

    // public function parent()
    // {
    //     return $this->belongsTo('App\Models\Category','category_id')->where('category_id',0);
    // }

    // public function children()
    // {
    //     return $this->hasMany('App\Models\Category','category_id');
    // }
   
}
