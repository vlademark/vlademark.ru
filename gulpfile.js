const gulp          = require('gulp');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const less          = require('gulp-less');
const minifyCSS     = require('gulp-minify-css');
const autoprefixer  = require('gulp-autoprefixer');

gulp.task('default', function() {
    gulp.start(['javascript', 'less', 'fonts']);
});

gulp.task('watch', function() {
    gulp.watch('less/**/*.less', ['less']);
    gulp.watch('js/**/*.js', ['javascript']);
});

gulp.task('javascript', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/lightgallery/dist/js/lightgallery.js',
        'js/script.js'
    ])
        .pipe(concat('src/js/script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('less', function() {
    return gulp.src([
        'node_modules/lightgallery/dist/css/lightgallery.css',
        'less/tattoo.css',
        'less/styles.less'
    ])
        .pipe(less())
        .pipe(autoprefixer({browsers: ['last 10 versions'], cascade: false}))
        .pipe(minifyCSS())
        .pipe(concat('src/css/style.css'))
        .pipe(gulp.dest('.'));
});

gulp.task('fonts', function () {
    return gulp.src([
        'node_modules/lightgallery/dist/fonts/*'
    ])
        .pipe(gulp.dest('src/fonts/'))
});
