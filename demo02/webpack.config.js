var webpack = require('webpack')
var path = require('path')
module.exports = {
	devtool: 'inline-source-map',
	entry: "./entry.js",
    output: {
        filename: 'bundle.js',
		path: path.resolve(__dirname,'/'),
		publicPath: '/',
    }
};
