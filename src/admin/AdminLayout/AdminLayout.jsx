import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen mt-26">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5 space-y-4">
        <h2 className="text-2xl font-bold mb-6 text-[#F54927]">Admin Panel</h2>
        <Link to="/admin/dashboard">Dashboard</Link><br /> 
        <Link to="/admin/products">Products</Link><br />
        <Link to="/admin/add-product">Add Electronic Accessories</Link><br />
        <Link to="/admin/add-modancard">Add Modan Accessories</Link><br />
        <Link to="/admin/orders">Orders</Link> <br />
        <Link to="/admin/authcheck">Auth Check</Link>

        {/* home service  */}
         <h2 className="text-xl font-bold mb-6 text-[#F54927]"> home Service Admin</h2>
        <Link to="/admin/Computer">Computer Service</Link>
        <Link to="/admin/Electrical">Electrical Service</Link><br />
        <Link to="/admin/CCTV">CCTV Service</Link> <br />
        <Link to="/admin/GLASS">GLASS Service</Link><br />
        <Link to="/admin/Pulmbing">Pulmbing Service</Link><br />
         {/* home service  */}
         <h2 className="text-xl font-bold mb-6 text-[#F54927]">Service Center Admin</h2>
          <Link to="/admin/ServiceCenter">Service Center</Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;