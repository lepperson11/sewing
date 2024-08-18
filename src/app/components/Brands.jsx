import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Brands = () => {
  return (
    <article>
      {/* Images for the Home page brands in the moving banner */}
      <Marquee autoFill className="py-10">
        <Image
          src="/images/husqviking.jpg"
          alt="viking 95"
          height={200}
          width={200}
        />
        <Image
          src="/images/handi-quilter.jpg"
          alt="viking 95"
          height={200}
          width={200}
        />
        <Image
          src="/images/qbot.jpg"
          alt="viking 95"
          height={200}
          width={200}
        />
        <Image
          src="/images/elna.jpg"
          alt="viking 95"
          height={200}
          width={200}
        />
        {/* <Image
          src="/images/durkee.jpg"
          alt="viking 95"
          height={200}
          width={200}
        /> */}
      </Marquee>
    </article>
  );
};

export default Brands;
