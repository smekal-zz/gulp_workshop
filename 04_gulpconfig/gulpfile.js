var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var config = require('./gulp.config')();

gulp.task('check', function() {
  return gulp
        .src(config.jsfiles)
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jshint())
        .pipe(jshint.reporter('default', {verbose: true}));
});

gulp.task('default', ['check']);
