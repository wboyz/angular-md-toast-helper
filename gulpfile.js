var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    return gulp.src('./src/*.js')
        .pipe(concat('wb-toaster.js'))
        .pipe(gulp.dest('./dist/'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts']);
