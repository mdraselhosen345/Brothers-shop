import React from 'react'
import CategoryPng from "../../assets/Category.png"
const Category = () => {
  return (
    <div className='mt-3 px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
             
                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black">body</h2>
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={CategoryPng}
                         alt="Shoes" />
                   </figure>
                </div>

                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black">Card Title</h2>
                   
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={CategoryPng}
                         alt="Shoes" />
                   </figure>
                </div>

                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black">Home Service</h2>
                   
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={CategoryPng}
                         alt="Shoes" />
                   </figure>
                </div>

                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black">Card Title</h2>
                   
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={CategoryPng}
                         alt="Shoes" />
                   </figure>
                </div>
               
         </div>
    </div>
  )
}

export default Category
