import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col ">
        <div className="p-4 text-2xl font-bold text-center bg-gray-900">
          Admin Dashboard
        </div>
        <nav className="flex-1 px-4 py-8 space-y-4 ">
          <Link
            to="create-facility"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Create Facility
          </Link>
          <Link
            to={"all-booking"}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            All Booking List
          </Link>
          <Link
            to={"create-admin"}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Create Admin
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ">
        <div>
          <div className="w-full mx-auto bg-gradient-to-r from-[#a2c280] via-[#7487d0] to-[#4990e2] text-white p-10 text-center  rounded-md shadow-lg">
            <h2 className="text-2xl font-semibold text-white">Hello Mahadi</h2>
            <h3 className="text-4xl font-bold mb-4">
              Welcome <span className="text-[#f4e7d3]">To Admin Dashboard</span>
            </h3>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
