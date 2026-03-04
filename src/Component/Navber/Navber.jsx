import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import { NavLink } from 'react-router';
import { IoIosSearch } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";


const Navber = () => {
   const [open, setOpen] = useState(false);
   const location = useLocation();

   const isHome = location.pathname === "/";
  const isCardPage = location.pathname.startsWith("/HomeService");
  return (
       <div className='navbar shadow-xl gap-10 bg-gray-400 top-0 left-0 right-0 z-50 shadow-2xl fixed'>
           {/* Logo */}
           <div className='flex-1 flex justify-center'>
               <img className='w-16 sm:w-32 md:w-24 lg:w-25 xl:w-22 h-auto' src={Logo} alt="" />
           </div>
             {/* Search Bar */}
             {isHome && (
         <div className="flex w-full md:w-1/2">
      <input
        type="text"
        placeholder="Search"
        className="w-full text-black text-sm md:text-lg bg-[#C4C4C4] outline-none px-4 py-2 rounded-l-lg"
      />
      <IoIosSearch
        size={44}
        className="bg-[#F54927] text-white px-3 py-2 rounded-r-lg cursor-pointer"
      />
        </div>
        )}
              {/* Card page এ Phone Number */}
      {isCardPage && (
        <div className='flex gap-4'>
        <div className="text-black font-semibold text-sm md:text-base">
          📞 01615458942
        </div>
        <div className="text-black font-semibold text-sm md:text-base flex gap-2">
          <FaWhatsapp size={22} className='text-[#2DD100] font-bold'/> 01782299570
        </div>
        </div>
      )}
         {/* menu */}
         <div className='hidden md:flex flex flex-none pr-5'>
            <ul className='flex flex-col md:flex-row items-center gap-3 md:gap-5'>
                 <NavLink to="" className="hover:shadow-xl text-base px-5 py-2 text-[#242424] rounded-same hover:scale-105">Help & Support</NavLink>
                 <NavLink to="" className="hover:shadow-xl text-base px-5 py-2 text-[#242424] rounded-same hover:scale-105">Login</NavLink>
                 <NavLink to="" className="hover:shadow-xl text-base px-5 py-2 text-[#242424] rounded-same hover:scale-105">Sign Up</NavLink>

            </ul>
         </div>
         {/*mobail menu button */}
         <div className='md:hidden'>
             <button className='btn btn-square btn-ghost' onClick={() => setOpen(!open)}>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className='h-6 w-6'
                 fill='none'
                 viewBox='0 0 24 24'
                 stroke='currentColor'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     strokeWidth={2}
                     d="M4 6h16M4 12h16M4 18h16"
                   />                                 
               </svg>
             </button>
         </div>
         {/* Mobile Dropdown */}
         {open && (
            <div className='absolute top-16 right-4 bg-gray-400 shadow-md w-full pl-10 pt-5 z-50 grid grid-cols'>
                              <NavLink to="" className=" px-4 py-1 rounded-xl hover:text-white transition duration-300">Services</NavLink>
                              <NavLink to="" className=" px-4 py-1 rounded-xl hover:text-white transition duration-300">Projects</NavLink>
                              <NavLink to="" className=" px-4 py-1 rounded-xl hover:text-white transition duration-300">Contact</NavLink>  
             </div>
         )}

       </div>
             
  )
}

export default Navber
