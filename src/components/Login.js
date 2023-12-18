import React, { useState } from 'react'
import '../css/loginRegister.css'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";




function Login() {

//implementing yup schema

const schema=yup.object().shape({
  email:yup.string().email().required(),
    password:yup.string().min(5).required()
})




//validation

const {register,handleSubmit,reset,formState:{errors}}=useForm({resolver:yupResolver(schema)})
//stored data
const [userData,setUserData]=useState()



    return (
        <>
            <div className='main row'>

                <h2 className='text-center'>Login</h2>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img src='https://i.postimg.cc/j2NdBRk5/customer-experience-creative-collage.jpg' className='w-100'></img>

                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 form_main '>
                    <form className='form_Sub_login' onSubmit={handleSubmit((data)=>{
                        setUserData(data)
                        reset()
                        console.log(userData);

                    })}>
                        <input {...register('email')} className='form-control' placeholder='Email' type='email'></input>
                        <p>{errors.email?.message}</p>
                       
                        <input {...register('password')} className='form-control' placeholder='password' type='password'></input>
                        <p>{errors.password?.message}</p>
                     
                        <button type='submit' className='btn btn-success  w-25'>Login</button>

            <div className='w-100 mt-3'><a href='/'>Not Registered? Register</a></div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Login