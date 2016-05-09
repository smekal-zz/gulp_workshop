var gulp = require('gulp');

gulp.task('first-task', function() {
    console.log('This is the first task');
});

gulp.task('second-task', ['first-task'], function() {
  console.log('This is the second task that will get executed only after first task finishes');
});

gulp.task('default', ['second-task']);
