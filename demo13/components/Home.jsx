import React from 'react';
import { Alert } from 'antd';

export default class Component extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Alert message="这是home页" type="success" showIcon closable/>
      </div>
    )
  }
}

