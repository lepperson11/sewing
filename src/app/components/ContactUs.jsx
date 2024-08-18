import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center pb-6">
      <h1 className="underline decoration-lime-500 font-bold text-xl py-4">
        Phone Hours
      </h1>
      <h2 className="text-red-500 pb-2">800-401-8151</h2>
      <p>
        <b>Monday-Friday:</b> 6:00 am - 6:00 pm PST
      </p>
      <p>
        <b>Saturday/Sunday:</b> 7:30 am - 3:00 pm PST
      </p>
      <h1 className="underline decoration-lime-500 font-bold text-xl py-4">
        San Marcos Location
      </h1>
      <h2 className="text-red-500 pb-2">760-739-8222</h2>
      <p>
        <b>Monday-Friday:</b> 9:00 am - 5:30 pm PST
      </p>
      <p>
        <b>Saturday:</b> 9:00 am - 4:00 pm PST
      </p>
      <p className="pb-6">
        <b>Sunday:</b> CLOSED
      </p>
      <h1 className="underline decoration-lime-500 font-bold text-xl py-4">
        Email Us
      </h1>
      <h2 className="text-red-500 pb-2">info@sewingmachinesplus.com</h2>
      <p className="mx-96">
        If you would prefer to correspond by e-mail, help is available through
        our staff of experts (If you are e-mailing us with a question about your
        order, please include your order number in your e-mail).
      </p>
    </div>
  );
};

export default ContactUs;
