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

class BusinessApi extends Controller
{
    /**
     * Constructor
     */
    public function __construct()
    {
    }

    /**
     * Operation deleteBusiness
     *
     * Deletes a user by ID.
     *
     * @param string $id Business ID (required)
     *
     * @return Http response
     */
    public function deleteBusiness($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing deleteBusiness as a delete method ?');
    }
    /**
     * Operation getBusiness
     *
     * Gets a doc by ID.
     *
     * @param string $id Business ID. If called from the application, can be \&quot;me\&quot;. (required)
     *
     * @return Http response
     */
    public function getBusiness($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing getBusiness as a get method ?');
    }
    /**
     * Operation updateBusiness
     *
     * Updates a Business by ID.
     *
     * @param string $id Business ID. (required)
     *
     * @return Http response
     */
    public function updateBusiness($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing updateBusiness as a put method ?');
    }
    /**
     * Operation uploadAjaxFileBusiness
     *
     * Upload a file from ajax.
     *
     * @param string $id Business ID. (required)
     *
     * @return Http response
     */
    public function uploadAjaxFileBusiness($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing uploadAjaxFileBusiness as a post method ?');
    }
    /**
     * Operation approveBusiness
     *
     * Approve business.
     *
     * @param string $id Business ID. (required)
     *
     * @return Http response
     */
    public function approveBusiness($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing approveBusiness as a put method ?');
    }
    /**
     * Operation rejectBusiness
     *
     * Reject business.
     *
     * @param string $id Business ID. (required)
     *
     * @return Http response
     */
    public function rejectBusiness($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing rejectBusiness as a put method ?');
    }
    /**
     * Operation updateBusinessStatus
     *
     * Updates a Business by ID.
     *
     * @param string $id Business ID. (required)
     *
     * @return Http response
     */
    public function updateBusinessStatus($id)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing updateBusinessStatus as a put method ?');
    }
    /**
     * Operation statBusiness
     *
     * business stats.
     *
     *
     * @return Http response
     */
    public function statBusiness()
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing statBusiness as a get method ?');
    }
    /**
     * Operation allBusinesses
     *
     * Returns a list of documents..
     *
     *
     * @return Http response
     */
    public function allBusinesses()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        if (!isset($input['limit'])) {
            throw new \InvalidArgumentException('Missing the required parameter $limit when calling allBusinesses');
        }
        $limit = $input['limit'];

        if (!isset($input['page'])) {
            throw new \InvalidArgumentException('Missing the required parameter $page when calling allBusinesses');
        }
        $page = $input['page'];

        $sort_field = $input['sort_field'];

        $search_value = $input['search_value'];

        $search_fields = $input['search_fields'];

        $status = $input['status'];

        $city = $input['city'];

        $business_category_id = $input['business_category_id'];

        $business_subcategory_id = $input['business_subcategory_id'];

        $created_at = $input['created_at'];

        $excerpt = $input['excerpt'];


        return response('How about implementing allBusinesses as a get method ?');
    }
    /**
     * Operation createBusiness
     *
     * Creates a document.
     *
     *
     * @return Http response
     */
    public function createBusiness()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $body = $input['body'];


        return response('How about implementing createBusiness as a post method ?');
    }
}
