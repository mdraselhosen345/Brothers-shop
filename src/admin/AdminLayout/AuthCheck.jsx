// import React, { useEffect, useState } from "react";
// import API from "../../Utils/api";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       window.location.href = "/";
//       return;
//     }

//     API.get("/auth/profile", {
//       headers: {
//         Authorization: token
//       }
//     })
//     .then(res => setUser(res.data))
//     .catch(() => {
//       localStorage.removeItem("token");
//       window.location.href = "/";
//     });

//   }, []);

//   return (
//     <div>
//       <h1>Dashboard 🔐</h1>
//       {user && <h2>Welcome {user.fullname}</h2>}
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from "react";
import API from "../../Utils/api";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]); // সকল ইউজার রাখার জন্য
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // ১. ডাটাবেজ থেকে সকল রেজিস্টার্ড ইউজার নিয়ে আসা
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // আপনার ব্যাকএন্ডে এই এন্ডপয়েন্টটি থাকতে হবে যা সব ইউজার রিটার্ন করে
        const response = await API.get("/auth/all-users"); 
        setUsers(response.data);
      } catch (err) {
        console.error("ইউজার ডাটা আনতে সমস্যা হয়েছে", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // ২. সার্চ ফিল্টারিং লজিক
  const filteredUsers = users.filter((user) =>
    user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-center mt-20 text-xl">Loading User Data...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">User Management Dashboard</h1>
            <p className="text-gray-500 text-sm">মোট রেজিস্টার্ড ইউজার: {users.length}</p>
          </div>
          
          <div className="mt-4 md:mt-0 w-full md:w-64">
            <input
              type="text"
              placeholder="নাম বা ইমেইল দিয়ে সার্চ করুন..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* User Table Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">ইউজার</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">ইমেইল</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">ফোন নাম্বার</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">স্ট্যাটাস</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            {user.fullname.charAt(0)}
                          </div>
                          <span className="font-medium text-gray-800">{user.fullname}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{user.email}</td>
                      <td className="px-6 py-4 text-gray-600">{user.phone || "N/A"}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                          Active User
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-10 text-center text-gray-500">
                      কোনো ইউজার পাওয়া যায়নি!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;