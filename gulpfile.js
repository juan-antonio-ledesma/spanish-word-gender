const gulp = require('gulp'),
  gcmq = require('gulp-group-css-media-queries'),
  plumber = require('gulp-plumber'),
  postCSS = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cleanCSS = require('gulp-clean-css'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  pipeline = require('readable-stream').pipeline

gulp.task('styles', () => {
  return gulp
    .src(['src/scss/**/*.scss'])
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.message)
          this.emit('end')
        },
      }),
    )
    .pipe(sass())
    .pipe(postCSS([autoprefixer('last 2 versions')]))
    .pipe(gcmq())
    .pipe(gulp.dest('css/'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('css/'))
})

gulp.task('compressJS', () =>
  pipeline(gulp.src('src/js/**/*.js'), uglify(), gulp.dest('js/')),
)

gulp.task('default', () => {
  gulp.watch('src/scss/**/*.scss', gulp.series('styles'))
  gulp.watch('src/js/**/*.js', gulp.series('compressJS'))
})
