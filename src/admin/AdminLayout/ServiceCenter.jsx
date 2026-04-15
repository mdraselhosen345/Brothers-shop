// import { useEffect, useState } from "react";

// const ServiceCenter = () => {
//           const [requests, setRequests] = useState([]);
          
    
//       useEffect(() => {
//         // Replace with fetch("http://localhost:5000/requests") for real backend
//         setRequests([
//           {
//             id: 1,
//             name: "John Doe",
//             phone: "0123456789",
//             location: "Dhaka, Bangladesh",
//             device: "Laptop",
//             description: "Screen not working",
//             status: "Pending",
//             date: "2026-04-08",
//           },
//           {
//             id: 2,
//             name: "Jane Smith",
//             phone: "0987654321",
//             location: "Chittagong, Bangladesh",
//             device: "Desktop",
//             description: "Keyboard not working",
//             status: "In Progress",
//             date: "2026-04-07",
//           },
//         ]);
//       }, []);
    
//       const updateStatus = (id, newStatus) => {
//         setRequests(
//           requests.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
//         );
//       };
    
//       const deleteRequest = (id) => {
//         if (confirm("Are you sure to delete this request?")) {
//           setRequests(requests.filter((r) => r.id !== id));
//         }
//       };
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">
//         Service Center Requests
//       </h1>

//       <div className="overflow-x-auto bg-white rounded-2xl shadow text-black">
//         <table className="w-full text-left">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-3">ID</th>
//               <th className="p-3">Name</th>
//               <th className="p-3">Phone</th>
//               <th className="p-3">Location</th>
//               <th className="p-3">Device & Tell About the Problem</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Actions</th>
//               <th className="p-3">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((r) => (
//               <tr key={r.id} className="border-b">
//                 <td className="p-3">#{r.id}</td>
//                 <td className="p-3">{r.name}</td>
//                 <td className="p-3">{r.phone}</td>
//                 <td className="p-3">{r.location}</td>
//                 <td className="p-3">
//                   <strong>{r.device}</strong> – {r.description}
//                 </td>
//                 <td className="p-3">
//                   <span
//                     className={`px-2 py-1 rounded text-white text-sm ${
//                       r.status === "Pending"
//                         ? "bg-yellow-500"
//                         : r.status === "In Progress"
//                         ? "bg-blue-500"
//                         : "bg-green-600"
//                     }`}
//                   >
//                     {r.status}
//                   </span>
//                 </td>
//                 <td className="p-3 space-x-2">
//                   <button
//                     onClick={() => updateStatus(r.id, "In Progress")}
//                     className="bg-blue-500 text-white px-2 py-1 rounded"
//                   >
//                     Start
//                   </button>
//                   <button
//                     onClick={() => updateStatus(r.id, "Completed")}
//                     className="bg-green-600 text-white px-2 py-1 rounded"
//                   >
//                     Complete
//                   </button>
//                   <button
//                     onClick={() => deleteRequest(r.id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//                 <td className="p-3">{r.date}</td>
//               </tr>
//             ))}
//             {requests.length === 0 && (
//               <tr>
//                 <td colSpan="8" className="p-4 text-gray-500 text-center">
//                   No requests found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default ServiceCenter
import { useEffect, useState } from "react";
import axios from 'axios'; // Axios ইম্পোর্ট করুন
import Swal from 'sweetalert2'; // ডিলিট কনফার্মেশনের জন্য

const ServiceCenterDashboard = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true); // লোডিং স্টেট

    // API URL (আপনার ব্যাকএন্ড অনুযায়ী পরিবর্তন করুন)
    const API_URL = "http://localhost:5000/api/requests";

    // --- নতুন লজিক: ব্যাকএন্ড থেকে ডেটা আনা (GET) ---
    const fetchRequests = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API_URL);
            setRequests(response.data); // ব্যাকএন্ড থেকে আসা ডেটা সেট করা
            setLoading(false);
        } catch (error) {
            console.error("Error fetching requests:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    // --- নতুন লজিক: স্ট্যাটাস আপডেট করা (PATCH) ---
    const updateStatus = async (id, newStatus) => {
        try {
            const response = await axios.patch(`${API_URL}/${id}`, { status: newStatus });
            if (response.status === 200) {
                // স্টেট আপডেট করা যেন পেজ রিলোড না করা লাগে
                setRequests(
                    requests.map((r) => (r._id === id ? { ...r, status: newStatus } : r)) // MongoDB তে 'id' থাকে '_id' নামে
                );
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    // --- নতুন লজিক: রিকোয়েস্ট ডিলিট করা (DELETE) ---
    const deleteRequest = (id) => {
        // Swal দিয়ে সুন্দর কনফার্মেশন বক্স
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`${API_URL}/${id}`);
                    if (response.status === 200) {
                        setRequests(requests.filter((r) => r._id !== id));
                        Swal.fire('Deleted!', 'Request has been deleted.', 'success');
                    }
                } catch (error) {
                    console.error("Error deleting request:", error);
                    Swal.fire('Error!', 'Could not delete the request.', 'error');
                }
            }
        });
    };

    // তারিখ ফরম্যাট করার ফাংশন
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Service Center Requests
            </h1>

            <div className="overflow-x-auto bg-white rounded-2xl shadow text-black">
                {loading ? (
                    <div className="text-center p-10 text-gray-600">Loading requests...</div>
                ) : (
                    <table className="w-full text-left">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-3">Index</th> {/* MongoDB '_id' অনেক বড় হয়, তাই ইনডেক্স দেখানো ভালো */}
                                <th className="p-3">Name</th>
                                <th className="p-3">Phone</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Problem Description</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Actions</th>
                                <th className="p-3">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((r, index) => (
                                <tr key={r._id} className="border-b">
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">{r.name}</td>
                                    <td className="p-3">{r.phone}</td>
                                    <td className="p-3">{r.location}</td>
                                    <td className="p-3">{r.problem}</td> {/* 'device' এবং 'description' এর বদলে শুধু 'problem' */}
                                    <td className="p-3">
                                        <span
                                            className={`px-2 py-1 rounded text-white text-sm ${r.status === "Pending"
                                                    ? "bg-yellow-500"
                                                    : r.status === "In Progress"
                                                        ? "bg-blue-500"
                                                        : "bg-green-600"
                                                }`}
                                        >
                                            {r.status}
                                        </span>
                                    </td>
                                    <td className="p-3 space-x-2 flex">
                                        <button
                                            onClick={() => updateStatus(r._id, "In Progress")}
                                            className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                                        >
                                            Start
                                        </button>
                                        <button
                                            onClick={() => updateStatus(r._id, "Completed")}
                                            className="bg-green-600 text-white px-2 py-1 rounded text-xs"
                                        >
                                            Complete
                                        </button>
                                        <button
                                            onClick={() => deleteRequest(r._id)}
                                            className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                    <td className="p-3 text-sm">{formatDate(r.date)}</td>
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
                )}
            </div>
        </div>
    )
}

export default ServiceCenterDashboard;