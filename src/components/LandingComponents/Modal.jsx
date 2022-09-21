import React from 'react';
import MyButton from '../UI/MyButon/MyButton';

const Modal = ({ setShow, type, text }) => {
  return (
    <div className='modal'>
      <div className='modal-body'>
        <p>Congratulations you have subscribed to our newsletter</p>
        <MyButton onClick={() => setShow(false)} type={type} text={text} />
      </div>
    </div>
  );
};

export default Modal;
