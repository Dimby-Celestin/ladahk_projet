<?php

/**
 * Ladakh swagger
 * Documentation for the ladakh platform
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


namespace App\Http\Controllers\Api\V1;

use Illuminate\Support\Facades\Request;

class VideoApi extends Controller
{
    /**
     * Constructor
     */
    public function __construct()
    {
    }

    /**
     * Operation deleteVideo
     *
     * Deletes a user by ID.
     *
     * @param string $id Video ID (required)
     *
     * @return Http response
     */
    public function deleteVideo($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing deleteVideo as a delete method ?');
    }
    /**
     * Operation getVideo
     *
     * Gets a doc by ID.
     *
     * @param string $id Video ID. (required)
     *
     * @return Http response
     */
    public function getVideo($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing getVideo as a get method ?');
    }
    /**
     * Operation updateVideo
     *
     * Updates a Video by ID.
     *
     * @param string $id Video ID. If called from the application, can be \&quot;me\&quot;. (required)
     *
     * @return Http response
     */
    public function updateVideo($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing updateVideo as a put method ?');
    }
    /**
     * Operation allVideos
     *
     * Returns a list of documents..
     *
     *
     * @return Http response
     */
    public function allVideos()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        if (!isset($input['limit'])) {
            throw new \InvalidArgumentException('Missing the required parameter $limit when calling allVideos');
        }
        $limit = $input['limit'];

        if (!isset($input['page'])) {
            throw new \InvalidArgumentException('Missing the required parameter $page when calling allVideos');
        }
        $page = $input['page'];

        $sort_field = $input['sort_field'];

        $search_value = $input['search_value'];

        $search_fields = $input['search_fields'];


        return response('How about implementing allVideos as a get method ?');
    }
    /**
     * Operation createVideo
     *
     * Creates a document.
     *
     *
     * @return Http response
     */
    public function createVideo()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $body = $input['body'];


        return response('How about implementing createVideo as a post method ?');
    }
}