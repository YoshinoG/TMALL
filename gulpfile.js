var gulp = require("gulp");
var sass = require("gulp-sass");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var ugligy = require("gulp-uglify");
var rename = require("gulp-rename");
var clean = require("gulp-clean-css");

gulp.task("copy",function () {
    gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
    gulp.src("js/*.js").pipe(ugligy()).pipe(gulp.dest("dist/js"));
    gulp.src("sass/*.scss").pipe(sass()).pipe(clean()).pipe(gulp.dest("dist/css"));
    gulp.src("images/*.{jpg,png,gif}").pipe(gulp.dest("dist/images"));
    gulp.src("font/**").pipe(gulp.dest("dist/font"));
})
gulp.task('server',function(){
    connect.server({
        root:"dist",
        livereload:true
    });
    gulp.watch(["*.html","js/*.js","sass/*.scss","images/*.{jpg,png,gif}"],["copy"]);
})
gulp.task("default",["copy","server"]);