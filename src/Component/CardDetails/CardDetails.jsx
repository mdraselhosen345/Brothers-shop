// import React from 'react'
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Logo from "../../assets/Logo.png";


// const CardDetails = () => {    
//     const { id } = useParams();
//  const [product, setProduct] = useState(null);
// const [q, setQ] = useState(1);
// const [mainImg, setMainImg] = useState("");
// const [reviews, setReviews] = useState([]); 
//     //  coustomer reviews  
//    useEffect(() => {
//     fetch("/reviews.json")
//        .then(res => res.json())
//         .then(data => setReviews(data));
//    })
    
// useEffect(() => {
//   fetch("/products.json")
//     .then(res => res.json())
//     .then(data => {
//       const foundProduct = data.products.find(p => p.id == id);
//       setProduct(foundProduct);
//       setMainImg(foundProduct.images[0]);
//     });
// }, [id]);

// if(!product){
//     return <h1 className="text-center mt-20 text-xl">Loading...</h1>
// }
//   return (
//     <div className=''>
        
//     <div className='max-w-6xl mx-auto mt-26 gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
//             {/* left site */}
//         <div className='w-[400px] px-5 pt-5'>
//           <img src={product.image} className='h-[350px] w-[350px]'  alt="" />
//           <div className='flex h-[90px] mt-5 gap-2 px-1 py-1'>
//               {product.images.map((img, index) => (
//                 <img
//                     key={index}
//                     src={product.image}
//                     onClick={() => setMainImg(img)}
//                     className="w-[60px] border-1 hover:border-2 border-[#F5B027] cursor-pointer"
//                     alt=""
//                     />
//                 ))}
//           </div>

//         </div>
//         {/* center site */}
//         <div className='w-[530px] px-6 pt-5'>
//               <h1 className='text-md sm:text-md md:text-lg lg:text-xl mr-15 font-bold text-black'>{product.name}</h1>
//               <h2 className='text-md md:text-lg lg:text-2xl pt-3 text-black font-semibold'>Product Highlights</h2>
//               <h3 className='text-xl pt-3 text-black'>Description: {product.description}</h3>
//               <h3 className='text-xl pt-2 text-black'>Brand: {product.brand}</h3>
//               <h3 className='text-xl pt-2 text-black'>Type:  {product.type}</h3>
//               <h3 className='text-xl pt-2 text-black'>Material: stil</h3>
//               <h3 className='text-xl pt-2 text-black'>Color: {product.color}</h3>
//               <h1 className='text-3xl pt-3 text-[#D16500] ml-5 font-bold'>Price: ৳{product.price}</h1>
//               <h4 className='text-xl text-black'>Discount: <span className='text-base line-through'>200</span><span className='text-2xl pb-2'>10%</span></h4>
//               <div className='flex gap-1 pt-2'>
//                 <h2 className='text-black pt-0.5'>{product.rating}</h2>
//          <div className="rating h-[40px] w-[80px]">
//               <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" aria-label="1 star" />
//               <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" aria-label="2 star" defaultChecked />
//               <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" aria-label="3 star" />
//               <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" aria-label="4 star" />
//               <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" aria-label="5 star" />
//          </div>
//          <h2 className='text-black pb-0.5'>({product.reviews})</h2>
//          </div>
//         </div>
//         {/* right site */}
//         <div className='w-[219px] sm:ml-10 md:ml-70 lg:ml-40 mt-20 mb-10 bg-[#C4C4C4] rounded-xl shadow-2xl px-3'>
//                 <h4 className='text-black pt-5'>Warranty not available</h4>
//                     <div className='text-xl mt-4 text-black rounded-xl py-1 border-1'>
//                        Quantity:
//                      <button className='ml-3 mr-3 bg-blue-200 px-2 rounded-md hover:bg-blue-300' onClick={() => setQ(q - 1)}>-</button>
//                       {q}
//                      <button className='ml-3 px-2 bg-blue-200 rounded-md hover:bg-blue-300' onClick={() => setQ(q + 1)}>+</button>
//                     </div>
//                     <div className='mt-5'>
//                     <button className="text-lg bg-[#CAA821] mt-4 rounded-xl px-12 py-1 hover:bg-[#FF795E] hover:shadow-2xl">
//                             <h1 className='text-white text-center font-bold hover:text-black'>Add to cart</h1>
//                     </button>
//                     <button className="text-lg bg-[#F54927] mt-4 rounded-xl px-14 py-1 hover:bg-[#FF795E] hover:shadow-2xl">
//                             <h1 className='text-white text-center font-bold hover:text-black'>Buy Now</h1>
//                     </button>
//                    </div>         
//         </div> 
//     </div>
//      <div className='max-w-4xl mx-auto mt-10'>

//           <div className='px-5'>
//             <h1 className='text-2xl text-black font-bold'>Product details of</h1>
//               <ul className='text-[#303030] px-10'>
//                  <li>Apple</li>
//                  <li>Samsung</li>
//                  <li>Huawei</li>
//               </ul>
//               <h3 className='text-xl text-[#181818] font-semibold pt-5'>Description</h3>
//               <p className='text-[#303030]'>The DELL 64GB DDR4 3200MHz RDIMM Server RAM is a high-performance memory module suited for server and workstation applications. The Dell DDR4 Server RAM has a huge capacity of 64GB, DDR4 memory technology, and a rapid speed of 3200MHz, making it excellent for demanding applications requiring high performance and dependability. This DELL 64GB DDR4 3200MHz RDIMM Server RAM module, with a capacity of 64GB, can handle even the most memory-intensive workloads, ensuring that your server or workstation has the resources it requires to run smoothly. DDR4 memory technology significantly outperforms previous generations, with quicker</p>
//             </div>
//             <div>
//       <div className="max-w-4xl mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-5 text-[#181818]">Customer Reviews</h1>

//      {reviews.map((review) => (
//   <div key={review.id} className="border p-4 rounded-lg mb-4 shadow-md">

//     <h2 className="font-bold text-lg">{review.name}</h2>

//     <p className="text-yellow-500">
//       {"⭐".repeat(review.rating)}
//     </p>

//     <p className="text-gray-600 mt-2">{review.comment}</p>

//     <div className="flex gap-2 mt-3">
//       {review.images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           className="w-26 h-32 object-cover rounded"
//         />
//       ))}
//     </div>

//   </div>
// ))}
//     </div>
//             </div>
//     </div> 
//     </div>
//   )
// }

// export default CardDetails

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const CardDetails = () => {
  const { id } = useParams(); // URL থেকে id নেবে
  const [product, setProduct] = useState(null);
  const [q, setQ] = useState(1);
  const [mainImg, setMainImg] = useState("");
  const [reviews, setReviews] = useState([]);

  // Customer reviews fetch
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []); // ✅ dependency array

  // Product fetch
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.products.find((p) => p.id == id); // id অনুযায়ী filter
        if (foundProduct) {
          setProduct(foundProduct);
          setMainImg(foundProduct.images[0]); 
        }
      });
  }, [id]);

  if (!product) {
    return <h1 className="text-center mt-20 text-xl">Loading...</h1>;
  }

  return (
    <div className="">
      <div className="max-w-6xl mx-auto mt-26 gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* left site */}
        {/* <div className="w-[400px] px-5 pt-5">
          <img src={product.image} className="h-[350px] w-[350px]" alt="" />
          <div className="flex h-[90px] mt-5 gap-2 border-2 px-1 py-1">
            {product?.images?.map((img, index) => (
              <img
                key={index}
                src={product.image}
                onClick={() => setMainImg(img)}
                className="w-[60px] border-1 hover:border-2 border-[#F5B027] cursor-pointer"
                alt=""
              />
            ))}
          </div>
        </div> */}
<div className="w-[400px] px-5 pt-5">
  <img src={mainImg} className="h-[350px] w-[350px]" alt="" />

  <div className="flex h-[90px] mt-5 gap-2 border-2 px-1 py-1">
    {product?.image?.map((img, index) => (
      <img
        key={index}
        src={img}
        onClick={() => setMainImg(img)}
        className="w-[60px] border hover:border-2 border-[#F5B027] cursor-pointer"
        alt=""
      />
    ))}
  </div>
</div>

        {/* center site */}
        <div className="w-[530px] px-6 pt-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl mr-15 font-bold text-black">
            {product.name}
          </h1>
          <h2 className="text-md md:text-lg lg:text-2xl pt-3 text-black font-semibold">
            Product Highlights
          </h2>
          <h3 className="text-xl pt-3 text-black">
            Description: {product.description}
          </h3>
          <h3 className="text-xl pt-2 text-black">Brand: {product.brand}</h3>
          <h3 className="text-xl pt-2 text-black">Type: {product.type}</h3>
          <h3 className="text-xl pt-2 text-black">Material: {product.material}</h3>
          <h3 className="text-xl pt-2 text-black">Color: {product.color}</h3>
          <h1 className="text-3xl pt-3 text-[#D16500] ml-5 font-bold">
            Price: ৳{product.price}
          </h1>
          <h4 className="text-xl text-black">
            Discount:{" "}
            <span className="text-base line-through">200</span>
            <span className="text-2xl pb-2">10%</span>
          </h4>
          <div className="flex gap-1 pt-2">
            <h2 className="text-black pt-0.5">{product.rating}</h2>
            <div className="rating h-[40px] w-[80px]">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-500"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-500"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-500"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-500"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-500"
                aria-label="5 star"
              />
            </div>
            <h2 className="text-black pb-0.5">({product.reviews})</h2>
          </div>
        </div>

        {/* right site */}
        <div className="w-[219px] sm:ml-10 md:ml-70 lg:ml-40 mt-20 mb-10 bg-[#C4C4C4] rounded-xl shadow-2xl px-3">
          <h4 className="text-black pt-5">Warranty not available</h4>
          <div className="text-xl mt-4 text-black rounded-xl py-1 border-1">
            Quantity:
            <button
              className="ml-3 mr-3 bg-blue-200 px-2 rounded-md hover:bg-blue-300"
              onClick={() => setQ(q - 1)}
            >
              -
            </button>
            {q}
            <button
              className="ml-3 px-2 bg-blue-200 rounded-md hover:bg-blue-300"
              onClick={() => setQ(q + 1)}
            >
              +
            </button>
          </div>
          <div className="mt-5">
            <button className="text-lg bg-[#CAA821] mt-4 rounded-xl px-12 py-1 hover:bg-[#FF795E] hover:shadow-2xl">
              <h1 className="text-white text-center font-bold hover:text-black">
                Add to cart
              </h1>
            </button>
            <button className="text-lg bg-[#F54927] mt-4 rounded-xl px-14 py-1 hover:bg-[#FF795E] hover:shadow-2xl">
              <h1 className="text-white text-center font-bold hover:text-black">
                Buy Now
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;