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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              consequuntur.
            </h3>
            <p className="mt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam
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
