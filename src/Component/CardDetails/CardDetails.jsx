import React from 'react'
import { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";


const CardDetails = () => {    
 const [product, setProduct] = useState(null);
const [q, setQ] = useState(1);
const [mainImg, setMainImg] = useState("");

    useEffect(() => {
    fetch("/product.json")
    .then(res => res.json())
    .then(data => {
        setProduct(data);
        setMainImg(data.images[0]);
    });
}, []);

if(!product){
    return <h1 className="text-center mt-20 text-xl">Loading...</h1>
}
  return (
    <div className='max-w-6xl mx-auto mt-26 gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2'>
            {/* left site */}
        <div className='w-[400px] px-5 pt-5'>
          <img src={mainImg} className='h-[350px] w-[350px]'  alt="" />
          <div className='flex h-[90px] mt-5 gap-2 px-1 py-1'>
              {product.images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    onClick={() => setMainImg(img)}
                    className="w-[60px] cursor-pointer"
                    alt=""
                    />
                ))}
          </div>

        </div>
        {/* center site */}
        <div className='w-[530px] px-6 pt-5'>
              <h1 className='text-md sm:text-md md:text-lg lg:text-xl mr-15 font-bold text-black'>Apple Logo Label Aufkleber Sticker Badge Silver chrome color decal metal</h1>
              <h2 className='text-md md:text-lg lg:text-2xl pt-3 text-black font-semibold'>Product Highlights</h2>
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
        {/* right site */}
        <div className='w-[219px] ml-40 mt-20 mb-20 bg-[#C4C4C4] rounded-xl shadow-2xl px-3 md:full'>
                <h4 className='text-black pt-5'>Warranty not available</h4>
                    <div className='text-xl mt-4 text-black rounded-xl py-1 border-1'>
                       Quantity:
                     <button className='ml-3 mr-3 bg-blue-200 px-2 rounded-md hover:bg-blue-300' onClick={() => setQ(q - 1)}>-</button>
                      {q}
                     <button className='ml-3 px-2 bg-blue-200 rounded-md hover:bg-blue-300' onClick={() => setQ(q + 1)}>+</button>
                    </div>
                    <div className='mt-5'>
                    <button className="text-lg bg-[#CAA821] mt-4 rounded-xl px-12 py-1 hover:bg-[#FF795E] hover:shadow-2xl">
                            <h1 className='text-white text-center font-bold hover:text-black'>Add to cart</h1>
                    </button>
                    <button className="text-lg bg-[#F54927] mt-4 rounded-xl px-14 py-1 hover:bg-[#FF795E] hover:shadow-2xl">
                            <h1 className='text-white text-center font-bold hover:text-black'>Buy Now</h1>
                    </button>
                   </div>         
        </div>
    </div>
  )
}

export default CardDetails
