var React = require('react');
var ReactDOM = require('react-dom');
require("./style.css");
var Component = React.createElement("div",{},"body颜色变了");
//相当于
//var Component = <div>Hello World!</div>;
ReactDOM.render(Component,document.getElementById("app_container"))
