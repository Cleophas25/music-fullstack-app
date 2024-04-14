<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');





Route::get('/top-artists', [ApiController::class, 'getTopArtists']);
Route::get('/search-artists', [ApiController::class, 'searchArtists']);
Route::get('/top-tracks-by-artist', [ApiController::class, 'getTopTracksByArtist']);
Route::get('/artist-info', [ApiController::class, 'getArtistInfo']);
Route::get('/similar-artists', [ApiController::class, 'getSimilarArtists']);
Route::get('/top-tags-by-artist', [ApiController::class, 'getTopTagsByArtist']);
Route::get('/top-albums-by-artist', [ApiController::class, 'getTopAlbumsByArtist']);
Route::get('/album-info', [ApiController::class, 'getAlbumInfo']);
Route::get('/tags-by-album', [ApiController::class, 'getTagsByAlbum']);


Route::group(['middleware' => ['api']], function () {
    // Stateless API routes
    Route::get('/auth/callback', [AuthController::class, 'handleAuthCallback']);
    Route::get('/auth', [AuthController::class, 'redirectToAuth']);
});
