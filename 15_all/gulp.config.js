module.exports = function() {
  var publishdir = './publish/';
  var sourcedir = './src/';
  var config = {
    entry: './src/js/main.js',
    srcfiles: {
      index: './index.html',
      css: sourcedir + 'css/**/*.css',
      fonts: sourcedir + 'fonts/**/*.*',
      images: sourcedir + 'images/**/*.*',
      js: sourcedir + 'js/**/*.js',
      less: sourcedir + 'less/**/*.less',
      sass: sourcedir + 'sass/**/*.scss'
    },
    distfiles: {
      css: publishdir + 'css/*.css',
      js: publishdir + 'js/*.js',
    },
    srcdir: {
      css: sourcedir + 'css/' ,
      fonts: sourcedir + 'fonts/',
      images: sourcedir + 'images/',
      js: sourcedir + 'js/',
      less: sourcedir + 'less/',
      sass: sourcedir + 'sass/'
    },
    dist: {
      index: publishdir,
      css: publishdir + 'css/',
      fonts: publishdir + 'fonts/',
      images: publishdir + 'images/',
      js: publishdir + 'js/'
    }
  };
  return config;
};
