'use strict'

var gulp = require('gulp'),
    gulpInlineCss = require('gulp-inline-css')

gulp.task('default', function () {
    return gulp.src([ '**/*.html', '!node_modules/**/*' ])
        .pipe(gulpInlineCss())
        .pipe(gulp.dest('build'))
})
