import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          About Our Sports Booking System
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to our Sports Booking System, your go-to platform for easily
            booking sports facilities. Our system is designed to offer a
            seamless experience for users looking to reserve spaces for their
            favorite sports activities.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Features:
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li className="mb-2">
              <strong>Facility-Based Booking:</strong> Choose from a wide range
              of facilities tailored to meet your sporting needs.
            </li>
            <li className="mb-2">
              <strong>User Profile Creation:</strong> Easily create and manage
              your profile to keep track of your bookings and preferences.
            </li>
            <li className="mb-2">
              <strong>User Dashboard:</strong> Access your personalized
              dashboard to view upcoming bookings, manage reservations, and
              more.
            </li>
            <li className="mb-2">
              <strong>Admin Dashboard:</strong> Admins have full control over
              facility management, user oversight, and booking details.
            </li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our system is built with a user-centric approach, ensuring that
            booking your favorite sports facility is just a few clicks away.
            Whether you're a casual player or a professional, our platform is
            designed to cater to all your sports booking needs.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            We are committed to providing a hassle-free experience, empowering
            you to focus on what matters most—enjoying your game!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
