import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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
            console.log(data.data.message);
            if(data.message=="Post deleted"){
              toast.success('post deleted successfully')
            }
            
          } catch (error) {
            console.error('Error fetching post:', error);
          
            toast.error('Error fetching post');
          }




    }

   
  return (
    <>

{bloglist.length>0?bloglist.map(i=>(
            <div className='w-75 mx-auto mt-5 card_main ' >

                <div class="card mb-3  ">
                   <div style={{height:'50px',background:'blue' ,color:'white',display:'flex',alignItems:'center'}}> 
                   <h5 className='ms-5'>{i.name}</h5></div>
                        <div class="card-body">
                            <h5 class="card-title">{i.title}</h5>
                            <p class="card-text">{i.description}</p>
                            <p class="card-text"><small class="text-muted">{i.updatedAt}</small></p>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between ', height:'50px',alignItems:'center'}}>
                          <Link to={`/blog/edit/${i.id}`}><button className='btn btn-success ms-3'>Edit</button></Link>
                          <button className='btn btn-danger me-3' onClick={()=>deleteBlog(i.id)} >Delete</button>
                        </div>
                </div>
                <ToastContainer/>
               

            </div>
)):''}


    </>
  )
}

export default AccountBlogCard