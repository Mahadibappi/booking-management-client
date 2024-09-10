import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useGetAllFacilitiesQuery } from "../redux/features/facility/FacilityApi";
import { useCreateBookingMutation } from "../redux/features/booking/bookingApi";
import { toast } from "sonner";

const Booking = () => {
  // State to manage selected facility and booking details
  const [selectedFacility, setSelectedFacility] = useState("");
  const [facilityDetails, setFacilityDetails] = useState({
    name: "",
    payableAmount: "",
  });
  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    startTime: "",
    endTime: "",
  });
  const { data: facilities = [] } = useGetAllFacilitiesQuery(undefined);
  const [createBooking] = useCreateBookingMutation();

  // Update facility details when a facility is selected
  useEffect(() => {
    if (selectedFacility) {
      const facility = facilities?.data?.find(
        (f) => f.name === selectedFacility
      );
      if (facility) {
        setFacilityDetails({
          name: facility.name,
          payableAmount: facility.pricePerHour,
        });
      }
    }
  }, [selectedFacility, facilities]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Function to submit the booking data
  const handleSubmit = async () => {
    const bookingData = {
      ...bookingDetails,
      name: facilityDetails.name,
      payableAmount: facilityDetails.payableAmount,
    };

    try {
      await createBooking(bookingData).unwrap();
      toast.success("Booking Confirmed", { duration: 1000 });
    } catch (error) {
      console.error("Failed to create booking", error);
    }
  };

  return (
    <div className="container mx-auto p-20">
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
          {facilities?.data?.map((facility) => (
            <option key={facility._id} value={facility.name}>
              {facility.name}
            </option>
          ))}
        </select>
        {selectedFacility && (
          <p className="text-sm my-2">
            <span className="font-semibold">Description: </span>
            {
              facilities?.data?.find((f) => f.name === selectedFacility)
                ?.description
            }
            <p className="mt-2">
              <span className="font-semibold">Price Per Hour: </span>
              {facilityDetails.payableAmount}
            </p>
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
            02:00 - 13:00
          </div>
          <div className="bg-gray-600 text-white p-4 text-center rounded">
            15:00 - 23:59
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

      {/* Confirm Booking and Proceed to Pay */}
      <button
        className="w-full p-4 bg-gray-600 text-white rounded"
        onClick={handleSubmit}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;
