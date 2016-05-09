var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('./gulp.config')();

gulp.task('style', function() {
  return gulp
        .src(config.sassfiles)
        .pipe(sass())
        .pipe(gulp.dest(config.build));
});

gulp.task('default', ['style']);
