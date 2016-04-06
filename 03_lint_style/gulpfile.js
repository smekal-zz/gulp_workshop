var gulp = require('gulp'),
	jscs = require("gulp-jscs"),
	jshint = require("gulp-jshint"),
	config = require('./gulp.config.js');

	console.log(config.srcfiles);

gulp.task('check' , function(){
	return gulp
			.src(config.srcfiles)
			.pipe(jscs())
			.pipe(jscs.reporter())
			.pipe(jshint())
			.pipe(jshint.reporter('default',{verbose : true}))
});


var watcher = gulp.task('watcher', function(){
	gulp.watch(['./src/*.js'], ['check']);
})


gulp.task('default', ['watcher']);