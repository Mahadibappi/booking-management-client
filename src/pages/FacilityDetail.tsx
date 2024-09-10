import React from "react";
import { useParams } from "react-router-dom";
import { useGetFacilityByIdQuery } from "../redux/features/facility/FacilityApi";

const FacilityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch facility details using the id
  const { data: facility, isLoading, error } = useGetFacilityByIdQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading facility details</p>;
    console.log(error);
  }

  if (!facility) {
    return <div>Facility not found</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          {facility.data.name}
        </h1>
        <img
          src={facility.data.image}
          alt={facility.data.name}
          className="mb-6 w-full h-auto rounded-lg object-cover"
        />
        <p className="text-lg mb-4 text-gray-600">
          <span className="font-semibold">Description:</span>{" "}
          {facility.data.description}
        </p>
        <p className="text-lg mb-4 text-gray-600">
          <span className="font-semibold">Price:</span>{" "}
          {facility.data.pricePerHour} $ per hour
        </p>
        <p className="text-lg mb-4 text-gray-600">
          <span className="font-semibold">Location:</span>{" "}
          {facility.data.location}
        </p>
      </div>
    </div>
  );
};

export default FacilityDetail;
