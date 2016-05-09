var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var browserSync = require('browser-sync').create();
var source = require('vinyl-source-stream');
var util = require('gulp-util');
var config = require('./gulp.config')();

function bundle(browserifiedFiles)
{
  return browserifiedFiles
        .bundle()
        .on('error', function(msg) {
          util.log(msg);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.build))
        .pipe(browserSync.stream());
}

gulp.task('livereload', function() {
  var watcher = watchify(browserify(config.entry));

  bundle(watcher);

  watcher.on ('update', function() {
    bundle(watcher);
  });

  watcher.on('log', util.log);

  browserSync.init({
    server: "."
  });
});

gulp.task('default', ['livereload']);
