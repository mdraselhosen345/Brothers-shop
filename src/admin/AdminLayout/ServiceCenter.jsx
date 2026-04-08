import { useEffect, useState } from "react";

const ServiceCenter = () => {
          const [requests, setRequests] = useState([]);
    
      useEffect(() => {
        // Replace with fetch("http://localhost:5000/requests") for real backend
        setRequests([
          {
            id: 1,
            name: "John Doe",
            phone: "0123456789",
            location: "Dhaka, Bangladesh",
            device: "Laptop",
            description: "Screen not working",
            status: "Pending",
            date: "2026-04-08",
          },
          {
            id: 2,
            name: "Jane Smith",
            phone: "0987654321",
            location: "Chittagong, Bangladesh",
            device: "Desktop",
            description: "Keyboard not working",
            status: "In Progress",
            date: "2026-04-07",
          },
        ]);
      }, []);
    
      const updateStatus = (id, newStatus) => {
        setRequests(
          requests.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
        );
      };
    
      const deleteRequest = (id) => {
        if (confirm("Are you sure to delete this request?")) {
          setRequests(requests.filter((r) => r.id !== id));
        }
      };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Service Center Requests
      </h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow text-black">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Location</th>
              <th className="p-3">Device & Tell About the Problem</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <tr key={r.id} className="border-b">
                <td className="p-3">#{r.id}</td>
                <td className="p-3">{r.name}</td>
                <td className="p-3">{r.phone}</td>
                <td className="p-3">{r.location}</td>
                <td className="p-3">
                  <strong>{r.device}</strong> – {r.description}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      r.status === "Pending"
                        ? "bg-yellow-500"
                        : r.status === "In Progress"
                        ? "bg-blue-500"
                        : "bg-green-600"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => updateStatus(r.id, "In Progress")}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Start
                  </button>
                  <button
                    onClick={() => updateStatus(r.id, "Completed")}
                    className="bg-green-600 text-white px-2 py-1 rounded"
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => deleteRequest(r.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
                <td className="p-3">{r.date}</td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="8" className="p-4 text-gray-500 text-center">
                  No requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ServiceCenter
