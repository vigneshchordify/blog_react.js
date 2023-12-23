import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import instance from '../BaseUrl';


function AccountBlogCard(props) {

    const { particularblogs } = props;
    if (!particularblogs || !particularblogs.data) {
       
        return null; 
    }
   
    
    const bloglist=particularblogs.data
    console.log(bloglist);

    const deleteBlog=async(id)=>{

        console.log(id);
        try {
            const response = await instance.get(`/deleteBlog/${id}`);
            const data = response;
            console.log(data);
            
          } catch (error) {
            console.error('Error fetching post:', error);
            // You can display an error toast here if needed
            toast.error('Error fetching post');
          }




    }

   
  return (
    <>

{bloglist.length>0?bloglist.map(i=>(
            <div className='w-75 mx-auto mt-5 card_main ' >

                <div class="card mb-3  ">
                    <h5>{i.name}</h5>
                        <div class="card-body">
                            <h5 class="card-title">{i.title}</h5>
                            <p class="card-text">{i.description}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <Link to={`/blog/edit/${i.id}`}><button className='btn btn-success'>Edit</button></Link>
                        <button className='btn btn-danger' onClick={()=>deleteBlog(i.id)} >Delete</button>
                </div>
               

            </div>
)):''}


    </>
  )
}

export default AccountBlogCard