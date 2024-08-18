import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-2 border-t-lime-500 border-l-transparent border-r-transparent text-white bg-gradient-to-r from-slate-800 to-slate-950">
      <div className="container p-12 flex justify-between">
        <Image
          src="/images/logo.png"
          alt="Sewing Machine Plus"
          height={200}
          width={200}
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
