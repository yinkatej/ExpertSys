import React from 'react'
import { Link } from 'react-router-dom'
import design from '../assets/design.png'

const welcome = () => {
  return (
  <div className="carousel rounded-box items-center p-2 h-2/4 relative w-full">
    <div className="carousel-item w-full rounded-lg mb-2">
      <img src={design} className=" w-full" />
    </div> 
   
      <div className='absolute bottom-0 right-0 pr-8 pb-8'>
       <Link to={'/query'}> <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-500" >Next </button></Link>
    </div>
  
  </div>
  )
}

export default welcome