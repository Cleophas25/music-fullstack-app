<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\LastFmService;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    private $lastFmService;

    public function __construct(LastFmService $lastFmService)
    {
        $this->lastFmService = $lastFmService;
    }

        public function getTopArtists(Request $request)
        {
        $tag = $request->input('tag');
        $page = $request->input('page', 1);
        $limit = $request->input('limit', 10);


        if (empty($tag)) {
            return response()->json(['error' => 'Missing query parameter'], 400);
        }
        try {
            $result = $this->lastFmService->getTopArtists($tag, $page, $limit);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function searchArtists(Request $request)
    {
        $query = $request->input('query');
        $page = $request->input('page', 1);
        $limit = $request->input('limit', 10);

        if (empty($query)) {
            return response()->json(['error' => 'Missing query parameter'], 400);
        }

        try {
            $result = $this->lastFmService->searchArtists($query, $page, $limit);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getTopTracksByArtist(Request $request)
    {
        $artist = $request->input('artist');
        $page = $request->input('page', 1);
        $limit = $request->input('limit', 10);


        if (empty($artist)) {
            return response()->json(['error' => 'Missing artist parameter'], 400);
        }

        try {
            $result = $this->lastFmService->getTopTracksByArtist($artist, $page, $limit);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getArtistInfo(Request $request)
    {
        $artist = $request->input('artist');

        if (empty($artist)) {
            return response()->json(['error' => 'Missing artist parameter'], 400);
        }

        try {
            $result = $this->lastFmService->getArtistInfo($artist);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getSimilarArtists(Request $request)
    {
        $artist = $request->input('artist');

        if (empty($artist)) {
            return response()->json(['error' => 'Missing artist parameter'], 400);
        }

        try {
            $result = $this->lastFmService->getSimilarArtists($artist);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getTopTagsByArtist(Request $request)
    {
        $artist = $request->input('artist');

        if (empty($artist)) {
            return response()->json(['error' => 'Missing artist parameter'], 400);
        }

        try {
            $result = $this->lastFmService->getTopTagsByArtist($artist);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getTopAlbumsByArtist(Request $request)
    {
        $artist = $request->input('artist');
        $page = $request->input('page', 1);
        $limit = $request->input('limit', 10);

        if (empty($artist)) {
            return response()->json(['error' => 'Missing artist or album parameter'], 400);
        }

        try {
            $result = $this->lastFmService->getTopAlbumsByArtist($artist, $page, $limit);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function getAlbumInfo(Request $request)
    {
        $artist = $request->input('artist');
        $album = $request->input('album');

        if (empty($artist) || empty($album)) {
            return response()->json(['error' => 'Missing artist or album parameter'], 400);
        }

        try {
            $result = $this->lastFmService->getAlbumInfo($artist, $album);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getTagsByAlbum(Request $request)
    {
        $artist = $request->input('artist');
        $album = $request->input('album');

        if (empty($artist) || empty($album)) {
            return response()->json(['error' => 'Missing artist or album parameter'], 400);
        }

        try {
            $result = $this->lastFmService->getTagsByAlbum($artist, $album);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}