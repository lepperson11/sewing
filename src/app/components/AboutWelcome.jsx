import React from "react";
import Image from "next/image";

const AboutWelcome = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="underline decoration-lime-500 font-bold text-2xl pt-6 pb-2">
        Welcome to
      </h1>
      <Image
        src="/images/logo.png"
        alt="Sewing Machine Plus"
        height={200}
        width={200}
      />
      <p className="mx-44 my-10">
        We are a family-owned company and have been involved in the sewing and
        vacuum business for over 50 years. We operate the largest sewing machine
        and vacuum cleaner website in the nation. We also have a retail Super
        Stores to serve Southern California. Our Store is located in San Marcos,
        CA. Our Super Store has over 10,000 square feet of showroom with a huge
        classroom to host weekly Sewing classes and monthly events.We are proud
        to bring you the most competitive pricing but also aim to provide the
        right products suited to your individual needs. Our mission is to have
        experts available to help answer any sewing or vacuum related questions
        you may have. We offer a satisfaction guarantee and treat every customer
        like family. It is our pleasure to serve you, both in our store and
        on-line. We pride ourselves on having the most knowledgeable staff for
        Sewing Machines and Vacuum Cleaners in the industry. For the ultimate
        shopping experience, please visit our retail location or call us toll
        free for expert assistance.
      </p>
      <h1 className="underline decoration-lime-500 font-bold text-xl">
        Meet Our Team
      </h1>
      <h2 className="text-red-500 py-4">Executives</h2>
      <div className="flex justify-center">
        <p className="px-10">
          <b>Ron Martin</b>
          <br /> Co-Founder/President
        </p>
        <p className="px-10">
          <b>Chris Martin</b>
          <br /> Co-Founder/Chairman
        </p>
        <p className="px-10">
          <b>Cory Martin</b>
          <br /> Co-Founder/EVP
        </p>
        <p className="px-10">
          <b>Blaine Austin</b>
          <br /> CEO
        </p>
      </div>
      <h2 className="text-red-500 py-4">Online Sales</h2>
      <div className="flex justify-center pb-6">
        <p className="px-10">
          <b>Robert C.</b>
          <br /> Online Sales Supervisor
        </p>
        <p className="px-10">
          <b>Kelly C.</b>
          <br /> Online Sales
        </p>
        <p className="px-10">
          <b>Maxx J.</b>
          <br /> Online Sales
        </p>
        <p className="px-10">
          <b>Trina W.</b>
          <br /> Online Sales
        </p>
        <p className="px-10">
          <b>Gary R.</b>
          <br /> Online Sales(Hablo Espanol)
        </p>
      </div>
    </div>
  );
};

export default AboutWelcome;
