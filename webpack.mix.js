const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
        output: { chunkFilename: 'js/chunk/[name].js?id=[chunkhash]' },
        resolve: {
            alias: {
                '@': path.resolve('resources/js'),
            },
        },
    })
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .js('resources/js/app.js', 'public/js')
    .vue({ version: 3 })
    .sourceMaps()
    .extract();

if (mix.inProduction()) {
    mix.version();
}

// Browser reload sync
/*if (!mix.inProduction()) {
    mix.browserSync({
        proxy: 'localhost'
    });
}*/
