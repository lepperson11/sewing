import React from "react";
import Link from "next/link";

const TopDealsCards = ({ imgUrl, link }) => {
  return (
    <div>
      <div
        className="h-72 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover, auto" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={link}
            className="h-full w-full mr-2 relative group/link"
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default TopDealsCards;
