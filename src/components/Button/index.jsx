import React from 'react';

import './Button.scss';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button-main">
      {children}
    </button>
  );
};

export default Button;
