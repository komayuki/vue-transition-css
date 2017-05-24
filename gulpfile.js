'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');

gulp.task('sass' , function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(concatCss('vue-transition.css'))
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(gulp.dest('./dist/css'));
});



gulp.task('sass:watch', function() {
  gulp.watch('./src/sass/*.scss', ['sass']);
});
