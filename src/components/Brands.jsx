import React from "react";

const Brands = () => {
  return (
    <section className="bg-black p-4 flex gap-8 items-center justify-center">
      <div className="flex gap-6 text-white text-center">
        <h2 className="text-3xl uppercase">Versace</h2>
        <h2 className="text-3xl font-bold">ZARA</h2>
        <h2 className="text-3xl font-bold">GUCCI</h2>
        <h2 className="text-3xl">
          PR<span className="font-bold">A</span>D
          <span className="font-bold">A</span>
        </h2>
        <h2 className="text-3xl ">Calvin Klein</h2>
      </div>
    </section>
  );
};

export default Brands;
