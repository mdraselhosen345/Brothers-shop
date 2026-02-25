import React from 'react'
import ServiceBac from "../../assets/ServiceBac.png"
import PcService from "../../assets/PcService.png"
import ElectronicService from "../../assets/ElectronicService.png"
import GlassService from "../../assets/GlassService.png"
import cctvserviceing from "../../assets/cctvserviceing.png"
import plamberServecing from "../../assets/plamberServecing.png"

import Computer from "../HomeService/Computer";
import { Link, Outlet, useLocation } from 'react-router-dom'
const HomeService = () => {
    const location = useLocation()
    const isMain = location.pathname === "/HomeService"
  
  return (
    <div className='mt-16 md:mt-16 lg:mt-26 max-w-6xl mx-auto'>

        {isMain && (
            <>
            <img src={ServiceBac} className='h-[350px] w-full' alt="" />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-5 px-6'>
                 {/* Pc Serviceing */}  
                 <Link to="Computer" target="_blank">
                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black text-xl">Computer & Laptop Home Service</h2>
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={PcService}
                         alt="Shoes" />
                   </figure>
                </div>
                 </Link>
                {/* Electronic Serviceing */}
                <Link>
                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black text-xl">Electrical Installation & Home Service</h2>
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={ElectronicService}
                         alt="Shoes" />
                   </figure>
                </div>
                </Link>
                {/* CCTV Serviceing */}
                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black text-xl">CCTV Installation & Home Services</h2>
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={cctvserviceing}
                         alt="Shoes" />
                   </figure>
                </div>
                 {/* Glass Service */}
                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black text-xl">Glass Installation & Home Services</h2>
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={GlassService}
                         alt="Shoes" />
                   </figure>
                </div>
                {/* Plumbing Service */}
                <div className="card bg-[#DBDBDB] w-full shadow-2xl rounded-none transition-all duration-300 hover:scale-104 hover:shadow-2xl">
                   <div className="card-body">
                    <h2 className="card-title text-black text-xl">Plumbing Installation & Home Service</h2>
                </div>
                  <figure className='m-2 rounded-none'>
                      <img
                         src={plamberServecing}
                         alt="Shoes" />
                   </figure>
                </div>  
         </div>
         </>
         )}
          <Outlet></Outlet> 

    </div>
  )
}

export default HomeService
