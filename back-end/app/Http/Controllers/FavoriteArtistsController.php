<?php

namespace App\Http\Controllers;

use App\Models\Favorite_Artists;
use App\Http\Requests\StoreFavorite_ArtistsRequest;
use App\Http\Requests\UpdateFavorite_ArtistsRequest;

class FavoriteArtistsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFavorite_ArtistsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Favorite_Artists $favorite_Artists)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Favorite_Artists $favorite_Artists)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFavorite_ArtistsRequest $request, Favorite_Artists $favorite_Artists)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Favorite_Artists $favorite_Artists)
    {
        //
    }
}
