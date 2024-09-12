import React, { ChangeEvent, FormEvent, useState } from "react";
import { useCreateFacilityMutation } from "../redux/features/facility/FacilityApi";
import { toast } from "sonner";

import { TFacilityData } from "../types/Types";

const CreateFacility: React.FC = () => {
  const [facilityData, setFacilityData] = useState<TFacilityData>({
    name: "",
    description: "",
    pricePerHour: "",
    location: "",
    image: null,
  });
  const [create] = useCreateFacilityMutation();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFacilityData((prevData) => ({
      ...prevData,
      [name]: name === "pricePerHour" ? Number(value) : value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFacilityData((prevData) => ({
        ...prevData,
        image: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", facilityData.name);
    formData.append("description", facilityData.description);
    formData.append("pricePerHour", facilityData.pricePerHour.toString());
    formData.append("location", facilityData.location);
    if (facilityData.image) {
      formData.append("image", facilityData.image);
    }
    try {
      await create(formData);
      // toast.success("Facility Created Successfully", {
      //   duration: 2000,
      //   position: "bottom-right",
      // });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Create Facility
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Facility Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={facilityData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter facility name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={facilityData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter facility description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="pricePerHour"
          >
            Price Per Hour ($)
          </label>
          <input
            type="number"
            id="pricePerHour"
            name="pricePerHour"
            value={facilityData.pricePerHour}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter price per hour"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={facilityData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter facility location"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="image"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Create Facility
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateFacility;
