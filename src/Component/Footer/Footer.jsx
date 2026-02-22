import React from 'react'
import LogoPng from "../../assets/Logo.png";

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
  <nav>
    <h6 className="footer-title text-black">Legal</h6>
    <a className="link link-hover text-[#525252]">Terms of use</a>
    <a className="link link-hover text-[#525252]">Privacy policy</a>
    <a className="link link-hover text-[#525252]">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer
