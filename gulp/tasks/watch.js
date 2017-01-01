var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('watch', function() {
    
 watch('./html/**/*.html", ["html"]', function() {
 gulp.start('html');
 });
 watch('./app/assets/styles/**/*.css',function() {
 gulp.start('styles');
 });
    
});