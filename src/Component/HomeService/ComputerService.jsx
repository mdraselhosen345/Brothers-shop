import React from 'react'
import Computer from "../../assets/Computer.png"
import { TbCoinTaka } from "react-icons/tb";
import { GoSmiley } from "react-icons/go";
import { MdCheckCircle } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

const ComputerService = () => {
  return (
    <div className='border-2 border-red-500 h-[1200px]'>
         <div className='flex'> 
              <div className='w-full pl-5 pt-15'>
                  <h1 className='text-4xl font-bold text-[#242424]'>Computer Home Service</h1>
                  <p className='text-[#3B3B3B] text-sm pt-5'>আমাদের বিশেষজ্ঞ প্রকৌশলীরা ঘরে বসেই সুবিধাজনক  কম্পিউটার, ল্যাপটপ, প্রিন্টার, মনিটর, পিসি এবং টিভির সকল ধরনের হোম সার্ভিস প্রদান করি। সফটওয়্যার সমস্যা, হার্ডওয়্যার রিপেয়ার, উইন্ডোজ ইনস্টল, ভাইরাস রিমুভ, প্রিন্টার সেটআপ বা টিভি ডিসপ্লে সমস্যা—সবকিছুর দ্রুত ও নির্ভরযোগ্য সমাধান দেই আপনার বাসায় গিয়েই। অভিজ্ঞ টেকনিশিয়ান ও সাশ্রয়ী মূল্যে মানসম্মত সার্ভিস নিশ্চিত করাই আমাদের লক্ষ্য।</p>
                    <div className='flex gap-3 pt-10'>
                        <h3 className='text-base flex text-[#242424] border-1 border-[#00A300] bg-[#889E88]  rounded-2xl px-5 py-2'>Starting From:<span className='text-black font-bold'> 300</span><TbCoinTaka size={25} className='pb-1' /></h3>
                        <h3 className='text-base flex  text-[#1A496B] border-1 border-[#6E3E00] bg-[#CCB6B4] rounded-2xl px-5 py-2'><MdCheckCircle className='bg-green pt-1' size={19}/>Home Service Available</h3>
                    </div>
                    <div className='grid grid-cols-2 gap-1text-lg text-black pt-10 gap-5'>
                        <h3 className='flex gap-2'><GiCheckMark className='pt-0.5 text-[#00A300]' size={20}/>Experienced technician</h3>
                        <h3 className='flex gap-2'><GiCheckMark className='pt-0.5 text-[#00A300]' size={20}/>Fast service</h3>
                        <h3 className='flex gap-2'><GiCheckMark className='pt-0.5 text-[#00A300]' size={20}/>24/7 support</h3>
                        <h3 className='flex gap-2'><GiCheckMark className='pt-0.5 text-[#00A300]' size={20}/>100% customer satisfaction</h3>
                    </div>
                    <div>
{/* <div className="hero min-h-screen border-2 border-red-500">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-400 w-full max-w-sm shrink-0 shadow-2xl">

      <div className="card-body w-[400px]">
        <fieldset className="fieldset">
          <label className="label">Full Name</label>
          <input type="name" className="input" placeholder="Full Name" />

          <label className="label">Number</label>
          <input type="number" className="input" placeholder="Number" />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Tell about the problem</label>
          <input type="text" className="input" placeholder="Write here" />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div> */}
                    </div>
              </div>
              <div className='h-[700px] w-full flex justify-center items-center'>
                    <img src={Computer} className='h-[600px] w-[500px] rounded-4xl' alt="" />
              </div>
         </div>
    </div>
  )
}

export default ComputerService
