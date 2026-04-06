import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // form state (user details)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // separate payment & delivery state
  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    const { name, email, phone, address } = form;

    // validation
    if (!name || !email || !phone || !address || !payment || !delivery) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill all fields & select payment & delivery",
      });
    }

    // confirm order
    const result = await Swal.fire({
      title: "Confirm Order?",
      text: `Do you want to place the order for ${state?.product?.name || "this product"}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Order it!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    // success
    await Swal.fire({
      icon: "success",
      title: "Order Confirmed 🎉",
      text: "Your order has been placed successfully!",
    });

    // reset
    setForm({ name: "", email: "", phone: "", address: "" });
    setPayment("");
    setDelivery("");

    navigate("/");
  };

  return (
    <div className="mt-19 mb-10">
      <div className="max-w-xl mx-auto p-5 shadow-lg rounded-lg pt-15">
        <h1 className="text-2xl font-bold mb-5 text-gray-700">
          Shipping & Billing
        </h1>

        <form onSubmit={handleOrder} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <textarea
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            className="border p-2 rounded"
          />
         <div className="flex justify-between">
          {/* Payment Section */}
          <div className="pt-4">
            <h2 className="text-xl mb-2 font-semibold">Payment Method</h2>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={payment === "cash"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="online"
                checked={payment === "online"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Online Payment
            </label>
          </div>
        
          {/* Delivery Section */}
          <div className="pt-4">
            <h2 className="text-xl mb-2 font-semibold">Delivery Method</h2>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="delivery"
                value="home"
                checked={delivery === "home"}
                onChange={(e) => setDelivery(e.target.value)}
              />
              Home Delivery - 150৳
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="delivery"
                value="pickup"
                checked={delivery === "pickup"}
                onChange={(e) => setDelivery(e.target.value)}
              />
              Store Pickup - Free
            </label>
          </div>
           </div>
           <div>
            <h2>nogod</h2>
           </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 mt-5 rounded hover:bg-green-600 transition"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;