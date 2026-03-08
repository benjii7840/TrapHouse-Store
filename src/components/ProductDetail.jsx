// src/pages/ProductDetail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar, FaCheck } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const ProductDetail = () => {
  const { id } = useParams();

  // State
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  // Product data (in real app, fetch from API using id)
  const product = {
    id: 1,
    name: "ONE LIFE GRAPHIC T-SHIRT",
    price: 260,
    originalPrice: 300,
    discount: 40,
    rating: 4.5,
    reviews: 5,
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
    ],
    colors: [
      { name: "Olive Green", hex: "#5A5F4D" },
      { name: "Dark Green", hex: "#2D4A3E" },
      { name: "Navy Blue", hex: "#1E2A3A" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  };

  // Functions
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

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-8 lg:px-20 py-6">
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <MdChevronRight />
          <Link to="/shop" className="hover:text-black">
            Shop
          </Link>
          <MdChevronRight />
          <Link to="/men" className="hover:text-black">
            Men
          </Link>
          <MdChevronRight />
          <span className="text-black">T-shirts</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="px-4 sm:px-8 lg:px-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Images */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition ${
                    selectedImage === index
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div>
            {/* Product Name */}
            <h1 className="text-3xl sm:text-4xl font-black mb-4 uppercase">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">{renderStars(product.rating)}</div>
              <span className="text-sm text-gray-600">{product.rating}/5</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              <span className="text-3xl text-gray-400 line-through">
                ${product.originalPrice}
              </span>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                -{product.discount}%
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-6"></div>

            {/* Select Colors */}
            <div className="mb-6">
              <p className="text-gray-600 mb-3">Select Colors</p>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-10 h-10 rounded-full relative transition ${
                      selectedColor === index
                        ? "ring-2 ring-offset-2 ring-gray-800"
                        : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor === index && (
                      <FaCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-6"></div>

            {/* Choose Size */}
            <div className="mb-8">
              <p className="text-gray-600 mb-3">Choose Size</p>
              <div className="flex gap-3 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full font-medium transition ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-8"></div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center bg-gray-100 rounded-full px-6 py-3">
                <button
                  onClick={decrementQuantity}
                  className="text-xl font-bold hover:text-gray-600"
                >
                  −
                </button>
                <span className="mx-6 font-semibold">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="text-xl font-bold hover:text-gray-600"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="flex-1 bg-black text-white font-semibold py-3 rounded-full hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
