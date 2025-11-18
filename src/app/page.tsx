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
    'https://www.instagram.com/reels_nature_/reel/CWgPsaXjE6o/',
    'https://www.instagram.com/reels_nature_/reel/CVTFChOgsfn/',
    'https://www.instagram.com/reels_nature_/reel/DAxuc7gi6ri/',
    'https://www.instagram.com/reels_nature_/reel/CkD9YBrjhrQ/',
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
