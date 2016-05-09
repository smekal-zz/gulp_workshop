var gulp = require('gulp');
var less = require('gulp-less');
var util = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var config = require('./gulp.config')();

gulp.task('style', function() {
  return gulp
        .src(config.lessfiles)
        .pipe(less())
        .on('error', logError)
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.build));
});

gulp.task('watch', function() {
  gulp.watch([config.lessfiles], ['style']);
});


function logError(error) {
  util.log(util.colors.red.bold(error));
  this.emit('end');
}

gulp.task('default', ['watch']);
