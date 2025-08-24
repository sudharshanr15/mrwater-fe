import Hero from "@/pages/home/Hero";
import InstagramReels from "@/components/InstagramReels";
import PreFooterCta from "@/components/PreFooterCta";

export default function Home() {
  const reelUrls = [
    'https://www.instagram.com/konja_neram_yosippom/reel/DNdOPIAIE3G/',
    'https://www.instagram.com/konja_neram_yosippom/reel/DNFW1sYN5nE/',
    'https://www.instagram.com/konja_neram_yosippom/reel/DMerxe8NTpB/',
    'https://www.instagram.com/konja_neram_yosippom/reel/DMKI-v6NhtP/',
  ];

  return (
    <div>
      <Hero />
      <InstagramReels reelUrls={reelUrls} />
      <PreFooterCta />
    </div>
  );
}
