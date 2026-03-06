import React from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="flex ml-10 gap-10 p-4">
      <Link to="/" className="uppercase font-bold font-silkscreen text-xl">
        TrapHouse.co
      </Link>
      <div className="flex">
        <ul>
          {/* Shop Dropdown - group makes hover work */}
          <li className="relative group">
            <span className="flex items-center gap-1 cursor-pointer">
              Shop <RiArrowDropDownLine />
            </span>

            {/* Dropdown Menu - hidden by default, shows on hover */}
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-40">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/men">Men</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/women">Women</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/children">Children</Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="flex  gap-3 ml-5 hover:cursor-pointer ">
          <li className="hover:text-orange-800">On Sale</li>
          <li className="hover:text-orange-800">New Arrivals</li>
          <li className="hover:text-orange-800">Brands</li>
        </ul>
        <div className="relative ml-6">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />

          <input
            type="text"
            placeholder="search for products..."
            className="px-10 py-1.5 w-96 rounded-full bg-gray-200"
          />
        </div>
        <div className="flex gap-8 ml-20 p-auto ">
          <IoCartOutline size={28} />
          <CgProfile size={28} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
