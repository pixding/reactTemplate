import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Mask extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    const className = classNames('Mask',this.props.className,{'Mask-transparent':this.props.transparent});
    return (
      <div className={className}></div>
    )
  }

}
Mask.propTypes = {
  transparent:PropTypes.bool,
  className:PropTypes.string
}
Mask.defaultProps = {
  transparent:false,
  className:''
}


export default Mask;
