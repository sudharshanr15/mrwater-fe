import FeaturesOn from "@/features/home/FeaturesOn";
import Hero from "@/features/home/Hero";
import OurProducts from "@/features/home/OurProducts";
import UserAction from "@/features/home/UserAction";
import WhoWeAre from "@/features/home/WhoWeAre";
import WhyChoose from "@/features/home/WhyChoose";
import InstagramReels from "@/components/InstagramReels";
import PreFooterCta from "@/components/PreFooterCta";
import GetSocial from "@/features/home/GetSocial";

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
      <WhoWeAre />
      <FeaturesOn />
      <OurProducts />
      <WhyChoose />
      <UserAction />
      <InstagramReels reelUrls={reelUrls} />
      <PreFooterCta />
    </div>
  );
}
