import React from "react";
import logo from "../assets/lont-gray-logo.png";
import { Info, Facebook, Instagram } from "react-feather";
import NavItem from "./NavItem";
import { NavLink, Link } from "react-router-dom";

const navlinks = [
  { title: "Home", path: "/", alwaysShow: true },
  { title: "Products", path: "/products", alwaysShow: true },
  { title: "About", path: "/about", alwaysShow: false },
];

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center px-4 py-8">
      <Link to="/">
        <img src={logo} alt="logo" className="w-16 sm:w-20 lg:w-24" />
      </Link>
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-11 items-center justify-center  ">
          {navlinks.map((link) => (
            <NavItem link={link} key={link.title} />
          ))}
        </ul>
        {/* info Button */}
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-amber-500" : "text-gray-500 opacity-60"
          }
          to="/about"
        >
          {" "}
          <Info className=" sm:hidden" />{" "}
        </NavLink>
      </div>

      {/* social media icons */}
      <div className="sm:flex hidden space-x-4">
        <Facebook className="text-gray-700 opacity-60 hover:opacity-80 transition-all duration-200 hover:cursor-pointer" />
        <Instagram className="text-gray-700 opacity-60 hover:opacity-80 transition-all hover:cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
