import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <p>Hygieia</p>
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                
                <p>About Us</p>
                <p>Pricing</p>
                <p>Careers</p>
                <p>Blog</p>
            </div>
            <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Navbar