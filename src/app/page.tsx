import FeaturesOn from "@/features/home/FeaturesOn";
import Hero from "@/features/home/Hero";
import OurProducts from "@/features/home/OurProducts";
import UserAction from "@/features/home/UserAction";
import WhoWeAre from "@/features/home/WhoWeAre";
import WhyChoose from "@/features/home/WhyChoose";
import InstagramReels from "@/components/InstagramReels";
import PreFooterCta from "@/components/PreFooterCta";

export default function Home() {
  const reelUrls = [
    "https://www.instagram.com/p/DQ16wDsko5b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DNr8k443EgR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DMsRBDUJ7HC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DNPcZfjJc8h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
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
