import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllFacilitiesQuery } from "../redux/features/facility/FacilityApi";

const FacilityList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState<number | null>(null);

  // Fetch facilities from the API
  const {
    data: facilities = [],
    isLoading,
    error,
  } = useGetAllFacilitiesQuery(undefined);

  const filteredFacilities = facilities?.data?.filter((facility: any) => {
    const matchesSearchQuery = facility.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = priceFilter
      ? facility.pricePerHour <= priceFilter
      : true;
    return matchesSearchQuery && matchesFilter;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading facilities</p>;
  }

  return (
    <div>
      <h2 className="text-center text-3xl font-serif font-semibold mt-10">
        Available Facilities
      </h2>

      {/* Search and Filter Section */}
      <div className="flex justify-center gap-4 mt-6">
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="select select-bordered w-full max-w-xs"
          value={priceFilter || ""}
          onChange={(e) =>
            setPriceFilter(e.target.value ? parseInt(e.target.value) : null)
          }
        >
          <option value="">Filter by Price</option>
          <option value="550">Under $550</option>
          <option value="1000">Under $1000</option>
          <option value="600">Under $600</option>
        </select>
      </div>

      <div className="p-20">
        <div className="flex justify-center items-center sm:flex-col md:flex-wrap lg:flex-row gap-4 ">
          {filteredFacilities?.map((facility: any) => (
            <div
              key={facility._id}
              className="card bg-base-100 image-full w-96 shadow-xl "
            >
              <figure>
                <img src={facility.image} alt={facility.title} />
              </figure>
              <div className="card-body flex items-center">
                <h2 className="card-title">{facility.name}</h2>
                <p>{facility.pricePerHour} $ per hour</p>
                <div className="card-actions justify-center">
                  <Link to={`/facility/${facility._id}`}>
                    <button className="btn btn-primary">View Detail</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilityList;
