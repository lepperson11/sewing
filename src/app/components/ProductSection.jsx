"use client";
import React, { useState, useRef } from "react";
import ProductCard from "./ProductCard";
import ProductTag from "./ProductTag";
import { motion, useInView } from "framer-motion";

const productData = [
  {
    id: 1,
    title: "Expense Tracker",
    description: "A Website To Track Any Expenses",
    image: "/images/Expense-Tracker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lepperson11/expense-app",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "To Do",
    description: "A Website To Help You Keep Track Off What You Need To Do",
    image: "/images/Todo-Web.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lepperson11/firebasetest",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "The Counter",
    description: "A Simple Website To Help You Count",
    image: "/images/Counter-Web.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lepperson11/firstRedux",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Student Database",
    description:
      "This Website Is A Database Frontend To Keep Track Of Student Information",
    image: "/images/Student-Web-Frontend.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lepperson11/reactStudent",
    previewUrl: "/",
  },
  // {
  //   id: 5,
  //   title: "Fifth Project",
  //   description: "Fifth Description",
  //   image: "/images/images.jpeg",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Sixth Project",
  //   description: "Sixth Description",
  //   image: "/images/images.jpeg",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProductSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProducts = productData.filter((product) =>
    product.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Products
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProductTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProductTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProductTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            imgUrl={product.image}
            gitUrl={product.gitUrl}
            previewUrl={product.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProductSection;
