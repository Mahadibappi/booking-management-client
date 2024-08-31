import { useState } from "react";
import { Link } from "react-router-dom";

const Booking = () => {
  // State to manage form data and selected facility
  const [selectedFacility, setSelectedFacility] = useState("");
  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    startTime: "",
    endTime: "",
  });

  // Example facilities data
  const facilities = [
    { id: 1, name: "Facility A", details: "Description of Facility A" },
    { id: 2, name: "Facility B", details: "Description of Facility B" },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-20">
      {/* Booking Page Title */}
      <h1 className="text-2xl font-bold mb-6">Booking Page</h1>

      {/* Facility Selection */}
      <div className="border-dotted border-2 p-4 mb-4">
        <label htmlFor="facility" className="block text-lg font-bold mb-2">
          Facility Name
        </label>
        <select
          id="facility"
          name="facility"
          value={selectedFacility}
          onChange={(e) => setSelectedFacility(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="">Select a facility</option>
          {facilities.map((facility) => (
            <option key={facility.id} value={facility.name}>
              {facility.name}
            </option>
          ))}
        </select>
        {selectedFacility && (
          <p className="text-sm">
            {facilities.find((f) => f.name === selectedFacility)?.details}
          </p>
        )}
      </div>

      {/* Date Selection */}
      <div className="flex items-center mb-6">
        <input
          type="date"
          name="date"
          id="date"
          value={bookingDetails.date}
          onChange={handleInputChange}
          className="flex-1 p-2 border border-black rounded bg-gray-600 text-white"
        />
        <button className="ml-2 p-2 bg-gray-900 text-white rounded">
          Check Availability
        </button>
      </div>

      {/* Available Slots */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Available Slots</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className=" bg-gray-600 text-white p-4 text-center rounded">
            02.00 - 13.00
          </div>
          <div className="bg-gray-600 text-white p-4 text-center rounded">
            15.00 - 23.59
          </div>
        </div>
      </div>

      {/* Start and End Time Selection */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label
            htmlFor="startTime"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Start Time
          </label>
          <input
            type="time"
            name="startTime"
            id="startTime"
            value={bookingDetails.startTime}
            onChange={handleInputChange}
            className="w-full p-2 border border-black rounded bg-gray-600 text-white text-center"
          />
        </div>
        <div>
          <label
            htmlFor="endTime"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            End Time
          </label>
          <input
            type="time"
            name="endTime"
            id="endTime"
            value={bookingDetails.endTime}
            onChange={handleInputChange}
            className="w-full p-2 border border-black rounded bg-gray-600 text-white text-center"
          />
        </div>
      </div>

      {/* Proceed to Pay Button */}

      <Link to={"/payment"}>
        <button className="w-full p-4 bg-gray-600 text-white rounded">
          Proceed to Pay
        </button>
      </Link>
    </div>
  );
};

export default Booking;
