import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Star from "../assets/star.svg";
import Vector from "../assets/vector.svg";
import { useAuthStore } from "../store/authStore";

function Navbar() {
  const { login, signup } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#1E1E1E] w-full px-4 md:px-20 py-2 font-bold flex md:flex-row items-center justify-between relative text-white">
      <div className="flex justify-start">
        <div className="logo relative w-24 h-24 flex items-center">
          <img src={Logo} alt="logo" className="w-full h-full" />
          <img
            src={Vector}
            alt="vector"
            className="absolute inset-0 w-11/12 h-11/12 object-contain"
          />
          <img
            src={Star}
            alt="star"
            className="absolute bottom-3 left-0 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="flex justify-center ">
        <nav className="hidden lg:flex gap-6 items-center">
          <Link
            to="/"
            className="relative py-2 border-b-2 border-transparent hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-sm"
          >
            Home
          </Link>
          <Link
            to="/"
            className="relative py-2 border-b-2 border-transparent hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-sm"
          >
            Investor
          </Link>
          <Link
            to="/"
            className="relative py-2 border-b-2 border-transparent hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-sm"
          >
            Products
          </Link>
          <Link
            to="/"
            className="relative py-2 border-b-2 border-transparent hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-sm"
          >
            Roadmap
          </Link>
          <Link
            to="/about"
            className="relative py-2 border-b-2 border-transparent hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-sm"
          >
            About
          </Link>
          <Link
            to="/"
            className="relative py-2 border-b-2 border-transparent hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-sm"
          >
            Support
          </Link>
        </nav>
      </div>

      <div className="flex justify-end items-center gap-2">
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={login}
            className="px-8 py-2 rounded-sm bg-[#00A3FF] transition hover:scale-105 hover:cursor-pointer"
          >
            Log In
          </button>
          <button
            onClick={signup}
            className="px-8 py-2 rounded-sm bg-[#202E48] transition hover:scale-105 hover:cursor-pointer"
          >
            Sign Up
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center gap-1 w-6 h-6 focus:outline-none"
          >
            <span
              className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 w-12/12 absolute top-1/1 m-auto px-3 left-0 right-0 text-center z-50 bg-[#1E1E1E] ${
          isOpen ? "h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-2 text-white">
          <Link
            to="/"
            className="pb-2 border-b-2 border-transparent hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-sm"
          >
            Home
          </Link>
          <Link
            to="/"
            className="pb-2 border-b-2 border-transparent hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-sm"
          >
            Investor
          </Link>
          <Link
            to="/"
            className="pb-2 border-b-2 border-transparent hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-sm"
          >
            Products
          </Link>
          <Link
            to="/"
            className="pb-2 border-b-2 border-transparent hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-sm"
          >
            Roadmap
          </Link>
          <Link
            to="/about"
            className="pb-2 border-b-2 border-transparent hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-sm"
          >
            About
          </Link>
          <Link
            to="/"
            className="pb-2 border-b-2 border-transparent hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-sm"
          >
            Support
          </Link>

          <div className="flex flex-col gap-2 mt-2">
            <button
              onClick={login}
              className="px-4 py-2 rounded-sm bg-[#00A3FF] transition hover:scale-105 hover:cursor-pointer"
            >
              Log In
            </button>
            <button
              onClick={signup}
              className="px-4 py-2 rounded-sm bg-[#202E48] transition hover:scale-105 hover:cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
