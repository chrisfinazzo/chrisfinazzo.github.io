const gulp = require('gulp');
const workboxBuild = require('workbox-build');

gulp.task('service-worker', () => {
  return workboxBuild.generateSW({
    globDirectory: './',
    globPatterns: [
      '**\/*.{html,json,js,css,jpeg}',
    ],
    swDest: './sw.js',
  });
});

const shell = require('gulp-shell')

gulp.task('style', shell.task('sass --sourcemap=none --watch scss:css'))
