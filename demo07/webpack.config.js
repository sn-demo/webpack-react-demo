var webpack = require('webpack')
var path = require('path')
module.exports = {
  devtool: "#source-map",
  entry: "./entry.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./public/js'),//打包输出目录，以package.json为准，是用相对路径
    publicPath: '/js/',//内存输出目录，以index.html为准,使用绝对路径
  },
  module: {
    loaders: [
      //匹配到rquire中以.css结尾的文件则直接使用指定loader
      { test: /\.css$/, loader: "style!css" },
      //limit是base64转换最大限制，小于设置值，都会转为base64格式
      //name是在css中提取图片的命名方式
      { 
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, //匹配图片或字体格式的文件
        loader: 'url-loader?limit=50000&name=[path]images/[name].[hash].[ext]'
      },
      { 
        //匹配.js或.jsx后缀名的文件
        test: /\.js[x]?$/, 
        loader: 'babel',
        //不解析node_modules的es6语法 
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      'com': path.resolve(__dirname,'components'),
    }, 
    extensions: ['', '.js', '.jsx']
  },
};
