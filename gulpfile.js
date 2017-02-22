var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watchPath = require('gulp-watch-path'),
    combiner = require('stream-combiner2'),
    sourcemaps = require('gulp-sourcemaps'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

var handleError = function (err) {
    var colors = gutil.colors;
    console.log('\n')
    gutil.log(colors.red('Error!'))
    gutil.log('fileName: ' + colors.red(err.fileName))
    gutil.log('lineNumber: ' + colors.red(err.lineNumber))
    gutil.log('message: ' + err.message)
    gutil.log('plugin: ' + colors.yellow(err.plugin))
};

gulp.task('clean',function(){
    gulp.src(['./dist/css'],{read:false})
        .pipe(clean());
});

gulp.task('docsLessCss', function () {
    var combined = combiner.obj([
        gulp.src('docs/less/cloud-doc.less'),
        sourcemaps.init(),
        less(),
        autoprefixer({
            browsers: 'last 2 versions'
        }),
        sourcemaps.write('./'),
        gulp.dest('docs/css/')
    ]);
    combined.on('error', handleError)
});

/**
 *  dist
 */
gulp.task('lessCss', function () {
    var combined = combiner.obj([
        gulp.src('src/less/cloud-ui.less'),
        sourcemaps.init(),
        less(),
        autoprefixer({
            browsers: 'last 2 versions'
        }),
        sourcemaps.write('./'),
        gulp.dest('dist/css/')
    ]);
    combined.on('error', handleError)
});

gulp.task('minifyLess', function () {
    gulp.src('src/less/cloud-ui.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: 'last 2 versions'
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css/'))
});

/**
 *
 * watch 相关
 */

gulp.task('watchLess', function () {
    gulp.watch('src/less/**/*.less', ['lessCss', 'minifyLess']);
});

gulp.task('watchDocsLess', function () {
    gulp.watch('docs/less/cloud-doc.less', ['docsLessCss'])
});

gulp.task('watchCopy', function () {
    gulp.watch('src/fonts/**/*', function (event) {
        var paths = watchPath(event,'src/', 'dist/')

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)

        gulp.src(paths.srcPath)
            .pipe(gulp.dest(paths.distDir))
    })
});

gulp.task('copy', function () {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'))
});

// watch
gulp.task('watch', ['watchDocsLess', 'watchLess', 'watchCopy']);

// build
gulp.task('build', ['clean', 'docsLessCss', 'lessCss', 'minifyLess', 'copy']);