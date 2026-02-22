import React from 'react'
import Category from '../../assets/Category.png'
import LogoPng from '../../assets/Logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";


const Card = () => {
  return (
        <div className='mt-15 mb-15 px-4'>
             <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4  gap-3'>
                        <div className="card bg-base-100 w-full shadow-sm rounded-b-none overflow-hidden transform transition duration-400 hover:scale-101 hover:shadow-xl">
                           <figure className=''>
                                <img className=''
                                    src={Category}
                                    alt="Shoes" />
                           </figure>
                           <div>

                           </div>
                               {/* <div className="card-body bg-[#F2F2F2]">
                                       <h2 className="card-title text-semibold text-sm text-[#3B3B3B]">Shameem Tropica 30 Litre Geyser (7 Gallon Standard) </h2>   
                                  <div>                            
                                      <ul className='text-[#525252] list-disc pl-5 text-xs'>
                                         <li className='pt-1'>Fully automatic</li>
                                         <li className='pt-1'>Magnesium anode water heater, Glass-lined inner tank</li>
                                         <li className='pt-1'>Capacity: 7 Gallon (30L)</li>
                                         <li className='pt-1'>Suitable For Maximum Six Storied Building</li>
                                     </ul>
                                  </div>  
                             
                                   <div className="card-actions justify-center text-black">   
                                      <h1 className='text-xl text-[#F54927] pt-2'>8,649৳<span className='text-sm text-[#696969]'>9,300৳</span></h1>
                                      <button className="btn btn-outline btn-primary border-none bg-[] px-17 pt-1 text-base"><FaCartShopping />Buy Now</button>
                                  </div>
                               </div> */}
                               <div className='bg-[#DBDBDB] text-semibold pt-2 pl-3'>
                                 <h1 className='text-[#262525]'>Shameem Tropica 30 Litre Geyser (7 Gallon Standard)</h1>
                                  <h1 className='text-xl text-[#F54927] pt-1'>8,649৳<span className='text-sm text-[#696969]'>9,300৳</span></h1>
                                    <div className='flex'>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                          
                                           <h3 className='text-[#8C8B8B] text-sm pl-2'>(152)</h3>                                     
                                    </div>
                               </div>
                       </div>
                        <div className="card bg-base-100 w-full shadow-sm rounded-b-none overflow-hidden transform transition duration-400 hover:scale-101 hover:shadow-xl">
                           <figure>
                                <img
                                    src={LogoPng}
                                    alt="Shoes" />
                           </figure>
                               <div className='bg-[#DBDBDB] text-semibold pt-2 pl-3'>
                                 <h1 className='text-[#262525]'>Shameem Tropica 30 Litre Geyser (7 Gallon Standard)</h1>
                                  <h1 className='text-xl text-[#F54927] pt-1'>8,649৳<span className='text-sm text-[#696969]'>9,300৳</span></h1>
                                    <div className='flex'>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                          
                                           <h3 className='text-[#8C8B8B] text-sm pl-2'>(152)</h3>                                     
                                    </div>
                               </div>                          
                       </div>
                        <div className="card bg-base-100 w-full shadow-sm rounded-b-none overflow-hidden transform transition duration-400 hover:scale-101 hover:shadow-xl">
                           <figure>
                                <img
                                    src={LogoPng}
                                    alt="Shoes" />
                           </figure>
                               <div className='bg-[#DBDBDB] text-semibold pt-2 pl-3'>
                                 <h1 className='text-[#262525]'>Shameem Tropica 30 Litre Geyser (7 Gallon Standard)</h1>
                                  <h1 className='text-xl text-[#F54927] pt-1'>8,649৳<span className='text-sm text-[#696969]'>9,300৳</span></h1>
                                    <div className='flex'>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                          
                                           <h3 className='text-[#8C8B8B] text-sm pl-2'>(152)</h3>                                     
                                    </div>
                               </div>                           
                       </div>
                        <div className="card bg-base-100 w-full shadow-sm rounded-b-none overflow-hidden transform transition duration-400 hover:scale-101 hover:shadow-xl">
                           <figure>
                                <img
                                    src={LogoPng}
                                    alt="Shoes" />
                           </figure>
                               <div className='bg-[#DBDBDB] text-semibold pt-2 pl-3'>
                                 <h1 className='text-[#262525]'>Shameem Tropica 30 Litre Geyser (7 Gallon Standard)</h1>
                                  <h1 className='text-xl text-[#F54927] pt-1'>8,649৳<span className='text-sm text-[#696969]'>9,300৳</span></h1>
                                    <div className='flex'>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                          
                                           <h3 className='text-[#8C8B8B] text-sm pl-2'>(152)</h3>                                     
                                    </div>
                               </div>                           
                       </div>
                        <div className="card bg-base-100 w-full shadow-sm rounded-b-none overflow-hidden transform transition duration-400 hover:scale-101 hover:shadow-xl">
                           <figure>
                                <img
                                    src={LogoPng}
                                    alt="Shoes" />
                           </figure>
                               <div className='bg-[#DBDBDB] text-semibold pt-2 pl-3'>
                                 <h1 className='text-[#262525]'>Shameem Tropica 30 Litre Geyser (7 Gallon Standard)</h1>
                                  <h1 className='text-xl text-[#F54927] pt-1'>8,649৳<span className='text-sm text-[#696969]'>9,300৳</span></h1>
                                    <div className='flex'>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                          
                                           <h3 className='text-[#8C8B8B] text-sm pl-2'>(152)</h3>                                     
                                    </div>
                               </div>                          
                       </div>
                        <div className="card bg-base-100 w-full shadow-sm rounded-b-none overflow-hidden transform transition duration-400 hover:scale-101 hover:shadow-xl">
                           <figure>
                                <img
                                    src={LogoPng}
                                    alt="Shoes" />
                           </figure>
                               <div className='bg-[#DBDBDB] text-semibold pt-2 pl-3'>
                                 <h1 className='text-[#262525]'>Shameem Tropica 30 Litre Geyser (7 Gallon Standard)</h1>
                                  <h1 className='text-xl text-[#F54927] pt-1'>8,649৳<span className='text-sm text-[#696969]'>9,300৳</span></h1>
                                    <div className='flex'>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                          
                                           <h3 className='text-[#8C8B8B] text-sm pl-2'>(152)</h3>                                     
                                    </div>
                               </div>                          
                       </div>
             </div>
        </div>
  )
}

export default Card
