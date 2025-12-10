import { logo_primary } from "@/assets/images";
import Image from "next/image";
import React from "react";
import { kivil_transparent } from "./assets/images";

function WhyChoose() {
  return (
    <section className="pt-10 why-choose">
      <div className="flex justify-center md:justify-between items-stretch md:gap-4">
        <div className="hidden md:block w-full">
          <Image
            className="h-full w-full"
            src={kivil_transparent}
            alt="Kivil"
          />
        </div>
        <div className="text-center md:max-w-[40%] p-8">
          <div className="flex h-full flex-col justify-center">
            <div className="flex justify-center flex-col items-center">
              <Image src={logo_primary} alt="Mr.Water logo" />
            </div>
            <h2 className="mt-4 text-heading-4">Why Choose us</h2>
            <h3 className="mt-4 text-primary text-heading-4 md:text-heading-3 xl:text-heading-2 font-bold">
              Purity You Trust. Tradition We Carry.
            </h3>
            <h4 className="mt-4 text-primary font-bold text-body-lg">
              “நம்ம ஊர். நம்ம தண்ணீர். நம்ம Mr. Water.”
            </h4>
            <p className="mt-4">
              Just as our heritage stands strong with timeless craftsmanship,
              Mr. Water stands for purity that never compromises. Our
              temple-inspired identity reflects values we believe in —
              cleanliness, trust, clarity, and goodness in every drop.
              <br />
              <br />
              Our promise is simple — pure water that stands the test of time.
            </p>
          </div>
        </div>
        <div className="hidden md:block -scale-x-[1] w-full">
          <Image
            className="h-full w-full"
            src={kivil_transparent}
            alt="Kivil"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
