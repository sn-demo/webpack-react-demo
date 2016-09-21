var React = require('react');
var ReactDOM = require('react-dom');
var Component = React.createElement("div",{},"Hello World!");
//相当于
//var Component = <div>Hello World!</div>;
ReactDOM.render(Component,document.getElementById("app_container"))
