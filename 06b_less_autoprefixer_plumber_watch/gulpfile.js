var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var config = require('./gulp.config')();

gulp.task('style', function() {
  return gulp
        .src(config.lessfiles)
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.build));
});

gulp.task('watch', function() {
  gulp.watch([config.lessfiles], ['style']);
});

gulp.task('default', ['watch']);
