const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const babel = require("gulp-babel");

gulp.task("html", done => {
    gulp.src("*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
    done();
});

gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
    done();
});

gulp.task("js", done => {
    gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"  //suffix 后缀名
        }))
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    done();
});

gulp.task("img", done => {
    gulp.src("img/**")
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());;
    done();
})

gulp.task("font", done => {
    gulp.src("font/**")
        .pipe(gulp.dest("dist/font"))
        .pipe(connect.reload());;
    done();
})


// 监听
gulp.task("watch", done => {
    gulp.watch("*.html", gulp.series("html"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("js/*.js", gulp.series("js"));
    gulp.watch("img/*", gulp.series("img"))
});

// 服务器
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    });
    done();
})



// 同步模块  parallel 并行执行
gulp.task("build", gulp.parallel("html", "sass", "js","img","font"));
// 同步服务器   series：按顺序执行任务
gulp.task("default", gulp.series("build", "server", "watch"))


