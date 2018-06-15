var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var htmlmin = require('gulp-htmlmin');
//var htmltidy = require('gulp-htmltidy');

// clean
gulp.task('clean', function () {
    return gulp.src(['../docs/*', '!../docs/robots.txt'], {read: false})
        .pipe(clean({force: true}));
});

// sass
gulp.task('sass', function () {
    return gulp.src('../src/assets/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass({outputstyle: 'compressed'}))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../docs/assets/css'));
});

// htmltidy
// おそらくコンテナにtidyが入っていないせいで、errorになってしまう
/*
gulp.task('htmltidy', function () {
    return gulp.src('../src/*.html')
        .pipe(htmltidy({doctype: 'html5',
                        hideComments: true,
                        indent: false}))
        .pipe(gulp.dest('../docs/'));
});
*/

// htmlmin
gulp.task('htmlmin', function () {
    return gulp.src('../src/*.html')
        .pipe(htmlmin({collapseWhitespace: true, 
                        removeComments: true}))
        .pipe(gulp.dest('../docs/'));
});

// watch
gulp.task('watch', function () {
    gulp.watch('../src/assets/sass/**/*.scss', ['sass']);
    gulp.watch('../src/*.html', ['htmlmin']);
});
