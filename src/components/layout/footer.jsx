import React from "react";
import "../../assets/css/layout_css/footer.css";
import logo from "../../assets/images/logo1.png";
import { ArrowUp } from "lucide-react";
const Footer = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-black/80 via-[#ff6600c9] to-black/80 py-10">
        <div className="container mx-auto px-6 md:px-20 text-white">
          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:justify-between gap-6 text-sm md:text-base mb-10">
            <li className="hover:text-[#ffcc99] cursor-pointer transition">
              Features
            </li>
            <li className="hover:text-[#ffcc99] cursor-pointer transition">
              Use Cases
            </li>
            <li className="hover:text-[#ffcc99] cursor-pointer transition">
              Pricing
            </li>
            <li className="hover:text-[#ffcc99] cursor-pointer transition">
              Contact
            </li>
            <li className="hover:text-[#ffcc99] cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-[#ffcc99] cursor-pointer transition">
              Blog
            </li>
          </ul>

          {/* Logo & Title */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Path AI Logo"
                className="w-14 h-14 rounded-xl"
              />
              <h1 className="text-4xl md:text-6xl font-bold">PATH AI</h1>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-[#ff6600c9] transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
              Back to Top
            </button>
            {/* Footer Text */}
            <p className="text-sm text-gray-200 text-center md:text-right">
              © {new Date().getFullYear()} Path AI. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
