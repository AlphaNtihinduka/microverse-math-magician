import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, buttonName, onclick }) => {
  <>
    <button type="button" id={id} className={buttonName} onClick={onclick}>{id}</button>
  </>;
};

Button.PropTypes = {
  id: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Button;
