var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');//webpack.config.js同一目录
var port = 3666;
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,//必须跟webpack.config.js的ouput.publickPath一致
}));
app.use(require('webpack-hot-middleware')(compiler));
//所有请求都定位到index.html文件
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
var host = "localhost"
app.listen(port, host, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.info("==> 🌎  Listening on port %s. Open up http://"+host+":%s/ in your browser.", port, port)
});
