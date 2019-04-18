const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    cache  = require('gulp-cache'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    path = require('path');

let serverDir = null;

// gulp4 版本

// 编译 sass
let styles = road => {
    var plugins = [
        autoprefixer(),
        cssnano()
    ];

    return gulp.src(road.input)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(`${road.output}`))
        .pipe(notify({ message: 'styles任务完成' }))
}

// 压缩css
gulp.task('compress', () => {
    return gulp.src('D:/FDproject/channels/video/mobile/**/style.css')
        .pipe(rename({suffix: '.min'}))  // 后缀名
        .pipe(postcss())  // 压缩代码
        .pipe(gulp.dest('./dist/assets/cssmin'));
});

// 监听
gulp.task('watchSass', () => {
    // 处理路径
    let myPath = road => {
        let result = {
                input: null,
                output: null
            };
        // { 
        //     file: 'channels/man/pc/styles/style.scss',
        //     url: 'channels/man/pc/styles'
        // }
        
        result.output = path.dirname(road);
        serverDir = path.resolve(result.output, '..').replace(/\\/g, '\/');
       
        result.input = path.resolve(result.output, './style.css');
        result.output = result.output.replace(/\\/g, '\/');
        result.input = result.input.replace(/\\/g, '\/');

        return result;
    }

    gulp.watch('./**/*.scss').on('all', function(event, path, stats) {
        // File channels\man\pc\styles\cjy.scss was change, running tasks...
        console.log('File ' + path + ' was ' + event + ', running tasks...');
        styles(myPath(path));
    });
});

gulp.task('js', function () {
// 处理完JS文件后返回流
    return gulp.src('js/*js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// 自动刷新
gulp.task('server', function () {
    // 从这个项目的根目录启动服务器
    browserSync.init({
        server: {
            baseDir: serverDir,
            port:8081,
            index: 'index.html'
        }
    });

    gulp.watch(['./**/*.html', './**/*.scss']).on('change', reload);
});

gulp.task('default', 
    gulp.parallel('server', 'watchSass'));

