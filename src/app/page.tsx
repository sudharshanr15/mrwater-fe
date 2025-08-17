import FeaturesOn from "@/features/home/FeaturesOn";
import Hero from "@/features/home/Hero";
import OurProducts from "@/features/home/OurProducts";
import UserAction from "@/features/home/UserAction";
import WhoWeAre from "@/features/home/WhoWeAre";
import WhyChoose from "@/features/home/WhyChoose";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <FeaturesOn />
      <OurProducts />
      <WhyChoose />
      <UserAction />
    </div>
  );
}
