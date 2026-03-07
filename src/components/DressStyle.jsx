import React from "react";

const DressStyle = () => {
  const styles = [
    {
      id: 1,
      name: "Casual",
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600",
      span: "col-span-1",
    },
    {
      id: 2,
      name: "Formal",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
      span: "col-span-1",
    },
    {
      id: 3,
      name: "Party",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
      span: "col-span-2",
    },
    {
      id: 4,
      name: "Gym",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600",
      span: "col-span-1",
    },
  ];
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-20 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="bg-white rounded-3xl py-8 sm:py-12 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center uppercase">
            Browse by dress style
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* Casual */}
          <div className="sm:col-span-1 lg:col-span-1 bg-white rounded-2xl sm:rounded-3xl overflow-hidden relative h-48 sm:h-64 lg:h-72 group cursor-pointer hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600"
              alt="Casual"
              className="absolute right-0 top-0 h-full w-3/5 sm:w-3/4 object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Casual
              </h3>
            </div>
          </div>

          {/* Formal */}
          <div className="sm:col-span-1 lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl overflow-hidden relative h-48 sm:h-64 lg:h-72 group cursor-pointer hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"
              alt="Formal"
              className="absolute right-0 top-0 h-full w-3/5 sm:w-2/3 object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Formal
              </h3>
            </div>
          </div>

          {/* Party */}
          <div className="sm:col-span-1 lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl overflow-hidden relative h-48 sm:h-64 lg:h-72 group cursor-pointer hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800"
              alt="Party"
              className="absolute right-0 top-0 h-full w-3/5 sm:w-2/3 object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Party
              </h3>
            </div>
          </div>

          {/* Gym */}
          <div className="sm:col-span-1 lg:col-span-1 bg-white rounded-2xl sm:rounded-3xl overflow-hidden relative h-48 sm:h-64 lg:h-72 group cursor-pointer hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600"
              alt="Gym"
              className="absolute right-0 top-0 h-full w-3/5 sm:w-3/4 object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Gym
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyle;
