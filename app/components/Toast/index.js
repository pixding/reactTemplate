import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Mask from '../Mask';

import './style.css';

class Toast extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let className = classNames('Toast',this.props.className);
    return (
      <section className={className}>
        <Mask transparent />
        <div className="Toast">
          <div className="Toast-body">
            <div className="Toast-Text">
              {this.props.msg}
            </div>
          </div>
        </div>
      </section>

    )
  }

}

export default Toast;
