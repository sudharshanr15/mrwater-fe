import { play } from "@/components/icons";
import Image from "next/image";
import React from "react";

function PlayButton() {
  return (
    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-[72px] aspect-square bg-primary rounded-full ring-8 ring-primary/50">
        <div className="flex h-full items-center justify-center">
          <Image src={play} alt="Play icon" />
        </div>
      </div>
    </button>
  );
}

function FeaturesOn() {
  return (
    <section className="container-wrapper">
      <div className="text-center mb-8">
        <h2 className="">Our Highlights</h2>
        <h3 className="text-heading-3 md:text-heading-2 font-bold">
          Features On
        </h3>
      </div>
      <div className="relative">
        {/* <div className="w-screen aspect-video bg-dp-3 lg:max-h-[570px]">

                </div>
                <PlayButton /> */}
        <iframe
          src="https://www.youtube.com/embed/sYV95qkVCOg?si=gG7u6fvnjrKj8uyO"
          title="YouTube video player"
          className="w-full aspect-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default FeaturesOn;
