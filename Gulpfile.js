var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('dependencies', function() {
    gulp.src('bower_components/font-awesome/scss/font-awesome.scss')
        .pipe(gulp.dest('./scss/libs/_font-awesome.scss'))
//    .pipe(gulp.src('bower_components/normalize-scss/_normalize.scss')
//        .pipe(gulp.dest('./scss/libs/')))
});

gulp.task('styles', function() {
    gulp.src('scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});


gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss',['styles']);
});