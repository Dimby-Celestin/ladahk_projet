const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


// copy assets
mix.copy("node_modules/font-awesome/fonts/*", "public/fonts")
    .copy("node_modules/simple-line-icons/dist/fonts/*", "public/fonts");


/**
 *
 * Frontend
 *
 * -----------------------------------------------------------------------------
 */
// frontend css
mix.sass('resources/assets/scss/styles.scss', 'public/css/main.css');
mix.styles([
    "node_modules/font-awesome/css/font-awesome.min.css",
    "node_modules/bootstrap-toaster/css/bootstrap-toaster.min.css",
    "node_modules/simple-line-icons/dist/styles/simple-line-icons.css",
    "resources/assets/css/devices.min.css",
], "public/css/style.css");



// frontend js
mix.scripts([
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules//bootstrap/dist/js/bootstrap.min.js",
    "resources/assets/js/laravel.js",
    "node_modules/bootstrap-toaster/js/bootstrap-toaster.min.js",
   "resources/assets/js/scripts.js",
   "resources/assets/js/weather.js"
], "public/js/main.js");

// auth form 
mix.styles([
    "node_modules/bootstrap-fileinput/css/fileinput.min.css"
], "public/css/auth.css")
mix.scripts([
    "node_modules/bootstrap-fileinput/js/fileinput.min.js"
], 'public/js/auth.js')

if (mix.inProduction()) {
   mix.version();
}
