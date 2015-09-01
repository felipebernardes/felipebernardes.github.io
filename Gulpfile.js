var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('dependencies', function() {
    gulp.src('bower_components/components-font-awesome/css/font-awesome.min.css')
        .pipe(rename('_font-awesome.scss'))
        .pipe(gulp.dest('./scss/libs/'));

    gulp.src('bower_components/normalize-scss/_normalize.scss')
        .pipe(gulp.dest('./scss/libs/'));
});

gulp.task('styles', function() {
    gulp.src('scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});


gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss',['styles']);
});

gulp.task('sync', function() {

    browserSync.init({
        server: ""
    });
    gulp.watch("scss/*.scss", ['styles']);
    gulp.watch("index.html").on('change', browserSync.reload);
});
