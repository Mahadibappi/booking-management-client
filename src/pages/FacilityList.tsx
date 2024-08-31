import React, { useState } from "react";

interface Facility {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

const facilities: Facility[] = [
  {
    id: 1,
    title: "Name : Tennis Court",
    price: 70,
    imageUrl:
      "https://img.freepik.com/free-photo/sideways-tennis-racket-ball_23-2148218672.jpg?t=st=1725080122~exp=1725083722~hmac=d082d009516ee9d414a77444f958af1fd5b938d52dd0523aa9a6bbe23042d2f0&w=1380",
  },
  {
    id: 2,
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    id: 3,
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    id: 4,
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
];

const FacilityList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState<number | null>(null);

  const filteredFacilities = facilities.filter((facility) => {
    const matchesSearchQuery = facility.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = priceFilter ? facility.price <= priceFilter : true;
    return matchesSearchQuery && matchesFilter;
  });
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
          <option value="50">Under $50</option>
          <option value="100">Under $100</option>
          <option value="200">Under $200</option>
        </select>
      </div>

      <div className="p-20">
        <div className="flex justify-center items-center sm:flex-col md:flex-wrap lg:flex-row gap-4 ">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="card bg-base-100 image-full w-96 shadow-xl "
            >
              <figure>
                <img src={facility.imageUrl} alt={facility.title} />
              </figure>
              <div className="card-body flex items-center">
                <h2 className="card-title">{facility.title}</h2>
                <p>{facility.price} $ per hour</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">View Detail</button>
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
