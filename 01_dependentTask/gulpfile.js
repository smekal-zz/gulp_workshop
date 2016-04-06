var gulp = require('gulp');

gulp.task('first-task' , function(){
	console.log('executed first task');
});


gulp.task('second-task' ,['first-task'], function(){
	console.log('executed second task');
});

gulp.task('default', ['second-task']);