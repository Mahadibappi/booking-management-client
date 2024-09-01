import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold text-center bg-gray-900">
          Admin Dashboard
        </div>
        <nav className="flex-1 px-4 py-8 space-y-4">
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
      <div className="flex-1 p-8">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
