const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const del = require('del');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const connect = require('gulp-connect');

const dirs = {
  src: './src',
  dest: 'dist'
}

const jsPaths = {
  src: `${dirs.src}/js/app.js`,
  dest: `${dirs.dest}`
}

const sassPaths = {
  src: `${dirs.src}/sass/styles.scss`,
  dest: `${dirs.dest}`
}

const viewPaths = {
  src: `${dirs.src}/index.html`,
  dest: `${dirs.dest}`
}

const fontPaths = {
  src: ['./node_modules/grapesjs/dist/fonts/*'],
  dest: `${dirs.dest}/fonts`
}

const vendorPaths = {
  src: ['./node_modules/grapesjs/dist/grapes.min.js', './node_modules/mavo/dist/mavo.min.js'],
  dest: `${dirs.dest}`
}

gulp.task('clean', () => {
  return del(dirs.dest)
});

gulp.task('js', () => {
  const bundler = browserify({
    entries: jsPaths.src,
    debug: true
  });
  bundler.transform(babelify, { presets: ['env'] });

  return bundler
    .bundle()
    .on('error', err => console.error(err))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(jsPaths.dest));
});

gulp.task('sass', () => {
  return gulp.src(sassPaths.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sassPaths.dest));
});

gulp.task('vendors', () => {
  return gulp.src(vendorPaths.src)
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(vendorPaths.dest));
});

gulp.task('view', () => {
  return gulp.src(viewPaths.src)
    .pipe(gulp.dest(viewPaths.dest));
});

gulp.task('fonts', () => {
  return gulp.src(fontPaths.src)
    .pipe(gulp.dest(fontPaths.dest));
});

gulp.task('connect', () => {
  connect.server({
    root: dirs.dest,
    livereload: true
  })
});

gulp.task('watch', () => {
  const babelWatcher = gulp.watch(`${dirs.src}/**/*.js`, ['js']);
  const sassWatcher = gulp.watch(`${dirs.src}/**/*.scss`, ['sass']);
  const viewWatcher = gulp.watch(`${dirs.src}/**/*.html`, ['view']);

  babelWatcher.on('change', function(path, stats) {
    connect.reload();
    console.log(`[JS] ${path.path} was changed`);
  });

  sassWatcher.on('change', function (path, stats) {
    connect.reload();
    console.log(`[SASS] ${path.path} was changed`);
  });

  viewWatcher.on('change', function (path, stats) {
    connect.reload();
    console.log(`[HTML] ${path.path} was changed`);
  });
});

gulp.task('build', () => {
  return runSequence(
    'clean',
    ['js', 'sass', 'vendors', 'view', 'fonts']
  )
});

gulp.task('development', () => {
  return runSequence(
    'build',
    'connect',
    'watch'
  )
});