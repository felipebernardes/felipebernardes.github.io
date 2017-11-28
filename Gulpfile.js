const gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
sass = require('gulp-sass'),
browserSync = require('browser-sync').create();
responsive = require('gulp-responsive');
imgMin = require('gulp-imagemin');

gulp.task('dependencies', () => {
  gulp.src('node_modules/normalize-scss/_normalize.scss')
  .pipe(gulp.dest('./src/scss/libs/'));
});

gulp.task('js', () => {
  gulp.src('./src/js/*.js')
  .pipe(gulp.dest('./public/js/'));
});

gulp.task('scss', () => {
  gulp.src('./src/scss/style.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({browsers: ['last 10 versions'], cascade: false}))
  .pipe(gulp.dest('./public/css/'));
});

gulp.task('pug', () => {
  gulp.src('./src/*.html')
  .pipe(gulp.dest('./public/'));
});

gulp.task('img', () => {
  gulp.src('./src/img/*.*')
  .pipe(imgMin())
  .pipe(gulp.dest('./public/img/'));

  gulp.src('./src/img/favicon/*.*')
  .pipe(imgMin())
  .pipe(gulp.dest('./public/img/favicon/'));

  gulp.src('./src/img/timeline/*.*')
  .pipe(responsive({
    '*': { width: 370 }
   }))
  .pipe(imgMin())
  .pipe(gulp.dest('./public/img/timeline/'));
});

gulp.task('default', () => {
  browserSync.init({server: "./public/"});

  gulp.watch("./src/js/**/*.js", ['js']);
  gulp.watch("./src/scss/**/*.scss", ['scss']);
  gulp.watch("./src/*.html", ['pug']);
  gulp.watch("./src/img/*.*", ['img']);

  gulp.watch("./public/**/*.*").on('change', browserSync.reload);
});
