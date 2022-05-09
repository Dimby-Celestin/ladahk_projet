<?php

namespace App\Http\Utils;

use \Firebase\JWT\JWT;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Mail;

use Log;
use \UnexpectedValueException;

class Utils {
    public static function unauthorizedMessage() {
        return (object)['message' => [
        'error' => 'Unauthorized'
        ],
        'status' => 400];
    }
    public static function notFoundMessage() {
        return (object)['message' => [
        'error' => 'Not found'
        ],
        'status' => 404];
    }

    public static function isAuthorized($neededProperties) {
        // Check authorizations
        $token = Request::header('Authorization');
        if( $token == null || strlen($token) == 0 ) {
            $input = Request::all();
            if( array_key_exists('token', $input) ) {
                $token = $input['token'];
            }
        }
        else {
            // Remove Bearer
            $token = str_replace('Bearer ', '', $token);
        }

        if( $token == null || strlen($token) == 0 ) {
            return NULL;
        }
        // Decode token
        try {
            $decoded = JWT::decode($token, env('JWT_PRIVATE'), array('HS256'));
        }
        catch(UnexpectedValueException $e) {
        }

        if( !isset($decoded) || $decoded == null) {
            return NULL;
        }


        // Check neededProperties
        foreach($neededProperties as $key => $value) {
            if( !isset($decoded->{$key}) ) {
                return NULL;
            }
            else {
                if( gettype( $value ) == 'array' ) {
                    $oneIsOk = false;
                    foreach( $value as $entry) {
                        if( $decoded->{$key} == $entry ) {
                            $oneIsOk = true;
                        }
                    }

                    if($oneIsOk == false) {
                        return NULL;
                    }
                }
                else if( $decoded->{$key} != $value ) {
                    return NULL;
                }
            }
        }


        return $decoded;
    }

    public static function decodeExpiredToken() {
        $token = Request::header('Authorization');
        if( $token == null || strlen($token) == 0 ) {
            $input = Request::all();
            if( array_key_exists('token', $input) ) {
                $token = $input['token'];
            }
        }
        else {
            // Remove Bearer
            $token = str_replace('Bearer ', '', $token);
        }

        if( !$token ) {
            return NULL;
        }

        JWT::$leeway = 7200000;
        $decoded = JWT::decode($token, env('JWT_PRIVATE'), array('HS256'));

        return $decoded;
    }





    public static function generatePassword($length = 8) {
        $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $count = mb_strlen($chars);

        for ($i = 0, $result = ''; $i < $length; $i++) {
            $index = rand(0, $count - 1);
            $result .= mb_substr($chars, $index, 1);
        }

        return $result;
    }
    public static function sendEmail($to, $subject, $content, $from = null, $attachments = null) {
        return Mail::send('emails.template', ['content' => $content], function($message) use ($to, $subject) {
			$message->to($to)
            ->subject($subject);
            if (isset($from) && $from) {
                $message->from($from);
            }
		});
    }
    public static function uploadFile($localPath, $onlinePath, $filename, $type, $params) {
        if( !file_exists($localPath)) {
            return null;
        };
        if (is_null($filename)) {
            $filename =  pathinfo($localPath->getClientOriginalName(), PATHINFO_FILENAME);
        }
        $filename = uniqid() . $filename;
        $document = array(
            'mime_type' => $localPath->getMimeType(),
            'original_filename' => $localPath->getClientOriginalName(),
            'extension' =>  $localPath->extension(),
            'filename' =>  $filename,
            'type' => $type
        );
        $final = explode('/', $onlinePath);

        //$fileName = array_pop($final);

        $toCreateFolder = implode('/', $final);

        
        $finalPath = public_path(). '/' .env('FILE_STORAGE_PATH') . $toCreateFolder;

        if( !file_exists($finalPath) ) {
            mkdir($finalPath, 0755, true);
        }

        $final = explode('/', $finalPath);
        array_push($final, $filename . '.' .$localPath->extension());

        $finalPath = implode('/', $final);

        $document['path'] = env('FILE_STORAGE_PATH') . $toCreateFolder . '/' . $filename . '.' .$localPath->extension();
        if( copy($localPath, $finalPath) )
        {
            unlink($localPath);
        }
        return $document;
    }

    public static function cleanString($string) {
        $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
     
        return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
     }
}
