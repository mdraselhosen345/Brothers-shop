import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // Filter + Search
  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.customerName?.toLowerCase().includes(search.toLowerCase()) ||
      o.productName?.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || o.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Update status (frontend only demo)
  const updateStatus = (id, newStatus) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status: newStatus } : o
    );
    setOrders(updated);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      {/* ================= SEARCH + FILTER ================= */}
      <div className="flex gap-4 mb-4 flex-wrap text-black">
        <input
          type="text"
          placeholder="Search by customer or product..."
          className="border p-2 rounded w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Delivered</option>
        </select>
      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto bg-white text-black shadow rounded-2xl">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Product</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((o) => (
              <tr key={o.id} className="border-b">
                <td className="p-3">#{o.id}</td>
                <td className="p-3">{o.customerName}</td>
                <td className="p-3">{o.productName}</td>
                <td className="p-3">{o.quantity}</td>
                <td className="p-3">${o.total}</td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      o.status === "Pending"
                        ? "bg-yellow-500"
                        : o.status === "Processing"
                        ? "bg-blue-500"
                        : "bg-green-600"
                    }`}
                  >
                    {o.status || "Pending"}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => updateStatus(o.id, "Processing")}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Process
                  </button>

                  <button
                    onClick={() => updateStatus(o.id, "Delivered")}
                    className="bg-green-600 text-white px-2 py-1 rounded"
                  >
                    Deliver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <p className="p-4 text-gray-500">No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Orders;