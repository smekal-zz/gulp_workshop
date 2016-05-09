var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var util = require('gulp-util');
var config = require('./gulp.config')();

function bundle(browserifiedFiles)
{
  return browserifiedFiles
        .transform(babelify,  {presets: ['es2015']})
        .bundle()
        .on('error', function(msg) {
          util.log(msg);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.build));
}

gulp.task('es6', function() {
  return bundle(browserify(config.entry));
});

gulp.task('default', ['es6']);
