import React from 'react'
import LogoPng from "../../assets/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillTikTok } from "react-icons/ai";


const Footer = () => {
  return (
  <footer className="footer sm:footer-horizontal bg-gray-400 text-base-content p-10">
  <aside>
      <img src={LogoPng} className='h-[90px] w-[90px] ml-20' alt="" />
    <p className='ml-20 text-xl text-[#3B3B3B] font-bold'>
      Brothers Shop Ltd.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-black">Services</h6>
    <a className="link link-hover text-[#525252]">Branding</a>
    <a className="link link-hover text-[#525252]">Design</a>
    <a className="link link-hover text-[#525252]">Marketing</a>
    <a className="link link-hover text-[#525252]">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-black">Company</h6>
    <a className="link link-hover text-[#525252]">About us</a>
    <a className="link link-hover text-[#525252]">Contact</a>
    <a className="link link-hover text-[#525252]">Jobs</a>
    <a className="link link-hover text-[#525252]">Press kit</a>
  </nav>
  <nav className='gap-5'>
      <div>
        <h6 className="footer-title text-black text-xl">Email</h6>
        <h4 className='text-md text-[#525252]'>rasel.hossenit@gmail.com</h4>
      </div>
     <div className='flex gap-5'>
    <a href="#" className="link link-hover text-[#525252]"><FaFacebookMessenger size={30}/></a>
    <a href="#" className="link link-hover text-[#525252]"><FaWhatsappSquare size={30}/></a>
    <a href="#" className="footer-title text-black"><AiFillTikTok size={30}/></a>
    <a href="#" className="footer-title text-black"><FaFacebook size={30}/></a>
    <a href="#" className="link link-hover text-[#525252]"><FaYoutube size={30}/></a>
    </div>
  </nav>
</footer>
  )
}

export default Footer
