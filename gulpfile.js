'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');

gulp.task('sass' , function () {
  return gulp.src('./sass/*.scss')
	 .pipe(sass())
	 .pipe(cleanCss())
	 .pipe(gulp.dest('./dist/css'));
});



gulp.task('sass:watch', function() {
  gulp.watch('./sass/*.scss', ['sass']);
});
