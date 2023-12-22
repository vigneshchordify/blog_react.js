import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function AccountBlogCard(props) {

    const { particularblogs } = props;
    if (!particularblogs || !particularblogs.data) {
       
        return null; 
    }
   
    
    const bloglist=particularblogs.data
    console.log(bloglist);

   
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
                        <button className='btn btn-danger'>Delete</button>
                </div>
               

            </div>
)):''}


    </>
  )
}

export default AccountBlogCard