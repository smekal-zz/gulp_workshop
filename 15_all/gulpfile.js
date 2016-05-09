var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var browserSync = require('browser-sync').create();
var source = require('vinyl-source-stream');
var $ = require('gulp-load-plugins')({lazy: true});

var config = require('./gulp.config')();

gulp.task('less', function() {
  return gulp
        .src(config.srcfiles.less)
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe($.concat('less-styles.css'))
        .pipe(gulp.dest(config.srcdir.css));
});

gulp.task('sass', function() {
  return gulp
        .src(config.srcfiles.sass)
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.autoprefixer())
        .pipe($.concat('sass-styles.css'))
        .pipe(gulp.dest(config.srcdir.css));
});

gulp.task('css', ['less', 'sass'], function() {
  return gulp
        .src(config.srcfiles.css)
        .pipe($.plumber())
        .pipe($.autoprefixer())
        .pipe($.concat('styles.css'))
        .pipe(gulp.dest(config.dist.css));
});

gulp.task('js', function() {
  return browserify(config.entry)
        .bundle()
        .on('error', function(msg) {
          $.util.log(msg);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.dist.js));
});

gulp.task('prod-html', function() {
  return gulp
        .src(config.srcfiles.index)
        .pipe(gulp.dest(config.dist.index));
});

gulp.task('prod-css', ['css'], function() {
  return gulp
        .src(config.distfiles.css)
        .pipe($.cleanCss())
        .pipe(gulp.dest(config.dist.css));
});

gulp.task('prod-images', function() {
  return gulp
        .src(config.srcfiles.images)
        .pipe($.imagemin({optimizationLevel: 3}))
        .pipe(gulp.dest(config.dist.images));
});

gulp.task('prod-fonts', function() {
  return gulp
        .src(config.srcfiles.fonts)
        .pipe(gulp.dest(config.dist.fonts));
});

gulp.task('prod-js', ['js'], function() {
  return gulp
        .src(config.distfiles.js)
        .pipe($.uglify())
        .pipe(gulp.dest(config.dist.js));
});

gulp.task('prod', ['prod-html', 'prod-css', 'prod-images', 'prod-fonts', 'prod-js']);

gulp.task('default', $.taskListing);
