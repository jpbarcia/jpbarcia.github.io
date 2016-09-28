var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var reload      = browserSync.reload;
var cache       = require('gulp-cached');

gulp.task('templates', function() {

	var YOUR_LOCALS = {};

	return gulp.src('./*.jade')
		//.pipe(cache('jady'))
		.pipe(jade({
			locals: YOUR_LOCALS,
			pretty: true
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('jade-watch', ['templates'], reload);

gulp.task('sass-main', function () {
	return gulp.src('./assets/css/main.sass')
		.pipe(sass({indentedSyntax: true, outputStyle: 'compressed'}))
		.pipe(gulp.dest('./assets/css'))
		.pipe(reload({stream: true}));

});


gulp.task('default', ['sass-main', 'templates'], function () {

	browserSync({
		server: './',
		ip: "0.0.0.0",
		port: 8080,//env.PORT,
		ui: { port: 8081 }
	});

	gulp.watch('./assets/css/*.sass', ['sass-main']);
	gulp.watch('./*.jade', ['jade-watch']);
});
