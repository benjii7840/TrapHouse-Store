// src/components/Products.jsx
import React from "react";
import { products } from "../Data/productsData.js";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Products = () => {
  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          NEW ARRIVALS
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div>
                {/* Product Name */}
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating}/5
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">${product.price}</span>

                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="text-xs text-red-500 bg-red-100 px-2 py-1 rounded-full">
                        -{product.discount}%
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-gray-200 px-12 py-3 rounded-full hover:bg-gray-100 transition font-semibold">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
