import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-around bg-gradient-to-r from-slate-800 to-slate-950 py-10 border-b-2 border-b-lime-500">
      <Image
        src="/images/logo.png"
        alt="Sewing Machine Plus"
        height={200}
        width={200}
      />
      {/* Allows you to navigate from different pages to eachother (needs to be "page.js" in whatever folder you decide ie:products or about) */}
      <div className="flex">
        <Link href="/" className="px-10">
          Home
        </Link>
        <Link href="/products" className="px-10">
          Products
        </Link>
        <Link href="/about" className="px-10">
          About
        </Link>
        <Link href="/contact" className="px-10">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
