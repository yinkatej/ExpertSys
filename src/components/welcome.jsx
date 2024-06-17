import React from 'react'
import {useNavigate} from 'react'

const welcome = () => {
  return (
  <div className="carousel rounded-box items-center p-8 h-3/5 relative w-full">
    <div className="carousel-item w-1/2 rounded-lg">
      <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className=" w-full" />
    </div> 
    <div className="carousel-item rounded-lg w-1/2">
      <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className=" w-full" />
    </div> 
      <div className='absolute bottom-0 right-0 pr-8 pb-8'>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-500">Next</button>
    </div>
  
  </div>
  )
}

export default welcome