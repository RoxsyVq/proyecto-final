var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(cb){
	return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.js')
    .pipe(gulp.dest('./src/js'));
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('style', function() {
	return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(gulp.dest('./src/css/'))
});
gulp.task('sass', function() {
	return gulp.src('./src/sass/main.scss')
    .pipe(gulp.dest('./src/css/style.css'))
    .pipe(gulp.dest('./dist/css/style.css'))
});
gulp.task('jquery', function() {
	return gulp.src('./node_modules/jquery/dist/jquery.js')
    .pipe(gulp.dest('./src/js))
});
gulp.task('select-css', function() {
	return gulp.src('./node_modules/bootstrap-select/dist/css/bootstrap-select.min.css')
    .pipe(gulp.dest('./src/css))
});
gulp.task('select-js', function() {
	return gulp.src('./node_modules/bootstrap-select/dist/js/bootstrap-select.min.js')
    .pipe(gulp.dest('./src/css))
});

gulp.task('images', function() {
	// tarea images
});
gulp.task('index', function() {
	return gulp.src('./index.html')
    .pipe(gulp.dest('./dist/index.html'))
});


gulp.task('default', ['images', 'style', 'script','sass','select-css','select-js']);