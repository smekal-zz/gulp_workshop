var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var config = require('./gulp.config')();

gulp.task('minify-css', function() {
  return gulp.src(config.css)
    .pipe(cleanCss())
    .pipe(gulp.dest(config.build));
});

gulp.task('default', ['minify-css']);
