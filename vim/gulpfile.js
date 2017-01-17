var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('default', function() {
  // place code for your default task here
});

 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('watch', function() {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});