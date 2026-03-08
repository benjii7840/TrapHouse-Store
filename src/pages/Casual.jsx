// src/pages/Casual.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdChevronRight, MdFilterList } from "react-icons/md";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Casual = () => {
  // State for filters
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedStyle, setSelectedStyle] = useState("Casual");
  const [showCategories, setShowCategories] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showColors, setShowColors] = useState(true);
  const [showSize, setShowSize] = useState(true);
  const [showDressStyle, setShowDressStyle] = useState(true);

  // Product data (you can move this to a separate file)
  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      price: 145,
      originalPrice: null,
      discount: null,
      rating: 3.5,
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      image:
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500",
      price: 180,
      originalPrice: null,
      discount: null,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
      price: 120,
      originalPrice: 150,
      discount: 30,
      rating: 5.0,
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
      price: 240,
      originalPrice: 260,
      discount: 20,
      rating: 3.5,
    },
    {
      id: 5,
      name: "Checkered Shirt",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
      price: 180,
      originalPrice: null,
      discount: null,
      rating: 4.5,
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
      price: 130,
      originalPrice: 160,
      discount: 30,
      rating: 4.5,
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
      price: 212,
      originalPrice: 232,
      discount: 20,
      rating: 5.0,
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
      price: 145,
      originalPrice: null,
      discount: null,
      rating: 4.0,
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
      price: 80,
      originalPrice: null,
      discount: null,
      rating: 3.0,
    },
  ];

  const colors = [
    { name: "Green", hex: "#4CAF50" },
    { name: "Red", hex: "#F44336" },
    { name: "Yellow", hex: "#FFEB3B" },
    { name: "Orange", hex: "#FF9800" },
    { name: "Light Blue", hex: "#03A9F4" },
    { name: "Blue", hex: "#2196F3" },
    { name: "Purple", hex: "#9C27B0" },
    { name: "Pink", hex: "#E91E63" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#000000" },
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const dressStyles = ["Casual", "Formal", "Party", "Gym"];

  // Render stars function
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }
    return stars;
  };

  const toggleColor = (colorHex) => {
    if (selectedColors.includes(colorHex)) {
      setSelectedColors(selectedColors.filter((c) => c !== colorHex));
    } else {
      setSelectedColors([...selectedColors, colorHex]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-8 lg:px-20 py-6 border-b">
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <MdChevronRight />
          <span className="text-black">Casual</span>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-2xl p-6">
              {/* Filters Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Filters</h3>
                <MdFilterList className="text-gray-400" size={24} />
              </div>

              {/* Categories */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="flex justify-between items-center w-full mb-4"
                >
                  <span className="text-gray-600">Categories</span>
                  {showCategories ? <IoChevronUp /> : <IoChevronDown />}
                </button>
                {showCategories && (
                  <ul className="space-y-3">
                    {categories.map((category) => (
                      <li
                        key={category}
                        className="flex justify-between items-center text-gray-600 hover:text-black cursor-pointer"
                      >
                        <span>{category}</span>
                        <MdChevronRight />
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Price */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <button
                  onClick={() => setShowPrice(!showPrice)}
                  className="flex justify-between items-center w-full mb-4"
                >
                  <span className="text-gray-600">Price</span>
                  {showPrice ? <IoChevronUp /> : <IoChevronDown />}
                </button>
                {showPrice && (
                  <div>
                    <input
                      type="range"
                      min="50"
                      max="200"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([50, parseInt(e.target.value)])
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm mt-2">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Colors */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <button
                  onClick={() => setShowColors(!showColors)}
                  className="flex justify-between items-center w-full mb-4"
                >
                  <span className="text-gray-600">Colors</span>
                  {showColors ? <IoChevronUp /> : <IoChevronDown />}
                </button>
                {showColors && (
                  <div className="grid grid-cols-5 gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.hex}
                        onClick={() => toggleColor(color.hex)}
                        className={`w-10 h-10 rounded-full border-2 ${
                          selectedColors.includes(color.hex)
                            ? "border-black ring-2 ring-offset-2 ring-black"
                            : "border-gray-200"
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Size */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <button
                  onClick={() => setShowSize(!showSize)}
                  className="flex justify-between items-center w-full mb-4"
                >
                  <span className="text-gray-600">Size</span>
                  {showSize ? <IoChevronUp /> : <IoChevronDown />}
                </button>
                {showSize && (
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-2 rounded-full text-sm ${
                          selectedSize === size
                            ? "bg-black text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dress Style */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <button
                  onClick={() => setShowDressStyle(!showDressStyle)}
                  className="flex justify-between items-center w-full mb-4"
                >
                  <span className="text-gray-600">Dress Style</span>
                  {showDressStyle ? <IoChevronUp /> : <IoChevronDown />}
                </button>
                {showDressStyle && (
                  <ul className="space-y-3">
                    {dressStyles.map((style) => (
                      <li
                        key={style}
                        onClick={() => setSelectedStyle(style)}
                        className="flex justify-between items-center text-gray-600 hover:text-black cursor-pointer"
                      >
                        <span>{style}</span>
                        <MdChevronRight />
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Apply Filter Button */}
              <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                Apply Filter
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Casual</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Showing 1-10 of 100 Products</span>
                <span className="ml-4">Sort by:</span>
                <select className="border border-gray-200 rounded-lg px-3 py-2">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="group"
                >
                  <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating}/5
                    </span>
                  </div>
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
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-100">
                <span>← Previous</span>
              </button>
              <div className="flex gap-2">
                {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-lg ${
                      page === 1
                        ? "bg-black text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-100">
                <span>Next →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casual;
