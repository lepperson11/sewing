import React from "react";
import ProductCard from "./ProductCard";
import { notFound } from "next/navigation";

import { headers } from "next/headers";

// async function getData() {
//   const res = await GET();
//   if (!res.ok) return notFound();
//   return res.json();
// }

// const productData = [
//   {
//     id: 1,
//     title: "Elna Elnita EF72 Computerized Sewing and Quilting Machine",
//     description:
//       "The EF72 is the ultimate tool to support your sewing, offering the perfect combination of power, performance and durability to meet your requirements. The 10” seamless flatbed provides the perfect work space for projects large and small, paired with sewing speeds of up to 1,000 stitches per minute, the advanced features and smooth design make the EF72 an ideal companion for quilters.",
//     image: "/images/elna-elnita.jpg",
//     price: "$1,799",
//     tag: ["All", "Elna"],
//   },
//   {
//     id: 2,
//     title: "Elna eXpressive 830L Computerized Embroidery Machine",
//     description:
//       "Broaden your creative perspectives! The Elna eXpressive 830L is an embroidery-only machine designed for grand embroidery. It includes all what you need to customize your projects for sumptuous results: an extra-large embroidery area, a giant hoop, and a wide extension table. You will experience pure embroidery pleasure thanks to the Elna eXpressive 830L's many helpful functions to facilitate your work.",
//     image: "/images/elna-expressive.jpg",
//     price: "$2,899",
//     tag: ["All", "Elna"],
//   },
//   {
//     id: 3,
//     title: "Elna Elnita EC30 Computerized Sewing Machine",
//     description:
//       "The Elna Elnita EC30 Computerized Sewing Machine has 30 built-in stitches, jam-proof top drop-in bobbin, and easy to read LCD display, you’ll be sewing like a professional in no time. By the screen, you’ll find great convenience buttons for easy sewing including a locking stitch button, easy reverse button, and needle up/down button. Easily control your sewing speed by using the foot control.",
//     image: "/images/elna-ec30.jpg",
//     price: "$349",
//     tag: ["All", "Elna"],
//   },
//   {
//     id: 4,
//     title:
//       "LiTen Up QBOT V3 Computerized Quilting System for Long Arm Quilting Machines",
//     description:
//       "The most anticipated innovation in quilting has arrived. What is QBOT? QBOT stands for Quilting Based on Technology. It is a new, totally computerized quilting system for Long Arm Quilting Machines. Why pay someone to create a professional quilt, when the QBOT can do it for you? The QBOT offers professional results…easily and automatically. Simply put, the QBOT does everything for you. Automatic hands-free movement creates the perfect design that would be impossible to do by hand. You are now the professional! Just think about all of those quilting projects that you started, but never finished. The QBOT will complete your quilting projects in a fraction of the time. Design more intricate quilting than you ever imagined. With more than 18 quilting designs included, you can start creating beautiful designs immediately. If you prefer, you can “record” your very own one-of-a-kind pattern and repeat it the same way, or shrink it, anywhere you want on the quilt. Take pride in professional results, the easy way. Own your QBOT today!",
//     image: "/images/liten-up-qbot.jpg",
//     price: "$5,199",
//     tag: ["All", "QBot"],
//   },
//   {
//     id: 5,
//     title:
//       "QBOT V3 Computerized Quilting System for HQ Moxie and Baby Lock Gallant",
//     description:
//       "The most anticipated innovation in quilting has arrived. What is QBOT? QBOT stands for Quilting Based on Technology. It is a new, totally computerized quilting system for Long Arm Quilting Machines. Why pay someone to create a professional quilt, when the QBOT can do it for you? The QBOT offers professional results…easily and automatically. Simply put, the QBOT does everything for you. Automatic hands-free movement creates the perfect design that would be impossible to do by hand. You are now the professional! Just think about all of those quilting projects that you started, but never finished. The QBOT will complete your quilting projects in a fraction of the time. Design more intricate quilting than you ever imagined. With more than 18 quilting designs included, you can start creating beautiful designs immediately. If you prefer, you can “record” your very own one-of-a-kind pattern and repeat it the same way, or shrink it, anywhere you want on the quilt. Take pride in professional results, the easy way. Own your QBOT today!",
//     image: "/images/qbot-v3.jpg",
//     price: "$5,199",
//     tag: ["All", "QBot"],
//   },
//   {
//     id: 6,
//     title: "Husqvarna Viking Emerald 116 Sewing Machine",
//     description:
//       "The Husqvarna EMERALD™ 116 is a machine ideal for all types of sewing; from a beautiful, one-of-a kind dress to curtains that duplicate those seen in a magazine. The EMERALD™ 116 machine has many practical features you will love including the built-in needle threader, a handy Sewing Guide Reference Chart, a hard cover for storage and an effortless one-step buttonhole.",
//     image: "/images/husq-emerald.jpg",
//     price: "$399",
//     tag: ["All", "Husqvarna"],
//   },
//   {
//     id: 7,
//     title: "Husqvarna Viking Onyx 15 Sewing Machine",
//     description:
//       "Discover the Husqvarna Viking Onyx 15 Mechanical Sewing Machine, designed to meet your essential sewing needs with its versatile features. With a selection of 23 stitches, you'll have the tools to bring your creative visions to life. The convenient top drop-in bobbin makes threading a breeze and allows you to monitor your thread supply. Unlock endless creative possibilities with the 7 included accessory feet, offering a variety of techniques. Sew with confidence using the Sewing Advisor Cards that guide you to achieve the perfect stitch for your project. The direct stitch selection feature makes choosing your desired stitch effortless.",
//     image: "/images/husq-onyx.jpg",
//     price: "$299",
//     tag: ["All", "Husqvarna"],
//   },
//   {
//     id: 8,
//     title: "Husqvarna Viking Amber S100 Serger Machine",
//     description:
//       "Looking for the secret to fast, sturdy and stunning seams? Look no further than the Husqvarna Viking Amber S100 overlock machine. Impressive speed. Intuitive threading. Incredible results.",
//     image: "/images/husq-amber.jpg",
//     price: "$499",
//     tag: ["All", "Husqvarna"],
//   },
//   {
//     id: 9,
//     title: "Handi Quilter Infinity 26-inch Long Arm with Gallery2 Frame",
//     description:
//       "The creative possibilities of quilting are endless. Now, your long arm machine also provides endless opportunities. Introducing the HQ Infinity 26 inch long arm quilting machine by Handi Quilter. Innovative features, from stitching speeds up to 3,100 precision stitches per minute to handlebars that can be tailored to how you like to quilt, establish the Infinity as best in class. Customizable settings, programmable presets and intuitive software give the Infinity the ability to work and grow with you.",
//     image: "/images/handi-infinity.jpg",
//     price: "$20,495",
//     tag: ["All", "Handi Quilter"],
//   },
//   {
//     id: 10,
//     title: "Handi Quilter Forte 24 Long Arm Quilting Machine",
//     description:
//       "Introducing the new Handi Quilter Forte Longarm Quilting Machine. Made by quilters, for quilters. The HQ Forte 24 is jam packed with features and includes your choice of a 10 or 12 HQ Gallery2 Frame with HQ Precision-Glide Track (8-wheels) as an optional add-on. Everything you need for free-motion quilting right out of the box, including a powerful stand-alone bobbin winder. Don't miss out on this amazing machine and start quilting better today!",
//     image: "/images/handi-forte.jpg",
//     price: "$15,995",
//     tag: ["All", "Handi Quilter"],
//   },
//   {
//     id: 11,
//     title:
//       "Handi Quilter Amara 24 inch Longarm Quilting Machine With 10 Foot Gallery 2 Frame",
//     description:
//       "The Amara 24 features a variety of convenient tools as well as twenty-four inches of throat space to help you creatively finish more quilts. The Amara 24-inch longarm machine with HQ Gallery2™ Frame (choose from 10-, 12-, or 14-foot size options). Everything you need for free-motion quilting right out of the box, including a powerful, stand-alone bobbin winder.",
//     image: "/images/handi-amara.jpg",
//     price: "$15,995",
//     tag: ["All", "Handi Quilter"],
//   },
//   {
//     id: 12,
//     title:
//       "Handi Quilter Moxie 15 Inch Longarm Quilting Machine With 8 Foot Loft Frame",
//     description:
//       "Now every stitch can be yours—from pieced top to finished quilt. You’ll find 15 inches of free-motion freedom in the new HQ Moxie™ longarm quilting machine. Forget basting with pins or cramming quilts through a domestic machine. Get to stitching quickly with straightforward features, easy-to-use controls, and the space to get creative. Quilt without qualms, adventure with attitude—that’s Moxie.",
//     image: "/images/handi-moxie.jpg",
//     price: "$4,995",
//     tag: ["All", "Handi Quilter"],
//   },
// ];

const ProductSection = async () => {
  // //let data = await getData();
  // //console.log(data);
  // let products;
  //
  const getData = async () => {
    const endpoint = "http://localhost:3000/api/product";
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(endpoint, options);
    const productData = await response.json();
    if (response.status == 200) {
      console.log(productData.data);
    }
    if (response.status == 500) {
      console.log(productData.error);
    }
    return productData.data;
  };
  const products = await getData();
  console.log(products);

  // console.log(products);

  //console.log(data);

  // products.map((product) => {
  //   console.log("Product", product);
  // });

  return (
    // <ul className="grid md:grid-cols-4 gap-8 md:gap-12">
    //   {data.map((product) => {
    //     console.log(product._id);
    //     <p>{product._id}</p>;
    //     // <ProductCard
    //     //   key={product._id}
    //     //   title={product.title}
    //     //   description={product.description}
    //     //   imgUrl={product.image}
    //     //   price={product.price}
    //     // />;

    <ul className="grid md:grid-cols-4 gap-8 md:gap-12 mt-6 mx-2">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          imgUrl={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </ul>
    //   })}
    // </ul>
    // );

    //   const [tag, setTag] = useState("All");
    //   const ref = useRef(null);

    //   const handleTagChange = (newTag) => {
    //     setTag(newTag);
    //   };

    //   const filteredProducts = productData.filter((product) =>
    //     product.tag.includes(tag)
    //   );

    //   return (
    //     <section>
    //       <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 underline decoration-lime-500">
    //         Products
    //       </h2>
    //       <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
    //         <ProductTag
    //           onClick={handleTagChange}
    //           name="All"
    //           isSelected={tag === "All"}
    //         />
    //         <ProductTag
    //           onClick={handleTagChange}
    //           name="Elna"
    //           isSelected={tag === "Elna"}
    //         />
    //         <ProductTag
    //           onClick={handleTagChange}
    //           name="QBot"
    //           isSelected={tag === "QBot"}
    //         />
    //         <ProductTag
    //           onClick={handleTagChange}
    //           name="Husqvarna"
    //           isSelected={tag === "Husqvarna"}
    //         />
    //         <ProductTag
    //           onClick={handleTagChange}
    //           name="Handi Quilter"
    //           isSelected={tag === "Handi Quilter"}
    //         />
    //       </div>
    //       <ul ref={ref} className="grid md:grid-cols-4 gap-8 md:gap-12">
    //         {filteredProducts.map((product, index) => (
    //           <ProductCard
    //             key={product.id}
    //             title={product.title}
    //             description={product.description}
    //             imgUrl={product.image}
    //             price={product.price}
    //           />
    //         ))}
    //       </ul>
    //     </section>
    //   );
  );
};

export default ProductSection;
