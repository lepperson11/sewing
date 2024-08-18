import React from "react";
import TopDealsCards from "./TopDealsCards";

// Add any new promotional images here to display on the home page
const TopDealsData = [
  {
    id: 1,
    name: "Handi Quilter Sale",
    image: "/images/handi-quilter-august.png",
    link: "/products",
  },
  {
    id: 2,
    name: "Viking August Back To School Sale",
    image: "/images/viking-august-2024.png",
    link: "/products",
  },
  {
    id: 3,
    name: "Viking 95Q Markdown",
    image: "/images/viking-95q.png",
    link: "/products",
  },
  {
    id: 4,
    name: "Elna Endless Summer",
    image: "/images/elna-endless-summer.png",
    link: "/products",
  },
];
const TopDeals = () => {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12 underline decoration-lime-500">
        Top Deals
      </h2>
      <ul className="px-10 grid md:grid-cols-2 gap-8 md:gap-12">
        {/* This will take the Name, the image link and where you want it to send people when they click on it and map it out into individual images */}
        {TopDealsData.map((deals) => (
          <TopDealsCards
            key={deals.id}
            imgUrl={deals.image}
            link={deals.link}
          />
        ))}
      </ul>
    </section>
  );
};

export default TopDeals;
