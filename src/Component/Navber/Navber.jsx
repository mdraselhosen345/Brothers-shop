import React from 'react';
import Logo from "../../assets/Logo.png"
import { NavLink } from 'react-router';


const Navber = () => {
  return (
   <div>
     <div className="navbar bg-[#D45959] flex gap-10 shadow-sm max-7xl border-2 border-bule-500">
                    <div className='flex'>
                          <img src={Logo} className='h-[100px] w-[100px] border-2 border-red-500' alt=""  />
                    </div>

                     <div className="flex border-2 border-red-500">
                            <input type="text" placeholder="Search" className="input input-bordered w-40" />
                     </div>
                               <div>
                                   <ul className='flex gap-5 border-2 border-red-500'>
                                      <NavLink>HELP & SUPPORT</NavLink>
                                      <NavLink>LOGIN</NavLink>
                                      <NavLink>SIGN UP</NavLink>
                                   </ul>
                               </div>
         
                    
                    
     </div>
     </div>
  )
}

export default Navber
