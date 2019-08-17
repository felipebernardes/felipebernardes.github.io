const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create();
      responsive = require('gulp-responsive');
      imgMin = require('gulp-imagemin');

gulp.task('js', () => {
  gulp.src('./src/js/*.js')
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('scss', () => {
  gulp.src('./src/scss/style.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({browsers: ['last 10 versions'], cascade: false}))
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('html', () => {
  gulp.src('./src/*.html')
  .pipe(gulp.dest('./dist/'));
});

gulp.task('img', () => {
  gulp.src('./src/img/*.*')
  .pipe(imgMin())
  .pipe(gulp.dest('./dist/img/'));

  gulp.src('./src/img/favicon/*.*')
  .pipe(imgMin())
  .pipe(gulp.dest('./dist/img/favicon/'));

  gulp.src('./src/img/timeline/*.*')
  .pipe(responsive({ '*': { width: 370 } }))
  .pipe(imgMin())
  .pipe(gulp.dest('./dist/img/timeline/'));
});

gulp.task('compile:dev', ['js', 'scss', 'html', 'img']);
gulp.task('compile:prod', () => {
  gulp.src(['./dist/*.*', './dist/**/*.*'])
  .pipe(gulp.dest('./'));
});

gulp.task('default', () => {
  browserSync.init({server: "./dist/"});

  gulp.watch("./src/js/**/*.js", ['js']);
  gulp.watch("./src/scss/**/*.scss", ['scss']);
  gulp.watch("./src/*.html", ['html']);
  gulp.watch("./src/img/*.*", ['img']);

  gulp.watch("./dist/**/*.*").on('change', browserSync.reload);
});
