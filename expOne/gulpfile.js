(function(){
    'use strict';
    
    var gulp = require('gulp');
    var source = require('vinyl-source-stream');
    var clean = require('gulp-clean');
    var sass = require('gulp-sass');
    var react = require('gulp-react');
    var browserify = require('browserify');
    var reactify = require('reactify');

    var config = {
        paths: {
            browserifyEntry: '',
            dist: '',
            jsSources: ['./src/app/**/*.js'],
            styleSources: ['./src/styles/*.scss']
        }
    };
    
    
    //Clean
    gulp.task('clean', function(){
        gulp.src(config.paths.dist, {read: false})
            .pipe(clean({force: true}));
    });
    
    //Sass
    gulp.task('sass', function(){
        gulp.src(config.paths.styleSources)
            .pipe(sass())
            .on('error',console.error.bind(console))
            .pipe(concat('main.css'))
            .pipe(gulp.dest(config.paths.dist)); 
    });
    
    //Browserify
    gulp.task('browserify', function() {
        browserify(config.paths.browserifyEntry)
            .transform(reactify)
            .bundle()
            .on('error', console.error.bind(console))
            .pipe(source('main.js'))
            .pipe(gulp.dest(config.paths.dist));
    });

    //Watch
    gulp.task('watch', function () {
        gulp.watch(config.paths.jsSources, ['browserify']);
        gulp.watch(config.paths.styleSources, ['sass']);
    });

    //Default
    gulp.task('default', ['clean', 'browserify', 'sass', 'watch']);

}());