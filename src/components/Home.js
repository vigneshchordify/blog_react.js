import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Postcard from './Postcard'
import instance from '../BaseUrl';
import Footer from './Footer';
import '../css/home.css'






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
      <div className='intro_div row w-75 mx-auto mt-5'>
        <div className='col-lg-6 col-md-6 col-sm-12 intro_sub_left'>
         <h2>Welcome to Precision Post – Where Your Words Find Perfection! 🚀✨</h2>
         <p className='mt-3'>Crafting the perfect blog has never been easier. Precision Post empowers you to express yourself with finesse and clarity. Unleash your creativity with seamless writing tools, polished editing features, and a user-friendly interface designed for bloggers of all levels.</p>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 intro_sub'></div>
      </div>
      <div className='intro_div row w-75 mx-auto mt-5'>
      <div className='col-lg-6 col-md-6 col-sm-12 intro_sub2'></div>
        <div className='col-lg-6 col-md-6 col-sm-12 intro_sub_left'>
         <h2>Why choose Precision Post?</h2>
         <p className='mt-3'>🔍 Precision in every word: Fine-tune your writing with powerful editing tools.
✨ User-friendly: Intuitive design for a smooth blogging experience.
🌐 Anywhere, anytime: Access your drafts from any device, whether you're at home or on the go.
🚀 Elevate your content: Boost your blog game with features that make your posts stand out.</p>
        </div>
        
      </div>
      <div className='w-100  mx-auto' style={{ height: "50vh" }}>
        <Postcard   blogs={blogs}  />
        <Footer></Footer>
      </div>
     


    </>
  )
}

export default Home