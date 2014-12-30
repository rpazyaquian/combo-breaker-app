var gulp = require('gulp'),
connect = require('gulp-connect'),
uglify = require('gulp-uglify'),
gutil = require('gulp-util'),

source = require('vinyl-source-stream'),

watchify = require('watchify'),
browserify = require('browserify'),
reactify = require('reactify'),

sass = require('gulp-sass');

gulp.task('react-watch', function() {
  var bundler = watchify(browserify('./app/src/main.jsx', watchify.args)
    .transform(reactify));
  bundler.on('update', rebundle);
  function rebundle() {
    return bundler.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('./bundle.js'))
      .pipe(gulp.dest('./app/scripts'))
      .pipe(gulp.dest('./dist/scripts'));
  }
  return rebundle();
});

gulp.task('server', function() {
  connect.server({
    root: 'app'
  });
});

gulp.task('sass', function() {
  return gulp.src('./app/scss/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./app/css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch-sass', function() {
  gulp.watch('./app/scss/*.scss', ['sass']);
});

gulp.task('default', ['server', 'react-watch', 'watch-sass']);