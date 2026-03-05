import React from 'react'
import Logo from "../../assets/Logo.png"

const CardDetails = () => {
  return (
    <div className='border-2 border-red-500 h-[500px] max-w-6xl mx-auto gap-2 mt-26 flex '>
        <div className='border-2 border-bule-500 w-[400px] px-5 pt-5'>
          <img src={Logo} className='border-2' alt="" />
          <div className='flex border-2 h-[90px] mt-5 gap-2 px-1 py-1'>
            <img src={Logo} className='border-2' alt="" />
            <img src={Logo} className='border-2' alt="" />
            <img src={Logo} className='border-2' alt="" />
            <img src={Logo} className='border-2' alt="" />         
          </div>
        </div>
        <div className='border-2 border-green-500 w-[452px] px-5 pt-5'>
              <h1 className='text-2xl font-bold text-black'>Apple Logo Label Aufkleber Sticker Badge Silver chrome color decal metal</h1>
              <h2 className='text-2xl pt-3 text-black font-semibold'>Product Highlights</h2>
              <h3 className='text-xl pt-3 text-black'>Description: ABC dfgjdfjgfdjkgj</h3>
              <h3 className='text-xl pt-2 text-black'>Brand: Apple</h3>
              <h3 className='text-xl pt-2 text-black'>Type:  RJ45 Connector</h3>
              <h3 className='text-xl pt-2 text-black'>Material: stil</h3>
              <h3 className='text-xl pt-2 text-black'>Color: red</h3>
              <h1 className='text-3xl pt-3 text-[#D16500] ml-5 font-bold'>Price: ৳165</h1>
              <h4 className='text-xl text-black'>Discount: <span className='text-base line-through'>200</span><span className='text-2xl pb-2'>10%</span></h4>
              <div className='flex gap-1 pt-2'>
                <h2 className='text-black pt-0.5'>4.6</h2>
         <div className="rating h-[40px] w-[80px]">
              <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" aria-label="1 star" />
              <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" aria-label="2 star" defaultChecked />
              <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" aria-label="3 star" />
              <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" aria-label="4 star" />
              <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" aria-label="5 star" />
         </div>
         <h2 className='text-black pb-0.5'>(56)</h2>
         </div>
        </div>
        <div className='w-[290px] px-3 mt-15 mb-15 bg-[#C4C4C4] rounded-xl shadow-2xl'>
                <h4 className='text-black pt-2'>Warranty not available</h4>
                 
        </div>
    </div>
  )
}

export default CardDetails
