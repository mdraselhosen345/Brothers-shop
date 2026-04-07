import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="space-y-3">
        {orders.map(o => (
          <div key={o.id} className="border p-3 rounded shadow">
            <h2>Order #{o.id}</h2>
            <p>Product: {o.productName}</p>
            <p>Quantity: {o.quantity}</p>
            <p>Customer: {o.customerName}</p>
            <p>Total: {o.total}</p>
          </div>
        ))}
      </div>
      <h1 className="text-black">sdgfjdsgjjgh</h1>
    </div>
  );
};

export default Orders;