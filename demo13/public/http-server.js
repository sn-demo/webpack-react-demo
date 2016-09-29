var path = require('path');
var express = require('express');
var port = 3666;
var app = express();
//访问的静态文件
app.use(express.static(path.join(__dirname, './')));
//如果静态文件不存在，所有请求都定位到index.html文件
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
