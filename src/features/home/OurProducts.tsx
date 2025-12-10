import { bottle_500_ml } from "@/assets/images/bottles";
import Image from "next/image";
import React from "react";

const product_bottle_buttons = [
  "20L Water Can",
  "5L Bottle",
  "1L & 2L Bottle",
  "500ML Bottle",
  "300ML Bottle",
];

function OurProducts() {
  return (
    <section className="container-wrapper">
      <div className="text-center mb-5 md:mb-[40px]">
        <h2 className="text-body-xl md:text-body">What we do</h2>
        <h3 className="text-heading-3 md:text-heading-2 font-bold">
          Our Products
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-[30px]">
        <div className="w-full lg:w-1/2 bg-primary-60 rounded-[30px] md:rounded-[40px] text-white p-8 md:px-11 md:py-13 overflow-hidden relative z-0 min-h-[500px] lg:min-h-[600px]">
          <h4 className="text-heading-3 md:text-heading-2 font-bold">
            Mr. Water Bottles
          </h4>
          <p className="text-body-xl md:text-heading-3">
            Pure, safe and refreshing water for every need. Available in
          </p>
          <div className="flex flex-wrap gap-[10px] mt-[22px]">
            {product_bottle_buttons.map((el, index) => (
              <button
                className="px-[10px] py-[5px] rounded-full border border-primary-20"
                key={index}
              >
                {el}
              </button>
            ))}
          </div>
          <a
            href="https://wa.me/918111011008?text=Hi, I want to place a bulk order for Mr. Water. Please share the details and price."
            target="_blank"
          >
            <button className="mt-5 rounded-full bg-white font-medium text-primary px-8 py-3">
              Bulk Order Enquiry
            </button>
          </a>
          <div className="relative">
            <div className="absolute -top-15 md:-top-35 right-0 w-full -z-1">
              <Image
                src={bottle_500_ml}
                alt="Mr.Water 500ml bottle"
                className="rotate-35 lg:rotate-25 w-3/4 mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-primary-50 rounded-[30px] md:rounded-[40px] text-white p-8 md:px-11 md:py-13 overflow-hidden relative z-0 min-h-[500px] lg:min-h-[600px] our_products-2">
          <h4 className="text-heading-3 md:text-heading-2 font-bold">
            Mr. Water Customised Bottles
          </h4>
          <p className="text-body md:text-body-xl mt-5">
            Designed for weddings, events, and brands. Add photos, logos, or
            custom designs to create your own bottle.
          </p>
          <a
            href="https://wa.me/918111011008?text=Hi, I want customised Mr. Water bottles for an event. Please tell me the options and cost."
            target="_blank"
          >
            <button className="mt-5 rounded-full bg-white font-medium text-primary px-8 py-3">
              Order Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
