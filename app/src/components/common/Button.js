import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  state = {
         
  }

  
   

  render() {
    const { name,type, _onClick, icon, className} = this.props;
    return (
      
        <button type={type} onClick={_onClick} className={className}>
        {name}
        {icon ? icon : null}
        </button>
      
    );
  }
}

export default Button;

Button.propTypes = {
  name:PropTypes.string,
  type:PropTypes.string,
  _onClick:PropTypes.func
}