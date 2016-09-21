var React = require('react');
var ReactDOM = require('react-dom');
require("./style.css");
var img = require("./react.png")  
var Component = React.createElement("img",{src: img});
//相当于
//var Component = <img src={img}>;
ReactDOM.render(Component,document.getElementById("app_container"))
