var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
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
        .pipe(gulp.dest(config.build));
}

gulp.task('watch', function() {
  var watcher = watchify(browserify(config.entry));

  bundle(watcher);

  watcher.on ('update', function() {
    bundle(watcher);
  });

  watcher.on('log', util.log);
});

gulp.task('default', ['watch']);
