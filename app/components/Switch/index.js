import './style.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Switch extends React.Component {
  static propTypes = {
    name:PropTypes.string.isRequired,
    checked:PropTypes.bool,
    callback:PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {
      checked:this.props.checked
    }

  }
  onSwitchClick(name){
    let newChecked = !this.state.checked;
    this.setState({
      checked:newChecked
    })
    if(this.props.callback){
      this.props.callback(name,newChecked);
    }

  }

  render(){
    let switchClass = classNames({
      'Switch':true,
      'checked':this.state.checked
    })
    return (
      <span className={switchClass}
      onClick={()=>this.onSwitchClick(this.props.name)} ></span>
    )

  }
}




// Switch.props = {
//   name:PropTypes.string.required,
//   checked:PropTypes.bool,
//   callback:PropTypes.func
// }

Switch.defaultProps = {
  checked:false,
  callback:null
}

export default Switch;
