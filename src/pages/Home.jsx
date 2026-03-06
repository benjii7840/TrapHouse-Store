import React from "react";

const Home = () => {
  return (
    <section className="bg-[#F2F0F1] w-full min-h-screen">
      {/* Main flex container - content left, image right */}
      <div className="flex justify-between items-center">
        {/* Left side - Text content */}
        <div className="flex-1">
          <h1 className="uppercase font-bold text-4xl p-4 ml-20">
            Find clothes
            <br /> that matches
            <br /> your style
          </h1>
          <p className="p-4 ml-20 text-sm">
            Browse through your diverse range of meticulously crafted garments
            designed, to bring out your individuality and cater to your sense of
            style
          </p>
          <button className="rounded-full ml-20 text-white bg-black px-8 py-3 m-4 hover:cursor-pointer hover:text-red-500">
            Shop Now
          </button>

          {/* Stats */}
          <div className="flex items-center gap-8 p-4 ml-20">
            <div>
              <h2 className="font-bold text-2xl">200+</h2>
              <p className="text-sm">International Brands</p>
            </div>

            <div className="w-px h-12 bg-gray-400"></div>

            <div>
              <h2 className="font-bold text-2xl">2,000+</h2>
              <p className="text-sm">High-Quality Products</p>
            </div>

            <div className="w-px h-12 bg-gray-400"></div>

            <div>
              <h2 className="font-bold text-2xl">30,000+</h2>
              <p className="text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1">
          <img
            src="./assets/models.png"
            alt="model-image"
            className="w-110 h-full object-cover ml-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
