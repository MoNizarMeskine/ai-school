import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full px-4 py-2 flex h-[60px] items-center justify-between bg-blue-200 ">
      
      <div className="mr-auto ml-7">
        <a href="/" className="ml-auto hover:opacity-60  ">
        AI Teachers
        </a>
      </div>
      
      <div className="flex gap-7 ml-auto mr-7 ">
       
        <NavLink to="/about" className="hover:opacity-60 font-bold text-lg">About Us</NavLink>

        <a href="/classes" className="hover:opacity-60 font-bold text-lg  ">
        Classes
        </a>

        <a
          href="https://drive.google.com/file/d/1CZBMwzKYgykWi60ZcUd-e_3XRsXCa_gN/view?usp=sharing"
          className="hover:opacity-60 font-bold text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
         Sign in
        </a>

       





      </div>
    </div>
  );
}