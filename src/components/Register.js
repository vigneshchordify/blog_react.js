
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import api from '../Api'

function Register() {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().min(5).required(),
    confirmpassword: yup.string().min(5).required(),
  });

  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [userDetails, setUserDetails] = useState({});

  const handleRegistration = async (data) => {
    setUserDetails({ email: data.email, name: data.name, password: data.password });

    if (data.password === data.confirmpassword) {
      reset();

      try {
        const registerResponse = await api.registerUser(data);
        console.log(registerResponse);

        if (registerResponse.message === 'registration successfull') {
          toast.success(registerResponse.message);

          setTimeout(() => {
            navigate('/login');
          }, 5000);
        } else {
          toast.error(registerResponse.message);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Password mismatch');
      toast.error('Password mismatch');
    }
  };

  return (
    <>
      <Navbar />
      <div className='main row'>
        <h2 className='text-center'>Register</h2>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <img src='https://i.postimg.cc/m200pQQT/3236267.jpg' className='w-75' alt='Registration Image'></img>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 form_main'>
          <form className='form_Sub mt-5' onSubmit={handleSubmit(handleRegistration)}>
            <input className='form-control' placeholder='Email' {...register('email')} type='email'></input>
            <p>{errors.email?.message}</p>
            <input className='form-control' {...register('name')} placeholder='Name' type='text'></input>
            <p>{errors.name?.message}</p>
            <input className='form-control' {...register('password')} placeholder='Password' type='password'></input>
            <p>{errors.password?.message}</p>
            <input className='form-control' placeholder='Confirm Password' {...register('confirmpassword')} type='password'></input>
            <p>{errors.confirmpassword?.message}</p>
            <button type='submit' className='btn btn-success w-25'>Register</button>
            <div className='w-100 mt-3'><a href='/login'>Already have an account? Login</a></div>
          </form>
        </div>
      </div>
      <ToastContainer theme='colored' />
    </>
  );
}

export default Register;
