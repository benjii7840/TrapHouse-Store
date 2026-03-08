// src/pages/Cart.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { MdChevronRight } from "react-icons/md";
import { FaTrash, FaTag } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } =
    useCart();

  const subtotal = getCartTotal();
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white px-4 sm:px-8 lg:px-20 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-8 lg:px-20 py-6 border-b">
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <MdChevronRight />
          <span className="text-black">Cart</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-8 lg:px-20 py-8">
        <h1 className="text-3xl sm:text-4xl font-black mb-8">YOUR CART</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${item.size}-${item.color}-${index}`}
                className="border border-gray-200 rounded-2xl p-4 sm:p-6"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <button
                        onClick={() =>
                          removeFromCart(item.id, item.size, item.color)
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 mb-1">
                      Size: <span className="text-black">{item.size}</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      Color: <span className="text-black">{item.color}</span>
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">${item.price}</span>

                      {/* Quantity Controls */}
                      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.color,
                              item.quantity - 1,
                            )
                          }
                          className="text-lg font-bold hover:text-gray-600"
                        >
                          −
                        </button>
                        <span className="mx-4 font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.color,
                              item.quantity + 1,
                            )
                          }
                          className="text-lg font-bold hover:text-gray-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Discount (-20%)</span>
                  <span className="font-semibold">-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">${deliveryFee}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="flex gap-2 mb-6">
                <div className="flex-1 relative">
                  <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
                <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition font-semibold">
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2">
                Go to Checkout
                <MdChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
