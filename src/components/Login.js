// Login.js
import React, { useState } from 'react';
import '../css/loginRegister.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import api from '../Api'; 

function Login() {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
  });

  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [userData, setUserData] = useState();

  const handleLogin = async (data) => {
    setUserData(data);

    try {
      const loginResponse = await api.loginUser(data);
      console.log(loginResponse);

      if (loginResponse.message === 'login success') {
        localStorage.setItem('token', loginResponse.token);
        localStorage.setItem('uuid', loginResponse.id);
        toast.success(loginResponse.message);
        reset();

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error(loginResponse.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className='main row'>
        <h2 className='text-center'>Login</h2>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <img src='https://i.postimg.cc/X79YTtrP/19197307.jpg' style={{height:'100%'}} className='w-100' alt='Login Image'></img>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 form_main '>
          <form className='form_Sub_login' onSubmit={handleSubmit(handleLogin)}>
            <input {...register('email')} className='form-control' placeholder='Email' type='email'></input>
            <p>{errors.email?.message}</p>
            <input {...register('password')} className='form-control' placeholder='Password' type='password'></input>
            <p>{errors.password?.message}</p>
            <button type='submit' className='btn btn-success w-25'>Login</button>
            <div className='w-100 mt-3'><a href='/register'>Not Registered? Register</a></div>
          </form>
        </div>
      </div>
      <ToastContainer theme='colored' />
    </>
  );
}

export default Login;
