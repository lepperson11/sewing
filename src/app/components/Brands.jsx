import React from "react";

const Brands = () => {
  return (
    <div classname="relative flex overflow-x-hidden">
      <div classname="py-12 animate-marquee whitespace-nowrap">
        <span classname="text-4xl mx-4">Marquee Item 1</span>
        <span classname="text-4xl mx-4">Marquee Item 2</span>
        <span classname="text-4xl mx-4">Marquee Item 3</span>
        <span classname="text-4xl mx-4">Marquee Item 4</span>
        <span classname="text-4xl mx-4">Marquee Item 5</span>
      </div>

      <div classname="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span classname="text-4xl mx-4">Marquee Item 1</span>
        <span classname="text-4xl mx-4">Marquee Item 2</span>
        <span classname="text-4xl mx-4">Marquee Item 3</span>
        <span classname="text-4xl mx-4">Marquee Item 4</span>
        <span classname="text-4xl mx-4">Marquee Item 5</span>
      </div>
    </div>
  );
};

export default Brands;
