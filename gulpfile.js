/**
 * GULP file
 *
 * This Node script is executed when you run `gulp`. It's purpose is
 * to load the Gulp tasks in your project's `tasks` folder, and allow
 * you to add and remove tasks as you see fit.
 *
 * WARNING:
 * Unless you know what you're doing, you shouldn't change this file.
 * Check out the `tasks` directory instead.
 */

// Require from local node_modules, in case of inclusion from another project
var fs          = require('fs'),
    path        = require('path'),
    gulpLocal   = require('gulp'),
    gulpSrcmaps = require('gulp-sourcemaps'),
    gulpBabel   = require('gulp-babel');


// Expose compile demo task
gulpLocal.task('react-toolbox-build4server-example', function () {
    return gulpLocal.src('example.jsx')
        .pipe(gulpSrcmaps.init())
        .pipe(gulpBabel({ presets: ['es2015', 'stage-0', 'react'] }))
        .pipe(gulpSrcmaps.write('.'))
        .pipe(gulpLocal.dest('./'));
});

// Expose default task
gulpLocal.task('default', ['react-toolbox-build4server-example']);
