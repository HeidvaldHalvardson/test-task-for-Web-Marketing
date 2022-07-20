const {src, dest, series, watch, parallel, task} = require('gulp');
const less = require('gulp-less');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const terser = require('gulp-terser');
const svgo = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');
const browser = require('browser-sync').create();


const html = () => {
  return src('source/**.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(dest('build'))
};

const style = () => {
  return src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(dest('build/css', { sourcemaps: '.' }))
};

const script = () => {
  return src('source/js/*.js')
    .pipe(terser())
    .pipe(dest('build/js'))
}

const image = () => {
  return src('source/img/*.jpg')
    .pipe(dest('build/img'))
}

const svg = () => {
  return src(['source/img/**/*.svg', '!source/img/sprite/*.svg'])
    .pipe(svgo())
    .pipe(dest('build/img'))
};

const sprite = () => {
  return src('source/img/sprite/*.svg')
    .pipe(svgo())
    .pipe(svgstore( {
      inLineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(dest('build/img'))
};

const clear = () => {
  return del('build')
};

const data = () => {
  return src('source/dataset.json')
    .pipe(dest('build'))
}

const server = () => {
  browser.init({
    server: 'build'
  })

  watch('source/*.html', series(html)).on('change', browser.reload)
  watch('source/less/**/*.less', series(style)).on('change', browser.reload)
  watch('source/js/*.js', series(script)).on('change', browser.reload)
}

exports.build = series(
  clear,
  parallel (
    style,
    html,
    script,
    image,
    data,
    svg,
  ),
)

exports.server = series(
  clear,
  parallel(
    style,
    html,
    script,
    image,
    data,
    sprite,
    svg,
  ),
  series(
    server,
  ) 
)