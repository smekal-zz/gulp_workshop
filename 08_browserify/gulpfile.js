var gulp = require('gulp');
var browserify = require('browserify');
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
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.build));
}

gulp.task('bundle', function() {
  return bundle(browserify(config.entry));
});

gulp.task('default', ['bundle']);
