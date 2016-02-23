//使用gulp压缩后，需将index.html中自动添加导入的css和js添加.min
//如：style.min.css, common.min.js, bundle.min.js
var gulp = require('gulp');
var webpack = require('webpack');
var del = require('del');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpackConfig = require('./webpack.config');

//清理文件
gulp.task('clean', function(cb) {
  del(['./dist/client/*.html', './dist/client/*.js', './dist/client/*.css', './dist/client/*.map']).then(paths => {
    console.log('Delete client bundle files successfully.\n', paths.join('\n'));
    cb();
  });
});

//执行webpack打包
gulp.task('webpack', ['clean'], function(cb) {
  webpack(webpackConfig, cb)
});

//压缩css
gulp.task('style', function() {
  gulp.src('./dist/client/style.css').pipe(rename({suffix:'.min'})).pipe(minifycss()).pipe(gulp.dest('dist/client'));
});

//压缩js
gulp.task('script',function(){
  gulp.src('./dist/client/*.js').pipe(rename({suffix:'.min'})).pipe(uglify()).pipe(gulp.dest('dist/client'));
});

gulp.task('default', ['webpack'], function() {
  gulp.start('style', 'script')
});
