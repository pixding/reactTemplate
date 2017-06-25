import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active:this.props.active
    }
  }

  tabClick(index){
    if(this.state.active==index || index == -1){
      return;
    }
    this.setState({
      active:index
    })
    if(this.props.callback){
      this.props.callback(index);
    }

  }

  render(){
    let lis = this.props.tabs.map((value,index)=>{
      let tabClass = classNames({
        active:this.state.active==index
      })
      return (
        <li key={index} onClick={()=>this.tabClick(index)} className={tabClass}>{value}</li>
      )
    })

    return (
      <div className="default-tab">
        <ul>
          {lis}
        </ul>
      </div>
    )

  }

}


Tabs.defaultProps = {
  tabs:['Tab1','Tab2'],
  active:0,
  callback:null
}

export default Tabs;
