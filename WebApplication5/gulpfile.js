var gulp = require("gulp");
var less = require("gulp-less");
var ts = require("gulp-typescript");
var minify = require("gulp-minify");
var inject = require("gulp-inject");

var lessFiles = [
    "./wwwroot/css/*.less"
];

var tsFiles = [
    "./wwwroot/app1/*.ts"
];

gulp.task('less', function () {
    return gulp.src(lessFiles, { base: "." })
            .pipe(less())
            //.pipe(cleanCSS())
            .pipe(gulp.dest("."));
});

gulp.task("ts", function () {
    return gulp.src(tsFiles, { base: "." })
            .pipe(ts())
            //.pipe(minify({ ext: ".min.js" }))
            .pipe(gulp.dest("."));
});

gulp.task("inject", ["less", "ts"], function () {
    var appFiles = [
        "./wwwroot/lib/kendo/2016.1.412/styles/kendo.common-office365.min.css",
        "./wwwroot/lib/kendo/2016.1.412/styles/kendo.office365.min.css",
        "./wwwroot/lib/angular-ui-grid/ui-grid.min.css",
        "./wwwroot/css/app.css",

        "./wwwroot/lib/jquery/dist/jquery.min.js",
        "./wwwroot/lib/angularjs/angular.min.js",
        "./wwwroot/lib/angular-route/angular-route.min.js",

        "./wwwroot/lib/kendo/2016.1.412/js/kendo.all.min.js",
        "./wwwroot/lib/angular-ui-grid/ui-grid.min.js",

        "./wwwroot/app1/*-service.js",
        "./wwwroot/app1/*-controller.js",
        "./wwwroot/app1/app.js"
    ];

    return gulp.src("./index.html")
        .pipe(inject(gulp.src(appFiles)))
        .pipe(gulp.dest("."));
});

gulp.task("watch", function () {
    gulp.watch(lessFiles, ["less"]);
    gulp.watch(tsFiles, ["ts"]);
});

gulp.task("default", ["inject"]);