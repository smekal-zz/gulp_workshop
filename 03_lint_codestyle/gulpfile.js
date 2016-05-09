var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var util = require('gulp-util');

gulp.task('check', function() {
  logMessage('Checking code using JSCS for coding style and JSHint for lint errors');
  return gulp
        .src(['./src/**/*.js'])
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jshint())
        .pipe(jshint.reporter('default', {verbose: true}));
});

gulp.task('default', ['check']);

function logMessage(message) {
  util.log(util.colors.blue.bold(message));
}
