var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var config = require('./gulp.config')();

gulp.task('style', function() {
  return gulp
        .src(config.lessfiles)
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.build));
});

gulp.task('default', ['style']);
