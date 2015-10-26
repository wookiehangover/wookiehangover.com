'use strict'

const gulp = require('gulp')
const postcss = require('gulp-postcss')

gulp.task('css', function() {
  return gulp.src('css/main.css')
    .pipe(postcss([
      require('postcss-nested'),
      require('autoprefixer'),
      require('cssnano')
    ]))
    .pipe(gulp.dest('.'))
})

gulp.task('watch', function() {
  return gulp.watch('css/**/*.css', ['css'])
})
