'use client';

import React, { useRef, useEffect, useState } from "react";
import NoSSRInstagramEmbed from "@/utils/NoSSRInstagramEmbed";

interface InstagramReelProps {
  reelUrls: string[];
}

const LazyInstagramEmbed = ({ url }: { url: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' } // Load 100px before entering viewport
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full overflow-hidden rounded-none">
      {isVisible ? (
        <NoSSRInstagramEmbed url={url} width="100%" />
      ) : (
        <div className="bg-gray-300 w-full aspect-square animate-pulse" />
      )}
    </div>
  );
};

export default function InstagramReels({ reelUrls }: InstagramReelProps): React.ReactElement {
  const totalCells = 4;
  const items = [
    ...reelUrls.map((url, index) => (
      <LazyInstagramEmbed key={index} url={url} />
    )),
    ...Array.from({length: totalCells - reelUrls.length}, (_, i) => (
      <div key={`p${i}`} className="w-full aspect-square bg-gray-200"/>
    ))
  ];

  return (
    <section className="w-full bg-white py-14">
      <div className="max-6-xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 mb-1">Our Spotlights</p>
          <h2 className="text-3xl md:text-4xl font-bold">Get social with us</h2>
        </div>
        <div className="mx-0 md:mx-10 lg:mx-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 items-start">
            {items}
          </div>
        </div>
      </div>
    </section>
  );
}