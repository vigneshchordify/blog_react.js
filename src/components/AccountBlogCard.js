
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import API from '../Api'; 



function AccountBlogCard(props) {
  const { particularblogs } = props;
  const navigate=useNavigate()
  if (!particularblogs || !particularblogs.data) {
    return null;
  }

  const bloglist = particularblogs.data;

  const deleteBlog = async (id) => {
    console.log(id);
    try {
      const data = await API.deleteBlog(id);
      console.log(data.message);
      if (data.message === 'Post deleted') {
        toast.success('post deleted successfully');
      
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('Error deleting post');
    }
  };

  return (
    <>
      {bloglist.length > 0
        ? bloglist.map((i) => (
            <div className='w-75 mx-auto mt-5 card_main ' key={i.id}>
              <div className="card mb-3  ">
                <div style={{ height: '50px', backgroundColor: '#B27E7E', display: 'flex', alignItems: 'center' }}>
                  <h5 className="card-title ms-3">{i.title}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">{i.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{i.updatedAt}</small>
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between ', height: '50px', alignItems: 'center' }}>
                  <Link to={`/blog/edit/${i.id}`}>
                    <button className='btn btn-success ms-3'>Edit</button>
                  </Link>
                  <button className='btn btn-danger me-3' onClick={() => deleteBlog(i.id)}>
                    Delete
                  </button>
                </div>
              </div>
              <ToastContainer />
            </div>
          ))
        : ''}
    </>
  );
}

export default AccountBlogCard;
