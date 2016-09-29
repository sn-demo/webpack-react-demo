import React from 'react';
import { Menu } from 'antd';

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
    var hash = location.hash.split("#")[1] || "home";
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
      return false;
    }
    return (
      <div>
        <Menu 
          theme={"dark"}
          mode="horizontal"
        >
          <Menu.Item>
            <a href="#home">home</a>
          </Menu.Item>
          <Menu.Item>
            <a href="#about">about</a>
          </Menu.Item>
        </Menu>
        <Contents />
      </div>
    )
  }
}

