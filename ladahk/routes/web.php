<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// home routes

$router->get('/', 'HomeController@index');
$router->get('/cat/{slug}', 'CategoryController@index');
$router->get('/article/{slug}', 'ArticleController@index');
$router->get('/news/{slug}', 'NewsController@index');
$router->get('/road/{slug}', 'RoadtoladakhController@index');
$router->get('/explore', 'CategoryController@all');
$router->get('/must-to-do', 'ArticleController@mustToDo');

$router->get('/stays', 'StaysController@list');
$router->get('/staysDetail/{id}', 'StaysController@detail');
$router->get('/info', 'InfoController@list');
$router->get('/posts', 'PostController@list');
$router->get('/faq', 'PageController@faq');
$router->get('/contact', 'PageController@contact');
$router->get('/gallery', 'PageController@gallery');
$router->post('/gallery', 'PageController@postGallery');
$router->get('/staff', 'PageController@staff');
$router->get('/about-ladakh', 'PageController@about');
$router->get('/login', '\App\Http\Controllers\Business\AuthController@login');
$router->post('/login', '\App\Http\Controllers\Business\AuthController@postLogin');
$router->get('/register','\App\Http\Controllers\Business\AuthController@registerPro');
$router->post('/register','\App\Http\Controllers\Business\AuthController@postRegisterPro');
$router->get('/registerBusiness','\App\Http\Controllers\Business\AuthController@registerBusiness');
$router->post('/registerBusiness','\App\Http\Controllers\Business\AuthController@postRegisterBusiness');
$router->get('/registerForm','\App\Http\Controllers\Business\AuthController@registerForm');
$router->post('/registerForm','\App\Http\Controllers\Business\AuthController@postRegisterForm');
$router->get('/logout','\App\Http\Controllers\Business\AuthController@logout');
$router->post('/logout','\App\Http\Controllers\Business\AuthController@logout');

$router->get('/editMyBusiness', '\App\Http\Controllers\Business\BusinessController@editMyBusiness');
$router->post('/editMyBusiness', '\App\Http\Controllers\Business\BusinessController@postEditMyBusiness');
$router->post('/subCategory','\App\Http\Controllers\Business\AuthController@postRegisterSubCategory');
$router->get('/transfer', '\App\Http\Controllers\Business\BusinessController@transfer');
$router->post('/transfer', '\App\Http\Controllers\Business\BusinessController@postTransfer');
$router->post('/payment', '\App\Http\Controllers\Business\BusinessController@payment');


$router->get('/term-of-use', '\App\Http\Controllers\PageController@termOfUse');
$router->get('/privacy-policy', '\App\Http\Controllers\PageController@privacyPolicy');
$router->get('/cookies', '\App\Http\Controllers\PageController@cookies');

