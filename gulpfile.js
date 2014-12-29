var gulp = require('gulp'),
connect = require('gulp-connect'),
gutil = require('gulp-util'),
sourcemaps = require('gulp-sourcemaps'),
source = require('vinyl-source-stream'),
buffer = require('vinyl-buffer'),
watchify = require('watchify'),
browserify = require('browserify');

var bundler = watchify(browserify('./app/src/main.js', watchify.args));

bundler.transform('brfs');

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

gulp.task('default', ['server', 'js']);