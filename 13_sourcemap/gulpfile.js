var gulp = require('gulp');
var browserify = require('browserify');
var exorcist = require('exorcist');
var source = require('vinyl-source-stream');
var util = require('gulp-util');
var config = require('./gulp.config')();

function bundle(browserifiedFiles)
{
  return browserifiedFiles
        .bundle()
        .on('error', function(msg) {
          util.log(msg);
        })
        .pipe(exorcist(config.mapfile))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.build));
}

gulp.task('sourcemap', function() {
  return bundle(browserify({
    entries: config.entry,
    debug: true
  }));
});

gulp.task('default', ['sourcemap']);
