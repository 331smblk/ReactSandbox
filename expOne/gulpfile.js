(function(){
    'use strict';
    
    var gulp = require('gulp');
    var source = require('vinyl-source-stream');
    var clean = require('gulp-clean');
    var sass = require('gulp-sass');
    var browserify = require('browserify');
    var reactify = require('reactify');
    var concat = require('gulp-concat');

    var config = {
        paths: {
            browserifyEntry: './src/app/app.js',
            dist: './dist',
            jsSources: ['./src/app/**/*.js','./src/app/**/*/*.js'],
            styleSources: ['./src/styles/*.scss','./src/styles/*.css']
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
    
    //Move
    gulp.task('move', function(){
        gulp.src('./img/**/*', {base: './'})
            .pipe(gulp.dest(config.paths.dist));
        gulp.src('./src/libs/*', {base: './src'})
            .pipe(gulp.dest(config.paths.dist));
        gulp.src('index.html', {base: './'})
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
    gulp.task('default', ['browserify', 'sass', 'move', 'watch']);

}());