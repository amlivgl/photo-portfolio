const { src, dest, parallel, watch, series } = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const minifyCSS = require("gulp-csso");
const concat = require("gulp-concat");
const data = require("gulp-data");

function html() {
  // Gets .html and .nunjucks files in pages
  return (
    src("src/**/*.+(html|njk)")
      // Adding data to Nunjucks
      .pipe(
        data(function() {
          return require("./src/data.json");
        })
      )
      // Renders template with nunjucks
      .pipe(
        nunjucksRender({
          path: ["src/templates"]
        })
      )
      // output files in app folder
      .pipe(dest("build"))
  );
}

function css() {
  return src("src/css/*.css")
    .pipe(minifyCSS())
    .pipe(dest("build/css"));
}

function js() {
  return src("src/js/*.js")
    .pipe(concat("app.min.js"))
    .pipe(dest("build/js"));
}

function images() {
  return src("src/images/**/*.jpg").pipe(dest("build/images"));
}

function watcher() {
  watch("src/css/*.css", css);
  watch("src/js/*.js", js);
  watch(["src/**/*.+(html|njk)", "./src/data.json"], html);
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.images = images;
exports.watcher = watcher;
exports.default = parallel(html, css, js, images);
