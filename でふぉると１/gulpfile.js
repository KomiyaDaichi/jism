
// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
const pleeease = require('gulp-pleeease');
const autoprefixer = require('gulp-autoprefixer');
const isChanged = require('gulp-changed');
const minifyImg = require('gulp-imagemin');
const minifyImg_JPG = require('imagemin-jpeg-recompress');
const minifyImg_PNG = require('imagemin-pngquant');
const minifyImg_GIF = require('imagemin-gifsicle');
const sourcemaps = require('gulp-sourcemaps');
const sftp = require('gulp-ftp');

var host = '000.bxiai-demo0.com';
var user = 'info@000.bxiai-demo0.com';
var pass = '********';

gulp.task('default', function () {
   gulp.src("images/*/*.+(jpg|jpeg|png|gif)")
     .pipe(isChanged("images/*"))
     .pipe(minifyImg([minifyImg_JPG(),minifyImg_PNG(),minifyImg_GIF()]))
     .pipe(gulp.dest("images/"));
   gulp.watch('scss/*.scss', function () {
     return gulp.src('scss/*.scss')
       .pipe(sass({
         outputStyle: 'expanded'
       })
       .on('error', sass.logError))
       .pipe(sourcemaps.init())
   .pipe(pleeease({
       rem: {rootValue: '16px'},
       minifier: false,
   }))
       .pipe(autoprefixer({
           browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
           cascade: false
       }))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('css'));
   })
   gulp.watch('css/*.css', function () {
     return gulp.src(['css/assets.css'])
         .pipe(sftp({
             host: host,
             user: user,
             pass: pass,
             remotePath: "/css"
         })
     );
   })

   gulp.watch('scss/*.scss', function () {
     return gulp.src(['scss/*'])
         .pipe(sftp({
             host: host,
             user: user,
             pass: pass,
             remotePath: "/scss"
         })
     );
   })

});