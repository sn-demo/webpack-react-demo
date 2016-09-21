var webpack = require('webpack')
var path = require('path')
module.exports = {
    entry: "./entry.js",
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname,'./'),//打包输出目录，以package.json为准，是用相对路径
      publicPath: '/',//内存输出目录，以index.html为准,使用绝对路径
    },
    module: {
      loaders: [
        //匹配到rquire中以.css结尾的文件则直接使用指定loader
        { test: /\.css$/, loader: "style!css" },
        { 
          test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
          loader: 'url-loader',
          query: {
            limit: 50000,
            name: "[path][name].[ext]",
          }
        },
      ],
    }
};
