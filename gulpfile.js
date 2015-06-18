var gulp = require("gulp"),
    concat = require("gulp-concat");

gulp.task('default', function () {
    gulp.src(['./files/*.md'])
        .pipe(concat('README.md'))
        .pipe(gulp.dest('./README.md'));
});