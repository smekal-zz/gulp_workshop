module.exports = function() {
  var config = {
    build: './build/',
    jsfiles: [
      './src/**/*.js'
    ],
    sassfiles: './sass/app.scss'
  };
  return config;
};
