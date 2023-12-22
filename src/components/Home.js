import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Postcard from './Postcard'
import instance from '../BaseUrl';





function Home() {
  const [blogs,setBlogs]=useState()
 
useEffect( ()=>{
  getalldata();
 

  
},[])

const getalldata = async () => {
  try {
    const registerresponse = await instance.get('/getall');
    console.log(registerresponse);
    setBlogs(registerresponse);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
  return (
    <>
      <Navbar />
      <div className='w-75  mx-auto' style={{ height: "50vh" }}>
        <Postcard  blogs={blogs}  />

      </div>


    </>
  )
}

export default Home