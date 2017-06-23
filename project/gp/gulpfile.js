// 导入工具包 require('node_modules里对应的模块 ')
var gulp = require('gulp'),   //本地安装 gulp 所用到的地方
	concat = require('gulp-concat'),	// require()引入组件
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-minify-css'),
	livereload = require('gulp-livereload'),
	notify = require('gulp-notify'),
	browserSync = require('browser-sync').create(),  
	reload = browserSync.reload,  // 任务完成后调用 reload 方法，告知浏览器文件的变化并更新
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');
 
 
let inPath = 'E:/svn/forum/mobile/styles/style.scss';
let outPath = 'E:/svn/forum/mobile/styles/';

// 根据版本设置 CSS 前缀 以及缩小化

gulp.task('style',function(){
	gulp.src(inPath)
		.pipe(sourcemaps.init()) // sourcemaps.init()和sourcemaps.write()要包住sass() 才能输出 map文件
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError)) // 提示报错但不中断
		.pipe(gulp.dest(outPath))
		.pipe(rename('style.css'))
		.pipe(sourcemaps.write(outPath))
		.pipe(gulp.dest(outPath));
});

// 执行默认任务
gulp.task('default',function(){
	gulp.run('style');  
	gulp.watch(["E:/svn/forum/mobile/styles/**/*.scss"],function(){	// 监听指定的目录有无变化，有就回调任务，监听多个目录要用中括号
		gulp.run('style');  
	});
});
