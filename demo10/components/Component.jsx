import React from 'react';
import Antd,{ Alert } from 'antd';

require('antd/dist/antd.css')

export default class Component extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var data = process.env.NODE_ENV;
    return (
      <div>
        <div className="bg"/>
        <div>
          { "process.env.NODE_ENV的值是："+data }
          <Antd.Alert message="消息提示的文案" type="info" showIcon closable/>
        </div>
      </div>
    )
  }

}

