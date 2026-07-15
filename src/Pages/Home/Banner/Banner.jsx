import React, {useState, useEffect} from 'react';

const Banner = () => {
    const slides = [
    "https://i.ibb.co.com/LdzPk9Sz/2.png", 
     "https://i.ibb.co.com/5XxdYzFk/3.png",
    "https://i.ibb.co.com/VcDm9fnT/E6-S-TWS-Bluetooth-1.png",
    "https://i.ibb.co.com/KjZrqXYs/E6-S-TWS-Bluetooth-3.png",
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
    <div className='carousel w-full h-38 sm:h-64 md:h-50 lg:h-[350px] relative overflow-hidden mt-16 md:mt-16 lg:mt-20'>
          {slides.map((slide, index) => (
             <div 
                 key={index}
                 className={`carousel-item w-full absolute transition-all duration-700 ${
                 index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                 }`}
                >
                 <img src={slide} className='w-full h-full object-cover'/>
             </div>
          ))}

          {/* Optional navigation buttons */}
                <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20'>
                   <button
                        className="btn btn-circle bg-transparent border-none text-black"
                              onClick={() =>
                              setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
                        }
                        >  
                        ❮ 
                   </button>

                     <button
                        className="btn btn-circle bg-transparent border-none text-black"
                            onClick={() => 
                            setCurrent((prev) => (prev + 1) % slides.length)}
                       >
                         ❯
                     </button>
               </div>
    </div>
  )
}

export default Banner
