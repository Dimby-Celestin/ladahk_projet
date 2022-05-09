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

class GalleryApi extends Controller
{
    /**
     * Constructor
     */
    public function __construct()
    {
    }

    /**
     * Operation allGalleries
     *
     * Returns a list of documents..
     *
     *
     * @return Http response
     */
    public function allGalleries()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        if (!isset($input['limit'])) {
            throw new \InvalidArgumentException('Missing the required parameter $limit when calling allGalleries');
        }
        $limit = $input['limit'];

        if (!isset($input['page'])) {
            throw new \InvalidArgumentException('Missing the required parameter $page when calling allGalleries');
        }
        $page = $input['page'];

        $sort_field = $input['sort_field'];

        $search_value = $input['search_value'];

        $search_fields = $input['search_fields'];

        $must_to_do = $input['must_to_do'];

        $excerpt = $input['excerpt'];


        return response('How about implementing allGalleries as a get method ?');
    }
    /**
     * Operation createGallery
     *
     * Creates a document.
     *
     *
     * @return Http response
     */
    public function createGallery()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $body = $input['body'];


        return response('How about implementing createGallery as a post method ?');
    }
    /**
     * Operation deleteGallery
     *
     * Deletes a user by ID.
     *
     * @param string $id Gallery ID (required)
     *
     * @return Http response
     */
    public function deleteGallery($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing deleteGallery as a delete method ?');
    }
    /**
     * Operation getGallery
     *
     * Gets a doc by ID.
     *
     * @param string $id Gallery ID. If called from the application, can be \&quot;me\&quot;. (required)
     *
     * @return Http response
     */
    public function getGallery($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing getGallery as a get method ?');
    }
    /**
     * Operation updateGallery
     *
     * Updates a Gallery by ID.
     *
     * @param string $id Gallery ID. (required)
     *
     * @return Http response
     */
    public function updateGallery($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing updateGallery as a put method ?');
    }
    /**
     * Operation allgalleryCategories
     *
     * Returns a list of documents..
     *
     *
     * @return Http response
     */
    public function allgalleryCategories()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        if (!isset($input['limit'])) {
            throw new \InvalidArgumentException('Missing the required parameter $limit when calling allgalleryCategories');
        }
        $limit = $input['limit'];

        if (!isset($input['page'])) {
            throw new \InvalidArgumentException('Missing the required parameter $page when calling allgalleryCategories');
        }
        $page = $input['page'];

        $sort_field = $input['sort_field'];

        $search_value = $input['search_value'];

        $search_fields = $input['search_fields'];


        return response('How about implementing allgalleryCategories as a get method ?');
    }
    /**
     * Operation uploadGallery
     *
     * Upload a file.
     *
     *
     * @return Http response
     */
    public function uploadGallery()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        if (!isset($input['file'])) {
            throw new \InvalidArgumentException('Missing the required parameter $file when calling uploadGallery');
        }
        $file = $input['file'];

        if (!isset($input['name'])) {
            throw new \InvalidArgumentException('Missing the required parameter $name when calling uploadGallery');
        }
        $name = $input['name'];

        if (!isset($input['type'])) {
            throw new \InvalidArgumentException('Missing the required parameter $type when calling uploadGallery');
        }
        $type = $input['type'];

        if (!isset($input['path'])) {
            throw new \InvalidArgumentException('Missing the required parameter $path when calling uploadGallery');
        }
        $path = $input['path'];

        if (!isset($input['category_id'])) {
            throw new \InvalidArgumentException('Missing the required parameter $category_id when calling uploadGallery');
        }
        $category_id = $input['category_id'];


        return response('How about implementing uploadGallery as a post method ?');
    }
}
