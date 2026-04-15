// import React from 'react'

// const Login = () => {
//   return (

//     <div className='flex items-center justify-center h-screen mt-14 px-4'>
//       <div className="bg-[#C4C4C4] shadow-2xl rounded-2xl p-8 w-sm">
    
//     <h2 className="text-2xl font-bold text-center mb-6 text-black">Login Now</h2>

//     <form>
      
//       {/* Email */} 
//       <div className="mb-4 text-[#3B3B3B]">
//         <label class="block mb-1 text-md">Email</label>
//         <input type="email" placeholder="Enter your email"
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
//       </div>

//      {/* Password */}
//       <div className="mb-4 text-[#3B3B3B]">
//         <label class="block mb-1 text-md">Password</label>
//         <input type="password" placeholder="Enter your password"
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
//       </div>

//             {/* Extra  */}
//       <div class="text-end text-sm">
//         <a href="#" class="text-[#D10000]">Forgot Password?</a>
//       </div>

//     {/* Button  */}
//       <button
//         class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mb-5">
//         Login
//       </button>

//        <p class="text-center text-sm text-[#242424]">
//         Don’t have an account?
//       </p>

//       <div className="btn btn-outline btn-primary w-full py-2 mt-2 rounded-lg ">
        
//         <a href="/CreateAccount" className="">Create Your Account</a>
//       </div>
          
//     </form>
//   </div>
//     </div>
//   )
// }

// export default Login
import React, { useState } from "react";
import API from "../../Utils/api";
import { useNavigate } from "react-router-dom"; // window.location এর বদলে এটি ভালো

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      // টোকেন সেভ করা
      localStorage.setItem("token", res.data.token);

      alert("Login Success ✅");

      // সঠিক পাথ ব্যবহার করুন (আপনার রাউটার অনুযায়ী এটি /admin/dashboard হতে পারে)
      navigate("/admin/dashboard"); 

    } catch (err) {
      // যদি ব্যাকএন্ড থেকে কোনো নির্দিষ্ট মেসেজ আসে সেটা দেখাবে, নাহলে ডিফল্ট মেসেজ
      const errorMessage = err.response?.data?.msg || err.response?.data?.message || "Login failed! Please check your email and password.";
      alert(errorMessage);
      console.error("Login Error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen mt-14 px-4">
      <div className="bg-[#C4C4C4] shadow-2xl rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">Login Now</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4 text-[#3B3B3B]">
            <label className="block mb-1 text-md">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          

          {/* Password */}
          <div className="mb-4 text-[#3B3B3B]">
            <label className="block mb-1 text-md">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mb-5"
            type="submit"
          >
            Login
          </button>
             <p class="text-center text-sm text-[#242424]">
                 Don’t have an account?
            </p>

               <div className="btn btn-outline btn-primary w-full py-2 mt-2 rounded-lg ">
        
                 <a href="/CreateAccount" className="">Create Your Account</a>
       </div>
        </form>
      </div>
    </div>
  );
};

export default Login;