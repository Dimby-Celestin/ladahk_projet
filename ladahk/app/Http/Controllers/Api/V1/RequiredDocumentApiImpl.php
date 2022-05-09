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
use App\Models\RequiredDocument;
use App\Http\Utils\Utils;

class RequiredDocumentApiImpl extends Controller
{
    /**
     * Constructor
     */
    public function __construct()
    {
    }

    /**
     * Operation allRequiredDocuments
     *
     * Returns a list of documents..
     *
     *
     * @return Http response
     */
    public function allRequiredDocuments()
    {
        try {
              $input = Request::all();

                if (!isset($input['limit'])) {
                    throw new \InvalidArgumentException('Missing the required parameter $limit when calling getDocuments');
                }
                $limit = $input['limit'];

                if (!isset($input['page'])) {
                    throw new \InvalidArgumentException('Missing the required parameter $page when calling getDocuments');
                }
                $page = $input['page'];

                //not path params validation

                $limit = isset($input['limit']) ? intval( $input['limit'] ): 10;

                if ($limit == 0) {
                    $limit = 1;
                }

                $page = isset($input['page']) ? intval( $input['page'] ) : 1;

                if( $page == 0 ) {
                    $page = 1;
                }

                $skip = ($page-1) * $limit;

                $query = new RequiredDocument();
                if( isset($input['searchValue']) && strlen($input['searchValue']) > 0  ) {
                    $orArray = array();
                    $fields = ['name'];
                    // Put search in lowercase
                    $searchValue = strtolower($input['searchValue']);

                    // Extract search fields
                    if( isset($input['searchFields']) ) {
                        $fields = explode(',', $input['searchFields']);
                    }

                    // Iterate on fields to create the query
                    $query = $query->where(function($query) use($fields, $searchValue) {
                        foreach( $fields as $field ) {
                            $query->orWhere($field, 'like', "%" . $searchValue ."%");
                        }
                    });
                }
                // Get total elements in DB
                $total = $query->count();


                $totalPages = ceil( $total / $limit );

                if ($page > $totalPages) {
                    return response()->json([
                    'limit' => $limit,
                    'page' => $page,
                    'pages' => $totalPages,
                    'total' => $total,
                    'rows' => []
                    ]);
                }


                $sortBy = 'created_at';
                $sortOrder = 'asc';

                // Generate sort query
                if( isset($input['sortField']) ) {
                    $data = explode('=', $input['sortField']);
                    if( count($data) == 2 ) {
                        $sortBy = $data[0];
                        $sortOrder = $data[1];
                    }
                }

                $sliders = $query->orderBy($sortBy, $sortOrder)->skip($skip)->take($limit)->get();
                if (isset($input['excerpt'])) {
                    foreach($sliders as $slider) {
                        $slider->content = $slider->excerpt(150);
                    }
                }
                return response()->json([
                'limit' => $limit,
                'page' => $page,
                'pages' => $totalPages,
                'total' => $total,
                'rows' => $sliders
                ]);
        } catch (Exception $e) {
            return response()->json([
            'error' => 'Unexpected error',
            'stack' => json_encode(e)
            ], 500);
        }
    }
    /**
     * Operation createRequiredDocument
     *
     * Creates a document.
     *
     *
     * @return Http response
     */
    public function createRequiredDocument()
    {
        try {
            $decodedToken = Utils::isAuthorized((array)[
            'role' => array('admin'),
            ]);
            if( $decodedToken ) {
                $body = json_decode( Request::instance()->getContent() );

                $data = new RequiredDocument();
                foreach( $body as $key => $value ) {
                    $data->{$key} = $value;
                }
               
                $data->save();
               
                // $document = Document::create((array)$body);
                return response()->json($data);
            }
            else {
                $unauthorized = Utils::unauthorizedMessage();
                return response()->json($unauthorized->message, $unauthorized->status);
            }
        } catch (Exception $e) {
            return response()->json([
            'error' => 'Unexpected error',
            'stack' => json_encode(e)
            ], 500);
        }
    }
    /**
     * Operation deleteRequiredDocument
     *
     * Deletes a user by ID.
     *
     * @param string $id RequiredDocument ID (required)
     *
     * @return Http response
     */
    public function deleteRequiredDocument($id)
    {
        try {
            $decodedToken = Utils::isAuthorized((array)[
            'role' => ['admin']]);

            if( $decodedToken ) {
                $input = Request::all();

                $document = RequiredDocument::find($id);

                if( !$document ) {
                    $notFound = Utils::notFoundMessage();
                    return response()->json($notFound->message, $notFound->status);
                }

                $document->delete();

                return response()->json([
                'success' => true
                ]);
            }
            else {
                $unauthorized = Utils::unauthorizedMessage();
                return response()->json($unauthorized->message, $unauthorized->status);
            }
        } catch (Exception $e) {
            return response()->json([
            'error' => 'Unexpected error',
            'stack' => json_encode(e)
            ], 500);
        }
    }
    /**
     * Operation getRequiredDocument
     *
     * Gets a doc by ID.
     *
     * @param string $id RequiredDocument ID. If called from the application, can be \&quot;me\&quot;. (required)
     *
     * @return Http response
     */
    public function getRequiredDocument($id)
    {
        try {
            $query = RequiredDocument::where('id', $id);
            $document = $query->first();

            if( !$document ) {
                $notFound = Utils::notFoundMessage();
                return response()->json($notFound->message, $notFound->status);
            }

            return response()->json($document);
        } catch (Exception $e) {
            return response()->json([
            'error' => 'Unexpected error',
            'stack' => json_encode(e)
            ], 500);
        }
    }
    /**
     * Operation updateRequiredDocument
     *
     * Updates a RequiredDocument by ID.
     *
     * @param string $id RequiredDocument ID. If called from the application, can be \&quot;me\&quot;. (required)
     *
     * @return Http response
     */
    public function updateRequiredDocument($id)
    {
        try {
            $decodedToken = Utils::isAuthorized((array)[
            'role' => ['admin']]);

            if( $decodedToken ) {
                $input = Request::all();
                $body = json_decode( Request::instance()->getContent() );

                // Search in DB
                $document = RequiredDocument::find($id);

                if( !$document ) { // Stop request if the user has not been found
                    $notFound = Utils::notFoundMessage();
                    return response()->json($notFound->message, $notFound->status);
                }
                unset($body->created_at);
                unset($body->updated_at);

                foreach( $body as $key => $value ) {
                    $document->{$key} = $value;
                }
                $document->save();
                return response()->json($document);
            }
            else {
                $unauthorized = Utils::unauthorizedMessage();
                return response()->json($unauthorized->message, $unauthorized->status);
            }
        } catch (Exception $e) {
            return response()->json([
            'error' => 'Unexpected error',
            'stack' => json_encode(e)
            ], 500);
        }
    }
}
