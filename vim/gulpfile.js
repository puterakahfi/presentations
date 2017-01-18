var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

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

gulp.task('watch',['browser-sync'], function() {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
    gulp.watch("*.js").on('change', bs.reload);
    gulp.watch("*.css").on('change', bs.reload);
});