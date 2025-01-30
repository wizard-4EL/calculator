import React from 'react';
import './Button.css';

const Button = ({ sign, onclick }) => {
  return (
    <button 
      className='btn-wrapper' 
      onClick={onclick} 
      value={sign} 
    >
      {sign}
    </button>
  );
};

export default Button;


