var webpack = require('webpack')
var path = require('path')
module.exports = {
    entry: "./entry.js",
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname,'./'),
      publicPath: '/',
    },
    module: {
        loaders: [
          //匹配到rquire中以.css结尾的文件则直接使用指定loader
          { test: /\.css$/, loader: "style!css" }
        ],
    }
};
