var gulp = require('gulp'),
connect = require('gulp-connect'),
uglify = require('gulp-uglify'),
gutil = require('gulp-util'),
sourcemaps = require('gulp-sourcemaps'),
source = require('vinyl-source-stream'),
buffer = require('vinyl-buffer'),
watchify = require('watchify'),
browserify = require('browserify'),
env = require('node-env-file'),
envify = require('envify');

env('.env');
gutil.log(process.env.GOOGLE_MAPS_API_KEY);

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

gulp.task('default', ['server', 'js']);