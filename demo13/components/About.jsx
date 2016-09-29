import { Alert } from 'antd';

export default class Component extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Alert message="这是about页面" type="success" showIcon closable/>
      </div>
    )
  }
}

