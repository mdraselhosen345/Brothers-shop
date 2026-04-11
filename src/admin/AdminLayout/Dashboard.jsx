import { useEffect, useState } from "react";

const Dashboard = () => {
  const [counts, setCounts] = useState({
    products: 0,
    orders: 0,
    services: 0,
  });

  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
         const [productsRes, ordersRes, servicesRes] = await Promise.all([
                 fetch("http://localhost:5000/products").then((res) => res.json()),
                 fetch("http://localhost:5000/orders").then((res) => res.json()),
                 fetch("http://localhost:5000/requests").then((res) => res.json()), // FIX
]);

        // যদি API return করে { data: [...] } structure
        const productsData = productsRes.data || productsRes;
        const ordersData = ordersRes.data || ordersRes;
        const servicesData = servicesRes.data || servicesRes;

        setCounts({
          products: productsData.length,
          orders: ordersData.length,
          services: servicesData.length,
        });

        setRecentOrders(ordersData.slice(-5).reverse());
      } catch (err) {
        console.error("Dashboard data fetch failed:", err);
        setError("ড্যাশবোর্ড ডেটা লোড করতে ব্যর্থ হয়েছে।");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="p-6 text-gray-500">লোড হচ্ছে...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500">{error}</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* CARD OVERVIEW */}
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

      {/* QUICK ACTIONS */}
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

      {/* RECENT ORDERS */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Recent Orders</h2>
        <div className="bg-white rounded-2xl shadow p-4">
          {recentOrders.length === 0 ? (
            <p className="text-gray-500">No recent orders</p>
          ) : (
            recentOrders.map((order, index) => (
              <div
                key={order._id || index}
                className="flex justify-between border-b py-2 text-sm"
              >
                <span>Order #{order._id || index}</span>
                <span className="font-semibold">${order.total || 0}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* EXTRA INFO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3">Notifications</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>🔔 New order received</li>
            <li>⚠️ Low stock alert</li>
            <li>🎉 New offer available</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3">Summary</h2>
          <p className="text-gray-600 text-sm">Total Orders: {counts.orders}</p>
          <p className="text-gray-600 text-sm">Total Products: {counts.products}</p>
          <p className="text-gray-600 text-sm">Total Services: {counts.services}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;