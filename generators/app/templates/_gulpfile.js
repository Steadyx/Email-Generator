var gulp = require( 'gulp' );
var path = require( 'path' );
var zip = require( 'gulp-zip' );
var pug = require( 'gulp-pug' );
var sass = require( 'gulp-sass' );
var inlineCss = require( 'gulp-inline-css' );
var neat = require( 'node-neat' )
  .includePaths;
var browserSync = require( 'browser-sync' )
  .create(),
  reload = browserSync.reload;


var path = {
  html: './src/*.html',
  build: './src/build/*.html',
  htmlFiles: './**/*.html',
  sass: './src/styles/**/*.scss',
  pug: './src/**/*.pug'
}

gulp.task( 'serve', function() {

  browserSync.init( {

    proxy: 'localhost:3000/build'

  } )

  gulp.watch( path.sass, [ 'sass' ] );
  gulp.watch( path.html )
    .on( 'change', reload );
} );

gulp.task( 'inlineHTML', function() {
  gulp.src( path.html )
    .pipe( inlineCss( {
      preserveMediaQueries: true,
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: false,
      removeLinkTags: false,
      applyTableAttributes: true,
      removeHtmlSelectors: false
    } ) )
    .pipe( gulp.dest( './src/build' ) );
} );

gulp.task( 'zip', function() {

  return gulp.src( './src/build/**' )
    .pipe( zip( 'build.zip' ) )
    .pipe( gulp.dest( 'production' ) );

} )

function complete( file ) {

  var folder = path.basename( file.path )
    .replace( /\..*html/, '/' );

  return './build/templates' + folder;

}

gulp.task( 'sass', function() {

  return gulp.src( path.sass )
    .pipe( sass( {
      includePaths: [ 'styles' ].concat( neat )
    } ) )
    .pipe( gulp.dest( './src/css' ) )
    .pipe( gulp.dest( './src/build/css' ) )

    .pipe( browserSync.stream() )
    .on( 'error', sass.logError );

  gulp.watch( path.html )
    .on( 'change', reload );
} );

gulp.task( 'pug', function() {

  gulp.src( path.pug )
    .pipe( pug() )
    .pipe( gulp.dest( './build/*.html' ) )
    .on( 'done', complete );

} )

gulp.task( 'watch', function() {

  gulp.watch( path.html, [ 'inlineHTML' ] );
  gulp.watch( 'build/**', [ 'zip' ] );
  gulp.watch( path.pug, [ 'pug' ] );

} );


gulp.task( 'default', [ 'serve', 'watch', 'zip', 'sass' ], function() {

  gulp.start( 'sass' );


} );
