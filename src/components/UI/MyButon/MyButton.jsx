import React from 'react';
import './MyButton.scss';

const MyButton = ({ type, text, onClick }) => {
  return (
    <button className='newsletter__form-button' type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
