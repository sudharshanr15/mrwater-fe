'use client';

import React from "react";
import NoSSRInstagramEmbed from "@/utils/NoSSRInstagramEmbed";

interface InstagramReelProps {
  reelUrls: string[];
}

const PLACEHOLDER = (
  <div className="bg-gray-200 w-full h-full aspect-square"/>
);

export default function InstagramReels({ reelUrls }: InstagramReelProps): 
React.ReactElement {
  
  const totalCells = 8;
  const items = [
    ...reelUrls.map((url, index) => (
      <div key={index} className="w-full h-full aspect-square bg-gray-100 overflow-hidden rounded-none">
        <NoSSRInstagramEmbed url={url} width="100%" className="!h-full"/>
      </div>
    )),
    ...Array.from({length: totalCells - reelUrls.length}, (_, i) => (
      <div key={`p${i}`} className="w-full h-full aspect-square bg-gray-200"/>
    ))
  ];

  return (
    <section className="w-full bg-white py-14">
      <div className="max-6-xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 mb-1">Our Spotlights</p>
          <h2 className="text-3xl md:text-4xl font-bold">Get social with us</h2>
        </div>

        <div className="mx-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">{items}</div>
        </div>
      </div>
    </section>
  )
}