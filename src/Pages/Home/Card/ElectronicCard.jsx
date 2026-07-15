import React, { useEffect, useState } from 'react'
import Category from '../../assets/Category.png'
import LogoPng from '../../assets/Logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const ElectronicCard = ({ search }) => {
//   const [products, setProducts] = useState([]);
  const [electronic, setElectronic] = useState([]);

  useEffect(() => {
    fetch("/Electronic.json")
     .then(res => res.json())
     .then(data => setElectronic(data));
  }, []);

  const filteredProducts = electronic.filter((product) =>
    product.name?.toLowerCase().includes(search?.toLowerCase() || "")
  );

  return (
        <div className='pt-26 mb-15 px-4'>
             <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4  gap-3'>
               {filteredProducts.length > 0 ? (
                 filteredProducts.map(electronic => (
                      <Link to={`/electronic/${electronic.id}`} key={electronic.id}>
                        <div className="card bg-base-100 w-full shadow-sm rounded-b-none overflow-hidden transform transition duration-400 hover:scale-101 hover:shadow-xl">
                           <figure>                    
                              <img
                           src={electronic.images[0]}
                           alt={electronic.name}
                            />
                                  
                           </figure>
                           <div>

                           </div>
                               <div className='bg-[#DBDBDB] text-semibold pt-2 pl-3'>
                                 <h1 className='text-[#262525]'>{electronic.name}</h1>
                                  {/* <h1 className='text-xl text-[#F54927] pt-1'>8,649৳<span className='text-sm text-[#696969]'>9,300৳</span></h1> */}
                                         <p className="text-orange-600 font-semibold">
                                            ৳{electronic.price}
                                         </p>
                                    <div className='flex'>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                          
                                           <h3 className='text-[#8C8B8B] text-sm pl-2'>{electronic.rating}</h3>                                     
                                    </div>
                               </div>
                       </div>
                    </Link>
               ))
              ) : (
                          <p className="col-span-full text-center text-gray-500 mt-10">
            No product found 😢
          </p>
              )

               }

             </div>
        </div>
  )
}

export default ElectronicCard
