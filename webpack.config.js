var path = require("path");
var webpack = require("webpack");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');

module.exports = {
  entry:{
    app:path.resolve(APP_PATH,'app.js')
  },
  output:{
    path:BUILD_PATH,
    filename:'[name].js',
    publicPath:'/'
  },
  devServer:{
    contentBase:path.join(__dirname,"build"),
    compress:true,
    port:9000
  }

}
