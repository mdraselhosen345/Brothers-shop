import React, { useEffect, useState } from 'react'
import Category from '../../assets/Category.png'
import LogoPng from '../../assets/Logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
     .then(res => res.json())
     .then(data => setProducts(data.products));
  }, []);

  return (
        <div className='mt-15 mb-15 px-4'>
             <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4  gap-3'>
               {products.map(product => (
                      <Link to={`/product/${product.id}`} key={product.id}>
                        <div className="card bg-base-100 w-full shadow-sm rounded-b-none overflow-hidden transform transition duration-400 hover:scale-101 hover:shadow-xl">
                           <figure className=''>
                                <img className=''
                                    src={product.image}
                                    alt="Shoes" 
                                  />
                           </figure>
                           <div>

                           </div>
                               <div className='bg-[#DBDBDB] text-semibold pt-2 pl-3'>
                                 <h1 className='text-[#262525]'>{product.name}</h1>
                                  {/* <h1 className='text-xl text-[#F54927] pt-1'>8,649৳<span className='text-sm text-[#696969]'>9,300৳</span></h1> */}
                                         <p className="text-orange-600 font-semibold">
                                            ৳{product.price}
                                         </p>
                                    <div className='flex'>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                            <h3 className='pt-1 pb-3 flex text-[#F5BB27]'><FaRegStar size={13}/></h3>
                                          
                                           <h3 className='text-[#8C8B8B] text-sm pl-2'>{product.rating}</h3>                                     
                                    </div>
                               </div>
                       </div>
                    </Link>
               ))

               }

             </div>
        </div>
  )
}

export default Card
