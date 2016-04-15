var gulp = require("gulp");
var ts = require("gulp-typescript");
var minify = require("gulp-minify");
var inject = require("gulp-inject");


gulp.task("ts", function () {
    var tsFiles = [
        "./wwwroot/app1/*.ts"
    ];

    return gulp.src(tsFiles, { base: "." })
            .pipe(ts())
            .pipe(minify({
                ext: ".min.js"
            }))
            .pipe(gulp.dest("."));
});

gulp.task("inject", ["ts"], function () {
    var appFiles = [
        "./wwwroot/lib/angularjs/angular.min.js",
        "./wwwroot/lib/angular-route/angular-route.min.js",
        "./wwwroot/app1/*-controller.min.js",
        "./wwwroot/app1/app.min.js"
    ];

    return gulp.src("./index.html")
        .pipe(inject(gulp.src(appFiles)))
        .pipe(gulp.dest("."));
});

gulp.task("default", ["inject"]);