import React from 'react'
import { Link } from 'react-router';

const Navbar = () =>{
 return <div>
    <nav className='flex justify-evenly'>
      <div>
         <Link to="/">
         <p className='text -5xl font-bold text-gradient'>MyCvAnalyser</p>
         </Link>
      </div>
      <div className='flex gap-5'>
         <Link to="/benifits"><p className='text -3xl font-light'>Benifits</p></Link>
         <Link to="/how-to"><p className='text -3xl font-light'>How to</p></Link>
         <Link to="/contactus"><p className='text -3xl font-light'>Contact Us</p></Link>
      </div>
      <div>
         <Link to="/upload" className="text-white bg-cta focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
         Upload Resume
         </Link>
      </div>
    </nav>
 </div>
}
export default Navbar;