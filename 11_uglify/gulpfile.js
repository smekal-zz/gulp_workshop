var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var config = require('./gulp.config')();

gulp.task('uglify', function() {
  return browserify(config.entry)
        .bundle()
        .on('error', function(msg) {
          util.log(msg);
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.build));
});

gulp.task('default', ['uglify']);
