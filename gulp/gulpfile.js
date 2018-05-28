var gulp = require('gulp');
var clean = require('gulp-clean');
var htmlmin = require('gulp-htmlmin');
//var htmltidy = require('gulp-htmltidy');

// clean
gulp.task('clean', function () {
    return gulp.src(['../docs/*', '!../docs/robots.txt'], {read: false})
        .pipe(clean({force: true}));
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
    gulp.watch('../src/*.html', ['htmlmin']);
});
