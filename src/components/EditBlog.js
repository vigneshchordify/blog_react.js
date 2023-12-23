import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import instance from '../BaseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function EditBlog() {
  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [postState, setPostState] = useState({});
  const { id } = useParams();
  const [singleBlogData, setSingleBlogData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    const fetchPost = async (postId) => {
      try {
        const response = await instance.get(`/singleblog/${postId}`);
        const data = response.data.post;
        setSingleBlogData(data);
      } catch (error) {
        console.error('Error fetching post:', error);
        // You can display an error toast here if needed
        toast.error('Error fetching post');
      }
    };

    fetchPost(id);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className='post_container mt-5'>
        <h4 className='text-center'>Edit post here</h4>
        {singleBlogData && (
          <form
            className='text-center mt-5'
            onSubmit={handleSubmit(async (data) => {
              setPostState({
                title: data.title,
                description: data.description,
                uuid: localStorage.getItem('uuid'),
                token: localStorage.getItem('token'),
                postId: id,
              });

              try {
                const registerResponse = await instance.post('/updateblog', postState);
                console.log(registerResponse);

                toast.success(registerResponse.data.message);
              } catch (err) {
                console.log(err);
                // Display an error toast if the backend request fails
                toast.error('Error updating post');
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
      <ToastContainer />
    </>
  );
}

export default EditBlog;
