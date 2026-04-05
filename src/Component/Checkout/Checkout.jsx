import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // ✅ always empty (no save)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
    
  //  input filde
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
   
  //  alert best
const handleOrder = async (e) => {
  e.preventDefault();

  const { name, email, phone, address } = form;

  if (!name || !email || !phone || !address) {
    return Swal.fire({
      icon: "warning",
      title: "Missing Fields",
      text: "Please fill all fields",
    });
  }

  const result = await Swal.fire({
    title: "Confirm Order?",
    text: "Do you want to place this order?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, Order it!",
  });

  if (!result.isConfirmed) return;

  await Swal.fire({
    icon: "success",
    title: "Order Confirmed 🎉",
    text: "Your order has been placed successfully!",
  });

  setForm({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  navigate("/");
};

  return (
     <div className="mt-26">
    <div className="max-w-xl mx-auto pt-5 p-5 shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Checkout</h1>

      <form onSubmit={handleOrder} className="flex flex-col gap-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="border p-2"
        />

        <textarea
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2"
        />

        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded"
        >
          Confirm Order
        </button>
      </form>
    </div>
    </div>
  );
};

export default Checkout;