import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-around bg-gradient-to-r from-slate-900 to-slate-800 py-10 text-[#E2DAD6] border-b-2 border-b-lime-500">
      <h1 className="font-bold">Sewing Machine Plus</h1>
      <div className="flex">
        <h3 className="px-10">Home</h3>
        <h3 className="px-10">Products</h3>
        <h3 className="px-10">About</h3>
        <h3 className="px-10">Contact Us</h3>
      </div>
    </nav>
  );
};

export default Navbar;
