import React from 'react';

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
        </div>
      </div>
    )
  }

}

