// Include gulp
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var ugligy = require('gulp-uglify');
var rename = require('gulp-rename');
var jasmine = require('gulp-jasmine');

gulp.task('default', function() {
    return gulp.src('src/core/*.js')
        .pipe(concat('graphy.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(ugligy())
        .pipe(gulp.dest('build'))
});

gulp.task('test', function() {
    return gulp.src('spec/test.js')
        .pipe(jasmine())
});