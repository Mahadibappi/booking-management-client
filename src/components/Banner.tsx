import banner from "../assets/sport5.jpg";
const Banner = () => {
  return (
    <div className="relative h-[600px]">
      <img
        src={banner}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className=" relative bg-gray-950 bg-opacity-70 h-[600px]">
        <div className=" relative top-40 text-center ">
          <h2 className=" text-5xl text-slate-300 bg-clip-text  ">
            The best products for your landscape
          </h2>
          <div className="mt-12">
            <a
              href="#_"
              className="relative rounded px-5 py-3 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>

              <span className="relative text-xl">Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
