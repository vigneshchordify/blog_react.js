import React from 'react'
import '../css/postcard.css'

function Postcard(props) {

    const { blogs } = props;
    if (!blogs || !blogs.data) {
       
        return null; 
    }
   
    
    const bloglist=blogs.data
    console.log(bloglist);
    return (
        < >
           
{bloglist.length>0?bloglist.map(i=>(
            <div className='w-75 mx-auto mt-5 card_main ' >

                <div class="card mb-3  ">
                    <h5>{i.name}</h5>
                        <div class="card-body">
                            <h5 class="card-title">{i.title}</h5>
                            <p class="card-text">{i.description}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
               

            </div>
)):''}


        </>
    )
}

export default Postcard