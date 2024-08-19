import React from "react";

const ProductCard = (imgUrl, title, description, price) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="text-black rounded-b-xl my-4 bg-[#b6a8c4] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p>{description}</p>
        <div className="flex justify-between">
          <p className="pt-2 text-lg text-red-600">{price}</p>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-lime-400 to-lime-700 text-white">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
