import React from 'react';

require("../style/css/bootstrap.css");

export default class Component extends React.Component {
  constructor(props){
    super(props);
    //初始化定义
    this.state = {}
  }

  componentDidMount(){
    this.getContents();
    window.addEventListener("hashchange",()=>{
      this.getContents();
    })
  }

  getContents(){
    var hash = location.hash.split("#")[1];
    if(hash == "home"){
      require.ensure([], (require) => {
        this.setState({
          active: "home",
          contents: require('../components/Home').default,
        })
      },'home');
    }
    if(hash == "about"){
      require.ensure([], (require) => {
        this.setState({
          active: "about",
          contents: require('../components/About').default,
        })
      },'about');
    }
  }

  render(){
    var Contents = this.state.contents
    if(!Contents){
      Contents = require('../components/Home').default;
    }
    return (
      <div>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#home">自定义路由</a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className={this.state.active == "home"?"active":""}>
                    <a href="#home">Home</a>
                  </li>
                  <li className={this.state.active == "about"?"active":""}>
                    <a href="#about">Link</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <br />
          <br />
          <br />
          <Contents />
      </div>
    )
  }
}

