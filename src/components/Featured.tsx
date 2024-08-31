import React from "react";
import grass from "../assets/feature/pitches.jpg";
import pitch from "../assets/feature/pitch2.jpg";
import hall from "../assets/feature/hall.jpg";
import tennis from "../assets/feature/tennis-court.jpg";
import football from "../assets/feature/football.jpg";
import drama from "../assets/feature/drama.jpg";

const facilities = [
  {
    id: 1,
    name: "Grass Pitches",
    image: grass,
  },
  {
    id: 2,
    name: "All Weather Pitches",
    image: pitch,
  },
  {
    id: 3,
    name: "Sports Halls",
    image: hall,
  },
  {
    id: 4,
    name: "Tennis Courts",
    image: tennis,
  },
  {
    id: 5,
    name: "Football Stadium",
    image: football,
  },
  {
    id: 6,
    name: "Dance & Drama Studios",
    image: drama,
  },
];

const Featured: React.FC = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-serif font-semibold mt-10">
        Featured Facilities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-20">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-600 text-white text-center py-2">
              {facility.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
