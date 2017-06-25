import React from 'react';
import ReactDom from 'react-dom';
import Button from './components/buttons';
import Toast from './components/Toast';

import Tabs from './components/Tabs';
import Switch from './components/Switch'

export default class Ccc extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible:false
    }
    this.openToast = this.openToast.bind(this);
    this.tabClick = this.tabClick.bind(this);
  }

  openToast(){
    this.setState({
      visible:true
    })
    console.log(this.state.visible);
    setTimeout(()=>{
      this.setState({
        visible:false
      })
    },3000);
  }

  tabClick(index){

    alert(index);

  }
  switchCallback(name,checked){
    console.log(name,checked);
  }

  render(){
    let toast = this.state.visible?<Toast className="123" msg="保存中..." />:null;
    console.log(this.state);
    return (
      <div>
        <Tabs tabs={['tab1','tab2','tab3']} callback={this.tabClick} />
        <Button name="打开toast" callback={this.openToast} />
        {toast}

        <Switch callback={this.switchCallback} name="switch1" />
      </div>
    )
  }
}
