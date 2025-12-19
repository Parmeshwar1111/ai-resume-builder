import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { UserContext } from "../context/UserContext";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleProtectedRoute = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/generate-resume");
    }
  };

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-base-100 shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          AI Resume Builder
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-medium hover:text-primary transition ${
                  isActive ? "text-primary" : "text-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* 🔥 PROTECTED "Generate Resume" Button */}
          <button
            onClick={handleProtectedRoute}
            className="btn btn-secondary rounded-full px-5"
          >
            Generate Resume
          </button>

          {/* User OR Login */}
          {!user ? (
            <Link to="/login" className="btn btn-primary rounded-full px-5">
              Login
            </Link>
          ) : (
            <Popover>
              <PopoverTrigger>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  className="h-10 w-10 rounded-full cursor-pointer transition-all duration-300 hover:ring-2 hover:scale-110 ring-primary"
                />
              </PopoverTrigger>

              <PopoverContent className="w-48 mt-2 absolute right-0 top-full bg-base-100 shadow-xl rounded-lg p-3 z-50">
                <div className="flex flex-col gap-3">
                  <div className="font-bold text-center bg-base-200 p-2 rounded-md">
                    {user.name}
                  </div>

                  <Link
                    to="/profile"
                    className="bg-blue-200 hover:bg-blue-300 p-2 rounded-md text-center"
                  >
                    Change Profile
                  </Link>

                  <button
                    onClick={logout}
                    className="bg-red-200 hover:bg-red-400 p-2 rounded-md text-center text-black"
                  >
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-primary"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-base-100 px-6 pb-6 space-y-4 shadow-lg"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="block font-medium text-gray-700 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          {/* PROTECTED - mobile version */}
          <button
            onClick={() => {
              setOpen(false);
              handleProtectedRoute();
            }}
            className="btn btn-secondary w-full rounded-full"
          >
            Generate Resume
          </button>

          {!user ? (
            <Link
              to="/login"
              className="btn btn-primary w-full rounded-full"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          ) : (
            <button
              onClick={logout}
              className="btn btn-error w-full rounded-full"
            >
              Logout
            </button>
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
