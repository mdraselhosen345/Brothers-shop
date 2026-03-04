import React, {useState, useEffect} from 'react';
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";

const ServicingCenter = () => {
    const slides = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://i.postimg.cc/FKDrdZ2W/Chat-GPT-Image-Mar-4-2026-10-36-01-AM.png",
    ];
    
    const [current, setCurrent] = useState(0);
    // Auto slide every 3 seconds
              useEffect(() => {
                const interval = setInterval(() => {
                   setCurrent((prev) => (prev + 1) % slides.length);
                   }, 3000);
                 return () => clearInterval(interval);
              }, []);


  return (  
     <div>
    <div className='w-full h-40 sm:h-60 md:h-72 lg:h-[400px] relative overflow-hidden mt-16'>
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-700 ${
        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <img
        src={slide}
        className='w-full h-full object-cover'
        alt="slide"
      />
    </div>
  ))}

  <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20'>
    <button
      className="btn btn-circle bg-transparent border-none text-white"
      onClick={() =>
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
      }
    >
      ❮
    </button>

    <button
      className="btn btn-circle bg-transparent border-none text-white"
      onClick={() =>
        setCurrent((prev) => (prev + 1) % slides.length)
      }
    >
      ❯
    </button>
  </div>
</div>
  <div className='max-w-6xl mx-auto'>
    {/* heding section */}
       <div className='text-center pt-10'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black'>Welcome to Our <span className='text-[#F54927]'>Service Center</span></h1>
          <h3 className='text-sm sm:text-base md:text-lg lg:text-xl pt-2 text-[#242424] font-semibold'>Professional Repair & Support For All Your Devices</h3>
                    <p className='sm:text-xs md:text-md lg:text-xl text-[#3B3B3B] sm:px-10 lg:px-50 pt-3'>We have our own servicing center. If you want, you can bring it directly, or we will collect it from your home and deliver it back after the repair and set it up. Call now for fast service.</p>
                        <div className='flex gap-2 justify-center pt-5 pb-3 px-20 sm:px-10 lg:px-20'>
                             <h1 className='flex justify-between items-center text-[#0000FF] px-2 py-2 font-semibold gap-2 border-2 rounded-xl hover:scale-102 transition duration-300'><FaSquarePhoneFlip size={28}/>Contact: 01615458942</h1>
                             <h1 className='flex justify-between items-center text-[#000080] px-2 py-2 font-semibold gap-2 border-2 rounded-xl hover:scale-102 transition duration-300'><FaWhatsappSquare size={28}/>Whatsapp: 01782299570</h1>
                        </div>
            
       </div>

      <div className='flex flex-col md:flex-row lg:flex-row mt-1 mb-2 px-4'>   
        {/* left site */}
     <div className="w-full lg:w-1/2 px-4">
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
      {/* right site */}
 <div className="w-full lg:w-1/2">
  <h1 className="text-2xl font-bold mb-2 mt-3 text-[#242424] px-2">Service Center Location</h1>
   <h3 className='text-xl text-[#3B3B3B] px-2 flex'><MdLocationOn className='pt-1' size={22}/>Location: Khagan Ashulia Savar</h3>
   <h3 className='text-lg text-[#3B3B3B] px-2 pb-5 flex'><MdOutlineAccessTime className='pt-1' size={22}/>Service time: 4:00 PM – 10:00 PM</h3>
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4849.558958134432!2d90.31127345131128!3d23.8754817136095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c3684e2f555b%3A0xb78a0254a35fb88d!2sClassy%20Style!5e1!3m2!1sen!2sbd!4v1772518794393!5m2!1sen!2sbd"
    className="w-full h-60 sm:h-72 md:h-80 lg:h-[340px] rounded-xl shadow-lg"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

         </div>
      </div>
  </div>
 
  )
}

export default ServicingCenter


