var gulp = require('gulp'),
connect = require('gulp-connect'),
uglify = require('gulp-uglify'),
gutil = require('gulp-util'),
source = require('vinyl-source-stream'),
watchify = require('watchify'),
browserify = require('browserify'),
env = require('node-env-file'),
envify = require('envify'),
sass = require('gulp-sass');

env('.env');

var bundler = watchify(browserify('./app/src/main.js', watchify.args));

bundler.transform(envify);

gulp.task('js', bundle);
bundler.on('update', bundle);

function bundle() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('./bundle.js'))
    .pipe(gulp.dest('./app/scripts'))
    .pipe(gulp.dest('./dist/scripts'));
}

gulp.task('server', function() {
  connect.server({
    root: 'app'
  });
});

gulp.task('sass', function() {
  return gulp.src('./app/scss/*.scss')
    .pipe(sass({
      errLogToConsole: true,

    }))
    .pipe(gulp.dest('./app/css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch-sass', function() {
  gulp.watch('./app/scss/*.scss', ['sass']);
});

gulp.task('default', ['server', 'js', 'watch-sass']);