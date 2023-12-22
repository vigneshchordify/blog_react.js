import React, { useEffect, useState } from 'react'
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
import AccountBlogCard from './AccountBlogCard';


function AccountPage() {

  //yup schema
  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    
  })

  const [postState,setPostState]=useState({})
  const [particularblogs, setParticularBlogs] = useState([]);



  //data storage
  const [userregister, setUserRegister] = useState('')

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

const [token,setToken]=useState()

   const [blogReqDetails,setBlogReqDetails]=useState()
    useEffect(()=>{
      setToken(localStorage.getItem('token'))
        getalldata()
    },[token])

    const getalldata = async () => {
        try {

            setBlogReqDetails({token:token,uuid:localStorage.getItem('uuid')})
          
          setParticularBlogs(await instance.post('/particularblogs',blogReqDetails))
          
          console.log(particularblogs);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };





  return (
    <>
      <Navbar></Navbar>
      <div className='accounts_main mx-auto'>

        <h3>Hi all</h3>
        <div className='post_container mt-5'>
          <h4 className='text-center'>Add new post here</h4>
          <form className='text-center mt-5' onSubmit={handleSubmit(async(data)=>{
          
            setPostState({
              title:data.title,
              description:data.description,
              uuid:localStorage.getItem('uuid'),
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
        <AccountBlogCard particularblogs={particularblogs} />

      </div>
    </>
  )
}

export default AccountPage