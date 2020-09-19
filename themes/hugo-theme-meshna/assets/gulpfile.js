// const imagemin = require("gulp-imagemin");
// const webfont = require("gulp-webfont");
// const fontSrc = ["fonts/**/*.ttf", "fonts/**/*.otf"];
const { watch, series, src, dest } = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const webp = require('gulp-webp');
const scssSrc = "sass/**/*.scss";
const jsSrc = ["js/**/*.js", "!**.*.min.js"];
const imgSrc = "imagesin/**/*";
const cssDist = "css/";
const dist = "dist";

function css() {
  return src(scssSrc)
    .pipe(sass({outputStyle: 'expanded'}).on("error", sass.logError)) // Using sass
    .pipe(dest(cssDist));
}

function prefix() {
  return src(cssDist + "style.css").pipe(autoprefixer()).pipe(dest(cssDist));
}

function babs() {
  return src(jsSrc)
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(dest(dist));
}

function urgly() {
  return src(["dist/**/*.js", "!**/*.min.js"])
    .pipe(uglify())
    .pipe(
      rename(function (path) {
        path.basename += ".min";
      })
    )
    .pipe(dest(dist));
}

function imgmin() {
  return src(imgSrc)
    .pipe(webp())
    .pipe(dest(dist + "/img"));
}

// function fonts() {
//   return src(fontSrc)
//     .pipe(
//       webfont({
//         types: "TTF, WOFF, WOFF2, SVG",
//         ligatures: true,
//       })
//     )
//     .pipe(dest(dist + "/fonts"));
// }

exports.default = function () {
  watch(scssSrc, series(css, prefix));
  watch(jsSrc, series(babs, urgly));
  watch(imgSrc, imgmin);
  // watch(fontSrc, fonts);
};

exports.imgmin = imgmin;
