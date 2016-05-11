import React from 'react';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  position: 'fixed',
  top: '120px',
  left: '20px',
};

const Button = ({ children, onClick, style = {} }) => (
  <button
    style={{ ...buttonStyles, ...style }}
    onClick={onClick}
    >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
};

export default Button;
