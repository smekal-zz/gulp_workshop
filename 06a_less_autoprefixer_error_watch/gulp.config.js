module.exports = function() {
  var config = {
    build: './build/',
    jsfiles: [
      './src/**/*.js'
    ],
    lessfiles: './less/app.less'
  };
  return config;
};
