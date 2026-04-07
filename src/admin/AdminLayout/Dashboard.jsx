import { useEffect, useState } from "react";

const Dashboard = () => {
  const [counts, setCounts] = useState({ products: 0, orders: 0, services: 0 });

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/products").then(res => res.json()),
      fetch("http://localhost:5000/orders").then(res => res.json()),
      fetch("http://localhost:5000/services").then(res => res.json())
    ]).then(([products, orders, services]) => {
      setCounts({ products: products.length, orders: orders.length, services: services.length });
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-black p-5 rounded shadow">Products: {counts.products}</div>
        <div className="bg-black p-5 rounded shadow">Orders: {counts.orders}</div>
        <div className="bg-black p-5 rounded shadow">Home Services: {counts.services}</div>
        <div className="bg-black p-5 rounded shadow">list</div>
      </div>
    </div>
  );
};

export default Dashboard;