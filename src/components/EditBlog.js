// EditBlog.js
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import API from '../Api'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../BaseUrl';
import Footer from './Footer';



function EditBlog() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [singleBlogData, setSingleBlogData] = useState({
    title: '',
    description: '',
  });

  const { id } = useParams();
  const [token,setToken]=useState()

  useEffect(() => {
    const fetchPost = async (postId) => {
      try {
        const data = await API.getSingleBlog(postId);
        setSingleBlogData(data);
      } catch (error) {
        console.error('Error fetching post:', error);
        toast.error('Error fetching post');
      }
    };
    setToken(localStorage.getItem('token'))


    fetchPost(id);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className='post_container mt-5 me-5'>
        <h4 className='text-center'>Edit post here</h4>
        {singleBlogData && (
          <form
            className='text-center mt-5'
            onSubmit={handleSubmit(async (data) => {
              const postState = {
                title: data.title,
                description: data.description,
                uuid: localStorage.getItem('uuid'),
               
               
              
                postId: id,
              };
            

              try {
             
              
                const response = await API.updateBlog(postState,{headers:{token}});

                if (response.message === 'Post updated successfully') {
                  toast.success(response.message);
                  setTimeout(() => {
                    navigate('/accounts');
                  }, 2000);
                }
              } catch (error) {
                console.log(error);
              }
            })}
          >
            <input
              {...register('title')}
              placeholder='Title'
              defaultValue={singleBlogData.title || ''}
              className='form-control'
            />
            <p>{errors.title?.message}</p>
            <textarea
              {...register('description')}
              defaultValue={singleBlogData.description || ''}
              placeholder='Description'
              className='form-control mt-5'
            />
            <p>{errors.description?.message}</p>
            <button className='btn btn-success w-25 mt-5' type='submit'>
              Submit
            </button>
          </form>
        )}
      </div>
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default EditBlog;
