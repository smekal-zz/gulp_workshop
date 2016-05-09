var gulp = require('gulp');

gulp.task('hello-gulp', function() {
  console.log('Hello Gulp!');
});

gulp.task('default', ['hello-gulp']);
