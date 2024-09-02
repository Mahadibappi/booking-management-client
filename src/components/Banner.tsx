import { Link } from "react-router-dom";
import banner from "../assets/sport5.jpg";
const Banner = () => {
  return (
    <div className="relative h-[600px] banner">
      <img
        src={banner}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className=" relative bg-gray-950 bg-opacity-70 h-[600px] ">
        <div className=" relative top-40 text-center ">
          <h2 className=" text-7xl text-slate-300 bg-clip-text  ">
            Build custom booking experiences
          </h2>
          <p className=" text-slate-300 text-clip text-2xl mt-6 px-2 ">
            It's time to simplify your sports facility booking. Easy for users
            to book, easy for you to manage.
            <br /> Online booking software trusted by over 3,000 sports
            facilities worldwide.
          </p>
          <Link
            to={"/booking"}
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-blue-500 rounded-lg group mt-16"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative font-semibold font-serif">Book Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
