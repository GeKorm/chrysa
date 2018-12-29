const gulp = require('gulp');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const purify = require('gulp-purgecss');
const cleanCSS = require('gulp-clean-css');
const flexbugFix = require('postcss-flexbugs-fixes');
const unprefix = require('postcss-unprefix');
const flexboxfixer = require('postcss-flexboxfixer');
const gradientfixer = require('postcss-gradientfixer');
const autoprefixer = require('autoprefixer');
const env = require('postcss-preset-env');
const zopfli = require('gulp-zopfli-green');
const del = require('del');

const processors = [
  unprefix,
  env({
    stage: 4,
    browsers: '> 1% in GB'
  }),
  flexboxfixer,
  gradientfixer,
  autoprefixer({ browsers: ['> 1% in GB'] }),
  flexbugFix()
];

gulp.task('css-reset', () => del(['buildCss/**/*']));

gulp.task('css-prod', ['css-reset'], () =>
  gulp
    .src('css/*.css')
    .pipe(concat('style.css'))
    .pipe(
      purify({
        content: [
          './index.html',
          './js/jquery.easing.1.3.js',
          './js/jquery.magnific-popup.min.js',
          './js/jquery.stellar.min.js',
          './js/jquery.waypoints.min.js',
          './js/magnific-popup-options.js',
          './js/main.js'
        ],
        whitelistPatterns: [/^mfp/, /^.mfp/],
        whitelistPatternsChildren: [/^mfp/,/^.mfp/]
      })
    )
    .pipe(postcss(processors))
    .pipe(
      cleanCSS({
        compatibility: '*',
        level: {
          1: {
            specialComments: 0
          },
          2: {
            mergeAdjacentRules: true
          }
        }
      })
    )
    .pipe(gulp.dest('buildCss'))
    .pipe(zopfli())
    .pipe(gulp.dest('buildCss'))
);
