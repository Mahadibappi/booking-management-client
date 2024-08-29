import React from "react";
import grass from "../assets/feature/pitches.jpg";
import pitch from "../assets/feature/pitch2.jpg";
import hall from "../assets/feature/hall.jpg";
import tennis from "../assets/feature/tennis-court.jpg";
import football from "../assets/feature/football.jpg";
import drama from "../assets/feature/drama.jpg";
const Featured: React.FC = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-serif font-semibold mt-10">
        Featured Facilities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-20">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={grass}
            alt="Grass Pitches"
            className="w-full h-48 object-cover"
          />
          <div className="bg-blue-600 text-white text-center py-2">
            Grass Pitches
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={pitch}
            alt="All Weather Pitches"
            className="w-full h-48 object-cover"
          />
          <div className="bg-blue-600 text-white text-center py-2">
            All Weather Pitches
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={hall}
            alt="Sports Halls"
            className="w-full h-48 object-cover"
          />
          <div className="bg-blue-600 text-white text-center py-2">
            Sports Halls
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={tennis}
            alt="Tennis Courts"
            className="w-full h-48 object-cover"
          />
          <div className="bg-blue-600 text-white text-center py-2">
            Tennis Courts
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={football}
            alt="football"
            className="w-full h-48 object-cover"
          />
          <div className="bg-blue-600 text-white text-center py-2">
            Football Stadium
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={drama}
            alt="Dance & Drama Studios"
            className="w-full h-48 object-cover"
          />
          <div className="bg-blue-600 text-white text-center py-2">
            Dance & Drama Studios
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
