import React from "react";
import image from "../assets/parner.png";

const Partner: React.FC = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-serif font-semibold mt-6 ">
        Our Partners
      </h2>
      <img src={image} alt="partner" />
    </div>
  );
};

export default Partner;
