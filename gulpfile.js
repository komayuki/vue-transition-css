'use strict';
var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var exec = require('gulp-exec');

gulp.task('default', ['sass', 'update-docs'], () => {
});

//sass compile
gulp.task('sass' , function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(concatCss('vue-transition.css'))
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(gulp.dest('./dist/css'));
})

//copy dist css
gulp.task('update-docs', () => {
  return gulp.src('./dist/css/vue-transition.css')
             .pipe(exec('node lib/update-docs.js'))
})

gulp.task('sass:watch', () => {
  gulp.watch('./src/sass/*.scss', ['sass']);
  gulp.watch('./dist/css/vue-transition.css', ['update-docs'])
});
