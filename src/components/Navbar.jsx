import React from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="flex ml-10 gap-10 p-4">
      <Link to="/" className="uppercase font-bold font-silkscreen text-xl">
        TrapHouse.co
      </Link>
      <div className="flex">
        <ul>
          {/* Shop Dropdown */}
          <li className="relative group">
            <span className="flex items-center gap-1 cursor-pointer py-2">
              Shop <RiArrowDropDownLine />
            </span>

            {/* Dropdown Menu */}
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-40 top-full left-0 z-50">
              <li className="px-4 py-2 hover:bg-gray-100 transition">
                <Link to="/men" className="block">
                  Men
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 transition">
                <Link to="/women" className="block">
                  Women
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 transition">
                <Link to="/children" className="block">
                  Children
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="flex gap-3 ml-5">
          <li className="hover:text-orange-800 cursor-pointer">On Sale</li>
          <li className="hover:text-orange-800 cursor-pointer">New Arrivals</li>
          <Link to="/Brands" className="hover:text-orange-800">
            Brands
          </Link>
        </ul>
        <div className="relative ml-6">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
          <input
            type="text"
            placeholder="search for products..."
            className="px-10 py-1.5 w-96 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div className="flex gap-8 ml-20 items-center">
          {/* Cart Icon with Badge */}
          <Link
            to="/cart"
            className="relative cursor-pointer hover:text-orange-800 transition"
          >
            <IoCartOutline size={28} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
          <CgProfile
            size={28}
            className="cursor-pointer hover:text-orange-800 transition"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
