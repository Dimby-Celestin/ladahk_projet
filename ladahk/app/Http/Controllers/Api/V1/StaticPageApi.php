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

class StaticPageApi extends Controller
{
    /**
     * Constructor
     */
    public function __construct()
    {
    }

    /**
     * Operation deleteStaticPage
     *
     * Deletes a user by ID.
     *
     * @param string $id StaticPage ID (required)
     *
     * @return Http response
     */
    public function deleteStaticPage($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing deleteStaticPage as a delete method ?');
    }
    /**
     * Operation getStaticPage
     *
     * Gets a doc by ID.
     *
     * @param string $id StaticPage ID. If called from the application, can be \&quot;me\&quot;. (required)
     *
     * @return Http response
     */
    public function getStaticPage($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing getStaticPage as a get method ?');
    }
    /**
     * Operation updateStaticPage
     *
     * Updates a StaticPage by ID.
     *
     * @param string $id StaticPage ID. (required)
     *
     * @return Http response
     */
    public function updateStaticPage($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing updateStaticPage as a put method ?');
    }
    /**
     * Operation allStaticPages
     *
     * Returns a list of documents..
     *
     *
     * @return Http response
     */
    public function allStaticPages()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        if (!isset($input['limit'])) {
            throw new \InvalidArgumentException('Missing the required parameter $limit when calling allStaticPages');
        }
        $limit = $input['limit'];

        if (!isset($input['page'])) {
            throw new \InvalidArgumentException('Missing the required parameter $page when calling allStaticPages');
        }
        $page = $input['page'];

        $sort_field = $input['sort_field'];

        $search_value = $input['search_value'];

        $search_fields = $input['search_fields'];

        $must_to_do = $input['must_to_do'];

        $excerpt = $input['excerpt'];


        return response('How about implementing allStaticPages as a get method ?');
    }
    /**
     * Operation createStaticPage
     *
     * Creates a document.
     *
     *
     * @return Http response
     */
    public function createStaticPage()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $body = $input['body'];


        return response('How about implementing createStaticPage as a post method ?');
    }
}