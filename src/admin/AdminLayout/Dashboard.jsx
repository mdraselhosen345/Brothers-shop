import { useEffect, useState } from "react";

const Dashboard = () => {
  const [counts, setCounts] = useState({
    products: 0,
    orders: 0,
    services: 0,
  });

  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/products").then((res) => res.json()),
      fetch("http://localhost:5000/orders").then((res) => res.json()),
      fetch("http://localhost:5000/services").then((res) => res.json()),
    ]).then(([products, orders, services]) => {
      setCounts({
        products: products.length,
        orders: orders.length,
        services: services.length,
      });

      setRecentOrders(orders.slice(-5).reverse());
    });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* ================= CARD OVERVIEW ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-gray-900 text-white p-5 rounded-2xl shadow">
          <h2 className="text-lg">Products</h2>
          <p className="text-3xl font-bold mt-2">{counts.products}</p>
        </div>

        <div className="bg-gray-900 text-white p-5 rounded-2xl shadow">
          <h2 className="text-lg">Orders</h2>
          <p className="text-3xl font-bold mt-2">{counts.orders}</p>
        </div>

        <div className="bg-gray-900 text-white p-5 rounded-2xl shadow">
          <h2 className="text-lg">Services</h2>
          <p className="text-3xl font-bold mt-2">{counts.services}</p>
        </div>
      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Quick Actions</h2>
        <div className="flex gap-4 flex-wrap">

          <button className="bg-green-600 text-white px-4 py-2 rounded-xl shadow">
            View Revenue
          </button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow">
            Manage Orders
          </button>

          <button className="bg-purple-600 text-white px-4 py-2 rounded-xl shadow">
            View Customers
          </button>

          <button className="bg-orange-600 text-white px-4 py-2 rounded-xl shadow">
            View Reports
          </button>

          <button className="bg-red-600 text-white px-4 py-2 rounded-xl shadow">
            Check Alerts
          </button>

        </div>
      </div>

      {/* ================= RECENT ORDERS ================= */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Recent Orders</h2>
        <div className="bg-white rounded-2xl shadow p-4">
          {recentOrders.length === 0 ? (
            <p className="text-gray-500">No recent orders</p>
          ) : (
            recentOrders.map((order, index) => (
              <div
                key={index}
                className="flex justify-between border-b py-2 text-sm"
              >
                <span>Order #{order._id || index}</span>
                <span className="font-semibold">
                  ${order.total || 0}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ================= EXTRA INFO ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Notifications */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3">Notifications</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>🔔 New order received</li>
            <li>⚠️ Low stock alert</li>
            <li>🎉 New offer available</li>
          </ul>
        </div>

        {/* Summary */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3">Summary</h2>
          <p className="text-gray-600 text-sm">
            Total Orders: {counts.orders}
          </p>
          <p className="text-gray-600 text-sm">
            Total Products: {counts.products}
          </p>
          <p className="text-gray-600 text-sm">
            Total Services: {counts.services}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;