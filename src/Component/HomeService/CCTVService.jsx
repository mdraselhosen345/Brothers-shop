import React from 'react'
import Computer from "../../assets/Computer.png"
import { TbCoinTaka } from "react-icons/tb";
import { GoSmiley } from "react-icons/go";
import { MdCheckCircle } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { IoCheckmarkCircle } from "react-icons/io5";

const CCTVService = () => {
  return (
    <div className='w-full'>
         <div className='flex flex-col lg:flex-row'> 
              <div className='w-full pl-5 pt-15'>
                  <h1 className='text-4xl font-bold text-[#242424]'>Computer Home Service</h1>
                  <p className='text-[#3B3B3B] text-sm pt-5'>আমাদের বিশেষজ্ঞ প্রকৌশলীরা ঘরে বসেই সুবিধাজনক  কম্পিউটার, ল্যাপটপ, প্রিন্টার, মনিটর, পিসি এবং টিভির সকল ধরনের হোম সার্ভিস প্রদান করি। সফটওয়্যার সমস্যা, হার্ডওয়্যার রিপেয়ার, উইন্ডোজ ইনস্টল, ভাইরাস রিমুভ, প্রিন্টার সেটআপ বা টিভি ডিসপ্লে সমস্যা—সবকিছুর দ্রুত ও নির্ভরযোগ্য সমাধান দেই আপনার বাসায় গিয়েই। অভিজ্ঞ টেকনিশিয়ান ও সাশ্রয়ী মূল্যে মানসম্মত সার্ভিস নিশ্চিত করাই আমাদের লক্ষ্য।</p>
                  {/* Badge Section */}
                    <div className='flex gap-3 pt-10'>
                        <h3 className='text-base flex text-[#242424] text-sm md:text-base border-1 border-[#00A300] bg-[#889E88]  rounded-2xl p-3'>Starting From:<span className='text-black font-bold'> 300</span><TbCoinTaka size={25} className='pb-1'/></h3>
                        <h3 className='text-base flex  text-[#1A496B] text-sm md:text-base border-1 border-[#6E3E00] bg-[#CCB6B4] rounded-2xl p-3'><MdCheckCircle className='bg-green pt-1' size={19}/>Home Service Available</h3>
                    </div>
                    {/* Features */}
                    <div className='grid grid-cols-2 gap-1text-lg text-black pt-10 gap-5'>
                        <h3 className='flex gap-2'><GiCheckMark className='pt-0.5 text-[#00A300]' size={20}/>Experienced technician</h3>
                        <h3 className='flex gap-2'><GiCheckMark className='pt-0.5 text-[#00A300]' size={20}/>Fast service</h3>
                        <h3 className='flex gap-2'><GiCheckMark className='pt-0.5 text-[#00A300]' size={20}/>24/7 support</h3>
                        <h3 className='flex gap-2'><GiCheckMark className='pt-0.5 text-[#00A300]' size={20}/>100% customer satisfaction</h3>
                    </div>
                    {/* Contact section */}
                    <div className='text-black border-2 border-[#09076E] rounded-xl pt-6 mt-10 bg-[#2C8CF2] p-4 mr-3'>
                        <p className='text-2xl text-[#DBDBDB] font-bold px-1 pb-2'>Call to get computer and laptop service from home</p>
                        <div className='flex gap-2'>
                             <h1 className='flex justify-between items-center text-[#0000FF] px-2 py-2 font-semibold gap-2 border-2 rounded-xl'><FaSquarePhoneFlip size={28} className=''/>Contact: 01615458942</h1>
                             <h1 className='flex justify-between items-center text-[#000080] px-2 py-2 font-semibold gap-2 border-2 rounded-xl'><FaWhatsappSquare size={28}/>Whatsapp: 01782299570</h1>
                        </div>
                    </div>
                    <div>
                    </div>
              </div>
              {/* imgae section */}
              <div className='h-[700px] w-full flex justify-center items-center p-3'>
                    <img src={Computer} className='h-[600px] w-[500px] rounded-4xl' alt="" />
              </div>
         </div>

     <div className='flex flex-col lg:flex-row'>
        {/* Services Section */}
             <div className='w-full lg"w-1/2 text-black'>
         <div className='px-2'>
          <h1 className='text-2xl text-black font-bold'>Services</h1>
          <h3 className='text-lg pt-2 text-black'>Under the Computer & Laptop Home Service you can avail the following services:</h3>
             <div className='px-2 text-[#3B3B3B]'>
                <h1 className='text-xl font-bold text-[#242424]'>Hardware Services:</h1>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>PC hardware troubleshooting (motherboard, RAM, power supply)</h3>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Windows installation and software troubleshooting</h3>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Virus removal and speed optimization</h3>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Inkjet, Laser and All-in-One Printer Servicing</h3>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Data Recovery Service</h3>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Network and router setup</h3>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Addressing Laptop display, keyboard, and battery problems.</h3>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Repairing LED, LCD, OLED, and Smart TVs.</h3>
             </div>
             <div className='px-2 text-[#3B3B3B]'>
                <h1 className='text-xl font-bold text-[#242424]'>Software Services:</h1>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Software installation and troubleshooting</h3>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Operating system installation and updates</h3>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Virus and malware removal</h3>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Windows installation and activation</h3>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Driver installation and update</h3>
                <h3 className='text-base px-5 flex'><IoCheckmarkCircle size={19} className='pt-1'/>Data backup and recovery</h3>
             </div>
         </div>
     </div>
       {/* right site */}
     <div className="hero pt-5 w-full lg:w-1/2 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shadow-2xl bg-[#C0C0C0]">

      <div className="card-body w-full">
        <fieldset className="fieldset text-black text-sm">
          <label className="label">Full Name</label>
          <input type="name" className="input bg-[#8A8A8A]" placeholder="Full Name" />

          <label className="label">Number</label>
          <input type="number" className="input bg-[#8A8A8A]" placeholder="Number" />

          <label className="label">Your Location</label>
          <input type="text" className="input bg-[#8A8A8A]" placeholder="Enter your location" />

          <label className="label">Tell about the problem</label>
           <textarea rows="5" placeholder="Write here" className='bg-[#8A8A8A] rounded-xl px-3'></textarea>

          <button className="btn btn-neutral mt-4 w-[320px]">Submit</button>
        </fieldset>
      </div>
    </div>
  </div>
     </div>
     </div>
    </div>
  )
}

export default CCTVService


