var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');

var jsSources = [
    //añade aquí archivos .js para concatenar en el script final
    //'components/scripts/*******.js'
    'components/scripts/script.js'
];
var sassSources = ['components/sass/styles.scss'];

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('js'))
        .pipe(connect.reload())
});

gulp.task('compass', function() {
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'components/sass',
            image: 'images',
            style: 'expanded'
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('css'))
        .pipe(connect.reload())
});

gulp.task('default', ['js', 'compass', 'connect', 'watch']);

gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch('components/sass/*.scss', ['compass']);
});

gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});