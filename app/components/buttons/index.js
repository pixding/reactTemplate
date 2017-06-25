import React,{Component} from 'react';
import './style.css'
import './cc.css'
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends Component {
  constructor(props) {
    super(props);
    this.btnClickCallback = this.btnClickCallback.bind(this);
  }

  btnClickCallback() {
    console.log(2);
    const {
      inactive,
      disabled,
      callback,
    } = this.props;
    if (!inactive && !disabled) {
      console.log(callback);
      callback();
    }
  }

  render() {
    const props = this.props;
    const inactive = props.inactive || false; // 不激活
    const disabled = inactive || props.disabled;

    const typeClassName = 'Button-' + props.type;

    return (
      <button
        className={classNames('Button', typeClassName, (!disabled ? typeClassName + '-Active' : ''), (inactive ? typeClassName + '-InActive' : ''), this.props.className)}
        type="button"
        disabled={disabled}
        onClick={this.btnClickCallback} >{this.props.name || '确定'} {this.props.subName ? <span className="Button-SubName">{this.props.subName}</span> : null}</button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  callback: PropTypes.func,
  disabled: PropTypes.bool,
  inactive: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  name: '',
  type: 'Main',
  callback: () => {},
  disabled: false,
  inactive: false,
};

export default Button;
