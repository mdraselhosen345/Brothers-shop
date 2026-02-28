import React from 'react'
import Computer from "../../assets/Computer.png"
import { TbCoinTaka } from "react-icons/tb";
import { GoSmiley } from "react-icons/go";
import { MdCheckCircle } from "react-icons/md";

const ComputerService = () => {
  return (
    <div className='border-2 border-red-500 h-[600px]'>
         <div className='flex'>
              <div className='h-[600px] w-full pl-5 pt-10'>
                  <h1 className='text-4xl font-bold text-[#242424]'>Computer Home Service</h1>
                  <p className='text-[#3B3B3B] text-sm pt-5'>আমাদের বিশেষজ্ঞ প্রকৌশলীরা ঘরে বসেই সুবিধাজনক  কম্পিউটার, ল্যাপটপ, প্রিন্টার, মনিটর, পিসি এবং টিভির সকল ধরনের হোম সার্ভিস প্রদান করি। সফটওয়্যার সমস্যা, হার্ডওয়্যার রিপেয়ার, উইন্ডোজ ইনস্টল, ভাইরাস রিমুভ, প্রিন্টার সেটআপ বা টিভি ডিসপ্লে সমস্যা—সবকিছুর দ্রুত ও নির্ভরযোগ্য সমাধান দেই আপনার বাসায় গিয়েই। অভিজ্ঞ টেকনিশিয়ান ও সাশ্রয়ী মূল্যে মানসম্মত সার্ভিস নিশ্চিত করাই আমাদের লক্ষ্য।</p>
                    <div className='flex gap-3 pt-4'>
                        <h3 className='text-base flex text-black border-1 border-[#00A300] bg-[#889E88]  rounded-2xl px-5 py-2'>Starting From: 300<TbCoinTaka size={25} className='pb-1' /></h3>
                        <h3 className='text-base flex  text-black border-1 border-[#A30000] rounded-2xl px-5 py-2'><MdCheckCircle className='bg-green' size={19}/>Home Service Available</h3>
                    </div>
              </div>
              <div className='h-[600px] w-full flex justify-center items-center'>
                    <img src={Computer} className='h-[500px] w-[500px] rounded-4xl' alt="" />
              </div>
         </div>
    </div>
  )
}

export default ComputerService
