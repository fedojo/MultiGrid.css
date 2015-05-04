var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    minifyCSS = require('gulp-minify-css'),
    rename    = require('gulp-rename'),
    server = require('gulp-server-livereload'),
    notify = require('gulp-notify'); 


var paths = {
  css: 'src/sass/*',
  jade: 'src/templates/**/*',
};


gulp.task('watch', function() {
  gulp.watch(paths.css, ['sass']);
  gulp.watch(paths.jade, ['jade']);
});


gulp.task('sass', function() {
  gulp
  .src('./src/sass/*.scss')
  .pipe(sass({
    includePaths: ['bower_components/breakpoint-sass/stylesheets']
  }))
  .pipe(gulp.dest('./dist/css'))
  .pipe(notify("SASS done"))
  .pipe(minifyCSS())
  .pipe(rename('style.min.css'));
});


gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp
  .src('./src/templates/*.jade')
  .pipe(jade({
    locals: YOUR_LOCALS
  })
  .on('error', function(err) {
    console.log(err);
  }))

  .pipe(gulp.dest('./dist/'))
  .pipe(notify("JADE done"))

});

gulp.task('default', ['watch', 'sass', 'jade']);
