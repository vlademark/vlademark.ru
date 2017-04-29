const gulp          = require('gulp');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const less          = require('gulp-less');
const minifyCSS     = require('gulp-minify-css');
const autoprefixer  = require('gulp-autoprefixer');

gulp.task('default', function() {
    gulp.start(['less']);
});

gulp.task('watch', function() {
    gulp.watch('less/**/*.less', ['less']);
});

gulp.task('less', function() {
    return gulp.src([
        'less/styles.less'
    ])
        .pipe(less())
        .pipe(autoprefixer({browsers: ['last 10 versions'], cascade: false}))
        //.pipe(minifyCSS())
        .pipe(concat('src/css/style.css'))
        .pipe(gulp.dest('.'));
});
