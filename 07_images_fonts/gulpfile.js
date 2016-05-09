var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var taskListing = require('gulp-task-listing');
var config = require('./gulp.config')();

gulp.task('images', function() {
  return gulp
        .src(config.images)
        .pipe(imagemin({optimizationLevel: 3}))
        .pipe(gulp.dest(config.build + 'images'));
});

gulp.task('fonts', function() {
  return gulp
        .src(config.fonts)
        .pipe(gulp.dest(config.build + 'fonts'));
});

gulp.task('help', taskListing);

gulp.task('default', ['images', 'fonts']);
