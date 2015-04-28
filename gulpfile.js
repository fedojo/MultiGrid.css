var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
 


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
    	.pipe(sass())
        .pipe(gulp.dest('./dist/css'));
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

});

gulp.task('default', ['watch', 'sass', 'jade']);