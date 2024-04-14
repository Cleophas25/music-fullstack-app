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
         Schema::create('user_favorite_albums', function (Blueprint $table) {
    $table->integer('user_id')->unsigned();
    $table->integer('album_id')->unsigned();

    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    $table->foreign('album_id')->references('id')->on('favorite_albums')->onDelete('cascade');

    $table->primary(['user_id', 'album_id']);
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_favorite_albums');
    }
};
