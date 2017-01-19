var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',["sass","watch"]); 

 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'))
    .pipe(bs.stream());
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