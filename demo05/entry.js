var React = require('react');
var ReactDOM = require('react-dom');
require("./style.css");

var Component = React.createElement("div",{className: "bg"});
//相当于
//var Component = <img src={img}>;
ReactDOM.render(Component,document.getElementById("app_container"))
