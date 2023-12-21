import React from 'react'
import Navbar from './Navbar'
import Postcard from './Postcard'




function Home() {
  return (
    <>
    <Navbar/>
    <div className='w-75  mx-auto' style={{height:"50vh"}}>
        <Postcard/>

    </div>

 
    </>
  )
}

export default Home