import React from 'react'
import CategoryPng from "../../assets/Category.png"
import HomeService from "../../assets/HomeService.png"
import ServecingCenter from "../../assets/ServecingCenter.png"
import Electronic from "../../assets/Electronic.png"
import Moden from "../../assets/Moden.png"
import { Link } from 'react-router'
const Category = () => {
  return (
    <div className='mt-3 px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                 {/* Modern Accessories */}
             
                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black text-xl">Modern Accessories</h2>
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={Moden}
                         alt="Shoes" />
                   </figure>
                </div>
            
                 {/* Electronic Accessories */}
                         
                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black text-xl">Electronic Accessories</h2>
                   
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={Electronic}
                         alt="Shoes" />
                   </figure>
                </div>
             
                  {/* HomeService */}
             <Link to="HomeService">
                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black text-xl">Home Service</h2>
                   
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={HomeService}
                         alt="Shoes" />
                   </figure>
                </div>
              </Link>
               {/* Servicing Center */}             
                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black text-xl">Servicing Center</h2>
                   
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={ServecingCenter}
                         alt="Shoes" />
                   </figure>
                </div>          
         </div>
    </div>
  )
}

export default Category
