import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";






function Register() {


    //yup schema
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        name: yup.string().required(),
        password: yup.string().min(5).required(),
        confirmpassword: yup.string().min(5).required()
    })

    //data storage
    const [userregister, setUserRegister] = useState('')

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })



    return (
        <div className='main row'>

            <h2 className='text-center'>Register</h2>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <img src='https://i.postimg.cc/m200pQQT/3236267.jpg' className='w-75'></img>

            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 form_main'>
                <form className='form_Sub mt-5' onSubmit={handleSubmit((data) => {

                    if (data.password === data.confirmpassword) {
                        setUserRegister(data)
                        reset()
                        console.log(userregister);
                        alert('success')
                       
                    }
                    else {
                        console.log("password mismatch");
                        alert('password mismatch')
                    }


                })}>
                    <input className='form-control' placeholder='Email' {...register('email')} type='email'></input>
                    <p>{errors.email?.message}</p>
                    <input className='form-control' {...register('name')} placeholder='Name' type='text'></input>
                    <p>{errors.name?.message}</p>
                    <input className='form-control' {...register('password')} placeholder='password' type='password'></input>
                    <p>{errors.password?.message}</p>
                    <input className='form-control' placeholder='Confirmpassword' {...register('confirmpassword')} type='password'></input>
                    <p>{errors.confirmpassword?.message}</p>
                    <button type='submit' className='btn btn-success  w-25'>Register</button>

                    <div className='w-100 mt-3'><a href='/login'>Already have an account? Login</a></div>
                </form>
            </div>

        </div>

    )
}

export default Register