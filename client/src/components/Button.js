import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, color, text, ...otherProps }) => {
  return (
    <button {...otherProps} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
};
export default Button;
