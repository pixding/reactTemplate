var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');

var ExtractTextPlugin = require("extract-text-webpack-plugin");


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
  },
  devtool:"source-map",
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:"babel-loader",
        include:APP_PATH,
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        loader: ExtractTextPlugin.extract({fallback:"style-loader", use:["css-loader","sass-loader"]})
      },
    ]
  },
  plugins:[
    new ExtractTextPlugin("[name].css")
  ]
}
