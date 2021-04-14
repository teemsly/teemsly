const gulp = require("gulp");
const del = require("del");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const babelrc = require("./babel.config");
var typescript = require("gulp-typescript");

const ESM_DIR = "./es";
const DIST_DIR = "./dist";
const LIB_DIR = "./lib";

const THEMES = ["default"];
const STYLE_DIST_DIR = "./dist/styles";
const STYLES_SRC_DIR = "./src/styles";

const RESOURCE_EXTENSION = [
  "./src/**/*.tsx",
  "./src/**/*.ts",
  "!./src/**/*.stories.tsx",
  "!./src/**/*.stories.ts",
  "!./src/utils/**/*.tsx",
  "!./src/utils/**/*.ts",
  "!./src/@types/**/*.ts",
  "!./src/@types/**/*.tsx",
];

const LESS_EXTENSION = ["./src/**/*.less"];

// clean the target dir
function clean(done) {
  del.sync([ESM_DIR, LIB_DIR, DIST_DIR], { force: true });
  done();
}

function buildLess() {
  return THEMES.map((theme) => {
    const taskName = `buildLess:${theme}`;
    gulp.task(taskName, () =>
      gulp
        .src(`${STYLES_SRC_DIR}/themes/${theme}/index.less`)
        .pipe(sourcemaps.init())
        .pipe(less({ javascriptEnabled: true }))
        .pipe(postcss([require("autoprefixer")]))
        .pipe(sourcemaps.write("./"))
        .pipe(rename(`teemsly-${theme}.css`))
        .pipe(gulp.dest(`${STYLE_DIST_DIR}`))
    );
    return taskName;
  });
}

function buildCSS() {
  return THEMES.map((theme) => {
    const taskName = `buildCSS:${theme}`;
    gulp.task(taskName, () =>
      gulp
        .src(`${STYLE_DIST_DIR}/teemsly-${theme}.css`)
        .pipe(sourcemaps.init())
        .pipe(postcss())
        .pipe(rename({ suffix: ".min" }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(`${STYLE_DIST_DIR}`))
    );
    return taskName;
  });
}

function buildLib() {
  return gulp
    .src(RESOURCE_EXTENSION)
    .pipe(babel(babelrc()))
    .pipe(gulp.dest(LIB_DIR));
}

function buildEsm() {
  return gulp
    .src(RESOURCE_EXTENSION)
    .pipe(
      babel(
        babelrc(null, {
          NODE_ENV: "esm",
        })
      )
    )
    .pipe(gulp.dest(ESM_DIR));
}

function createDeclarationFile() {
  var tsProject = typescript.createProject("./tsconfig.json");
  return gulp
    .src(RESOURCE_EXTENSION)
    .pipe(tsProject())
    .pipe(gulp.dest(LIB_DIR))
    .pipe(gulp.dest(ESM_DIR));
}

function watch() {
  const watcher = gulp.watch(RESOURCE_EXTENSION);
  watcher.on("change", (filePath, stats) => {
    const sourcePath = filePath.replace(/\\/g, "/");
    const libPath = sourcePath
      .replace("src/", "lib/")
      .replace(/\/[a-z|A-Z]+.(tsx|ts)/, "");
    console.log("File " + sourcePath + " was changed, running tasks...");
    return gulp
      .src(sourcePath)
      .pipe(babel(babelrc()))
      .pipe(gulp.dest(libPath, { overwrite: true }));
  });
}

function watchLess() {
  const lessWatcher = gulp.watch(LESS_EXTENSION);
  var theme = "default";
  lessWatcher.on("change", (filePath, stats) => {
    console.log("File " + filePath + " was changed, build styles...");

    return gulp
      .src(`${STYLES_SRC_DIR}/themes/${theme}/index.less`)
      .pipe(sourcemaps.init())
      .pipe(less({ javascriptEnabled: true }))
      .pipe(postcss([require("autoprefixer")]))
      .pipe(sourcemaps.write("./"))
      .pipe(rename(`teemsly-${theme}.css`))
      .pipe(gulp.dest(`${STYLE_DIST_DIR}`));
  });
}

exports.buildStyle = gulp.series(clean, ...buildLess(), ...buildCSS());
exports.buildLess = gulp.series(watchLess);
exports.dev = gulp.series(clean, buildLib, createDeclarationFile, watch);
exports.build = gulp.series(
  clean,
  gulp.parallel(
    buildLib,
    buildEsm,
    createDeclarationFile,
    gulp.series(...buildLess(), ...buildCSS())
  )
);
