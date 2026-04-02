import React from 'react'

const CreateAccount = () => {
  return (
     <div className='flex items-center justify-center h-screen mt-14 px-4 pt-35 mb-25'>
      <div className="bg-[#C4C4C4] shadow-2xl rounded-2xl p-8 w-sm">
    
    <h2 className="text-2xl font-bold text-center mb-6 text-black">Create Your Account Now</h2>

    <form>
      
      {/* Fast Name */}
      <div className="mb-4 text-[#3B3B3B]">
        <label class="block mb-1 text-md">Fast Name</label>
        <input type="fastname" placeholder="Enter your Fast Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      </div>
      {/* Last Name */}
      <div className="mb-4 text-[#3B3B3B]">
        <label class="block mb-1 text-md">Last Name</label>
        <input type="lastName" placeholder="Enter your Last Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      </div>
      {/* Phone Name */}
      <div className="mb-4 text-[#3B3B3B]">
        <label class="block mb-1 text-md">Phone Number</label>
        <input type="number" placeholder="Enter your Phone Number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      </div>
      {/* Email */}
      <div className="mb-4 text-[#3B3B3B]">
        <label class="block mb-1 text-md">Email</label>
        <input type="email" placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      </div>

     {/* Password */}
      <div className="mb-4 text-[#3B3B3B]">
        <label class="block mb-1 text-md">Password</label>
        <input type="password" placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      </div>
    {/* Button  */}
      <button
        class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mb-5">
        Continue
      </button>

        <div class="text-sm">
        <p className='text-[#242424]'>Already have an account?</p>
      </div>

    </form>
  </div>
    </div>
  )
}

export default CreateAccount
