import React, {useState, useEffect} from 'react';

const Banner = () => {
    const slides = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
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
    <div className='carousel w-full h-18 sm:h-64 md:h-50 lg:h-[350px] relative overflow-hidden mt-16 md:mt-16 lg:mt-20'>
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
