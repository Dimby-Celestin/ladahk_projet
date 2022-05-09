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

class AuthenticationApi extends Controller
{
    /**
     * Constructor
     */
    public function __construct()
    {
    }

    /**
     * Operation forgot
     *
     * Restore access to a forgotten user.
     *
     *
     * @return Http response
     */
    public function forgot()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $user = $input['user'];


        return response('How about implementing forgot as a post method ?');
    }
    /**
     * Operation login
     *
     * Login a user.
     *
     *
     * @return Http response
     */
    public function login()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $pro_user = $input['pro_user'];


        return response('How about implementing login as a post method ?');
    }
    /**
     * Operation regenerate
     *
     * Regenerate the current auth token.
     *
     *
     * @return Http response
     */
    public function regenerate()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $expire_in = $input['expire_in'];


        return response('How about implementing regenerate as a get method ?');
    }
    /**
     * Operation register
     *
     * Register a user.
     *
     *
     * @return Http response
     */
    public function register()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $user = $input['user'];


        return response('How about implementing register as a post method ?');
    }
    /**
     * Operation registerPro
     *
     * Register a pro user.
     *
     *
     * @return Http response
     */
    public function registerPro()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $user = $input['user'];


        return response('How about implementing registerPro as a post method ?');
    }
}
