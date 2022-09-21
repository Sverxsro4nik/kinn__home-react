import { useFormik } from 'formik';
import React, { useRef } from 'react';
import * as yup from 'yup';
import MyButton from '../UI/MyButon/MyButton';

const validationSchema = () =>
  yup.object().shape({
    email: yup.string().email().required(),
  });

const SubscribeForm = ({ setShow }) => {
  const emailRef = useRef();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setShow(true);
      values.email = '';
    },
  });
  return (
    <>
      <form className='newsletter__form' onSubmit={formik.handleSubmit}>
        <input
          id='email'
          ref={emailRef}
          name='email'
          type='text'
          className='newsletter__form-input'
          placeholder='Enter your email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <MyButton type='submit' text='subscribe' />
      </form>
    </>
  );
};

export default SubscribeForm;
