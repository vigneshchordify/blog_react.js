import React, { useState } from 'react'
import Navbar from './Navbar'
import '../css/accounts.css'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import instance from '../BaseUrl';
// Importing toastify module
import { toast, ToastContainer } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";


function AccountPage() {

  //yup schema
  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    
  })

  const [postState,setPostState]=useState({})



  //data storage
  const [userregister, setUserRegister] = useState('')

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })




  return (
    <>
      <Navbar></Navbar>
      <div className='accounts_main mx-auto'>

        <h3>Hi all</h3>
        <div className='post_container mt-5'>
          <h4>Add new post here</h4>
          <form className='text-center mt-5' onSubmit={handleSubmit(async(data)=>{
          
            setPostState({
              title:data.title,
              description:data.description,
              uuid:localStorage.getItem('id'),
              token:localStorage.getItem('token')
            })
            console.log(postState);
            try {

              const registerresponse = await instance.post('/postblog', postState);
              console.log(registerresponse);

              toast.success(registerresponse.data.message)

              }
              catch (err) {
                  console.log(err);
              }



          })} >
            <input {...register('title')} placeholder='Title' className='form-control'></input>
            <p>{errors.title?.message}</p>
            <textarea {...register('description')} placeholder='Description' className='form-control mt-5'></textarea>
            <p>{errors.description?.message}</p>
            <button className='btn btn-success w-25 mt-5 ' type='submit'>Submit</button>
          </form>
        </div>

      </div>
    </>
  )
}

export default AccountPage
