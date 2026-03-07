import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-black rounded-3xl p-8 sm:p-12 mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="text-white text-xl sm:text-4xl lg:text-5xl font-black uppercase max-w-xl">
            Stay upto date about our latest offers
          </h2>

          <div className="w-full lg:w-auto flex flex-col gap-4 min-w-[350px]">
            {/* Email Input */}
            <div className="relative">
              <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Subscribe Button */}
            <button className="w-full bg-white text-black font-semibold py-3 rounded-full hover:bg-gray-100 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-black mb-4">TrapHouse.co</h3>
            <p className="text-gray-600 text-sm mb-6">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                <FaXTwitter className="text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                <FaInstagram className="text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                <FaGithub className="text-black" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">
              Help
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ Column */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">
              FAQ
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Payments
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            TrapHouse.co © 2025-2026, All Rights Reserved
          </p>

          {/* Payment Icons */}
          <div className="flex gap-3">
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
                className="h-4"
              />
            </div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-4"
              />
            </div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-4"
              />
            </div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg"
                alt="Apple Pay"
                className="h-4"
              />
            </div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                alt="Google Pay"
                className="h-4"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
