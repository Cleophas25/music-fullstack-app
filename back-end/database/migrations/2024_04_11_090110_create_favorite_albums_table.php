<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('favorite_albums', function (Blueprint $table) {
           $table->increments('id');
            $table->string('name');
            $table->string('artist');
            $table->string('image');
            $table->string('url');
            $table->integer('listeners');
            $table->integer('playcount');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('favorite_albums');
    }
};
