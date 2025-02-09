import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full px-4 py-2 flex h-[60px] items-center justify-between bg-blue-200">
      
      
      
      
      
      
      
  



      <div className="mr-auto ml-7">
        <a href="/" className="ml-auto hover:opacity-60  ">
          <img src="/owl.svg" alt="Owl" className="h-12 w-12 rounded-md" />
        </a>
      </div>
      
      <div className="flex gap-7 ml-auto mr-7">
        <NavLink to="/about" className="hover:opacity-60 font-bold text-lg">About Us</NavLink>
        <NavLink to="/classes" className="hover:opacity-60 font-bold text-lg">Classes</NavLink>
        <NavLink to="/signup" className="hover:opacity-60 font-bold text-lg">Sign Up</NavLink>
      </div>
    </div>
  );
}