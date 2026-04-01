import React from 'react'
import { FcFaq } from "react-icons/fc";
import { IoIosChatboxes } from "react-icons/io";
import { FcFeedback } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { MdManageAccounts } from "react-icons/md";
import { MdHelpCenter } from "react-icons/md";
import { Outlet, Link, useLocation } from 'react-router-dom';



const Support = () => {
    const location = useLocation();

  return (
    
    <div className='mt-20 max-w-6xl mx-auto mb-5 px-5'>
      <div className='text-center '>
        <h1 className='pt-20 text-5xl font-bold text-[#0047AB]'>Help & Support</h1>
      </div>
      {location.pathname === "/Support" ? (
<div className='gap-10 pt-15  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  <Link to="/Support/Contact">
  <div className="card bg-[#C4C4C4] w-86 shadow-2xl hover:scale-102 transition duration-300">
  <div className="card-body text-center items-center">
    
        <h1><FcBusinessContact size={50} className=''/></h1>
        <h2 className="text-3xl text-black">Contact Us</h2>
        <h3 className='text-base text-black'>Phone, Email</h3>
      
  </div>
</div>
</Link>

   <Link to="/Support/FAQs">
  <div className="card bg-[#C4C4C4] w-86 shadow-2xl hover:scale-102 transition duration-300">
  <div className="card-body text-center items-center">
    
        <h1><FcFaq size={50} className=''/></h1>
        <h2 className="text-3xl text-black">FAQs</h2>
        <h3 className='text-base text-black'>Frequently Asked Questions</h3>
      
  </div>
</div>
</Link>

   <Link to="/Support/LiveChat">
  <div className="card bg-[#C4C4C4] w-86 shadow-2xl hover:scale-102 transition duration-300">
  <div className="card-body text-center items-center">
    
        <h1><IoIosChatboxes size={50} className='text-[#008000]'/></h1>
        <h2 className="text-3xl text-black">Live Chat</h2>
        <h3 className='text-base text-black'>Chat With Us</h3>
      
  </div>
</div>
 </Link>

 <Link to="/Support/FeedBack">
  <div className="card bg-[#C4C4C4] w-86 shadow-2xl hover:scale-102 transition duration-300">
  <div className="card-body text-center items-center">
    
        <h1><FcFeedback size={50} className=''/></h1>
        <h2 className="text-2xl text-black">Feedback & Complaints</h2>
        <h3 className='text-base text-black'>Send Your Feedback</h3>
      
  </div>
</div>
</Link>

  <Link to="/Support/Account">
  <div className="card bg-[#C4C4C4] w-86 shadow-2xl hover:scale-102 transition duration-300">
  <div className="card-body text-center items-center">
    
        <h1><MdManageAccounts size={50} className='text-[#000075]'/></h1>
        <h2 className="text-3xl text-black">Account Support</h2>
        <h3 className='text-base text-black'>Manage Your Account</h3>
      
  </div>
</div>
</Link>

<Link to="/Support/HelpCenter">
  <div className="card bg-[#C4C4C4] w-86 shadow-2xl hover:scale-102 transition duration-300">
  <div className="card-body text-center items-center">
    
        <h1><MdHelpCenter size={50} className='text-[#751400]'/></h1>
        <h2 className="text-3xl text-black">Help Center</h2>
        <h3 className='text-base text-black'>Guides & Resources</h3>
      
  </div>
</div>
</Link>

      </div>
            ) : (
        <Outlet />
      )}
    </div>
    
  )
}

export default Support
