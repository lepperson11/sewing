import React from "react";
import TopDealsCards from "./TopDealsCards";

const TopDealsData = [
  {
    id: 1,
    name: "Handi Quilter Sale",
    image: "/images/handi-quilter-august.png",
    link: "/",
  },
  {
    id: 2,
    name: "Viking August Back To School Sale",
    image: "/images/viking-august-2024.png",
    link: "/",
  },
  {
    id: 3,
    name: "Viking 95Q Markdown",
    image: "/images/viking-95q.png",
    link: "/",
  },
  {
    id: 4,
    name: "Elna Endless Summer",
    image: "/images/elna-endless-summer.png",
    link: "/",
  },
];
const TopDeals = () => {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Top Deals
      </h2>
      <ul className="px-10 grid md:grid-cols-2 gap-8 md:gap-12">
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
