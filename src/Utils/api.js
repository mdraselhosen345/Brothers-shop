import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // এখানে /api অবশ্যই থাকতে হবে
});

// প্রতিবার রিকোয়েস্ট পাঠানোর সময় অটোমেটিক টোকেন যোগ করার জন্য
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.authorization = `Bearer ${token}`; // Bearer ফরম্যাট নিশ্চিত করা
  }
  return req;
});

export default API;