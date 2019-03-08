const gulp = require('gulp');
const replace = require('gulp-replace');

const repo = '@tobima-test';

const buildFiles = [
  './src/components/*/package.json',
  './src/components/*/*.js',
  './src/utils/*/package.json',
  './src/utils/*/*.js',
];

// Build dist files for separate distribution of web components
gulp.task('build', async function() {
  console.log('start building');
    gulp
    .src(buildFiles)
    .pipe(replace(/(import *\{[^\}]*\} *from )'\.\.\/(\.\.\/)?/g, `$1'${repo}\/`))
    .pipe(gulp.dest('./dist'));
    console.log('done  building');
  });

