const gulp = require('gulp');
const shell = require('gulp-shell')

gulp.task('style', shell.task('sass --sourcemap=none --watch scss:css'))
