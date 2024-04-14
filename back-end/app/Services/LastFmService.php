<?php

namespace App\Services;

use GuzzleHttp\Client;

class LastFmService
{
    private $apiKey;

    public function __construct()
    {
        $this->apiKey = env('LASTFM_API_KEY');
    }

    public function getTopArtists($tag, $page = 1, $limit = 10)
    {
        $url = $this->buildUrl('chart.getTopArtists', [
            'tag' => $tag,
            'page' => $page,
            'limit' => $limit,
        ]);


        return $this->sendRequest($url);
    }

    public function searchArtists($query, $page = 1, $limit = 10)
    {
        $url = $this->buildUrl('artist.search', [
            'artist' => $query,
            'page' => $page,
            'limit' => $limit
        ]);
        return $this->sendRequest($url);
    }

    public function getTopTracksByArtist($artist, $page = 1, $limit = 10)
    {
        $url = $this->buildUrl('artist.getTopTracks', [
            'artist' => $artist,
            'page' => $page,
            'limit' => $limit
        ]);

        return $this->sendRequest($url);
    }

    public function getArtistInfo($artist)
    {
        $url = $this->buildUrl('artist.getinfo', [
            'artist' => $artist
        ]);

        return $this->sendRequest($url);
    }

    public function getSimilarArtists($artist)
    {
        $url = $this->buildUrl('artist.getSimilar', [
            'artist' => $artist
        ]);

        return $this->sendRequest($url);
    }

    public function getTopTagsByArtist($artist)
    {
        $url = $this->buildUrl('artist.getTopTags', [
            'artist' => $artist
        ]);

        return $this->sendRequest($url);
    }

    public function getTopAlbumsByArtist($artist, $page=1, $limit=10) {
        
         $url = $this->buildUrl('artist.getTopAlbums', [
            'artist' => $artist,
            'page' => $page,
            'limit' => $limit
        ]);

        return $this->sendRequest($url);
    }

    public function getAlbumInfo($artist, $album)
    {
        $url = $this->buildUrl('album.getInfo', [
            'artist' => $artist,
            'album' => $album
        ]);

        return $this->sendRequest($url);
    }

    public function getTagsByAlbum($artist, $album)
    {
        $url = $this->buildUrl('album.getTags', [
            'artist' => $artist,
            'album' => $album
        ]);

        return $this->sendRequest($url);
    }

    private function buildUrl($method, $params = [])
    {
        $params['method'] = $method;
        $params['api_key'] = $this->apiKey;
        $params['format'] = 'json';

        $query = http_build_query($params);
        $url = 'http://ws.audioscrobbler.com/2.0/?' . $query;
        // dd($url);
        return $url;
    }

    private function sendRequest($url)
    {
        $client = new Client();
        
        try {
            $response = $client->get($url);
            $statusCode = $response->getStatusCode();

            if ($statusCode !== 200) {
                throw new \Exception('Last.fm API request failed. Status code: ' . $statusCode);
            }

            $body = json_decode($response->getBody(), true);

            if (isset($body['error'])) {
                throw new \Exception('Last.fm API error: ' . $body['message']);
            }

            return $body;
        } catch (\Exception $e) {
            throw new \Exception('Last.fm API request failed: ' . $e->getMessage());
        }
    }
}