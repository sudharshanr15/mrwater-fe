import Hero from "@/pages/home/Hero";
import InstagramReels from "@/components/InstagramReels";
import PreFooterCta from "@/components/PreFooterCta";

export default function Home() {
  const reelUrls = [
    'https://www.instagram.com/p/DQ16wDsko5b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/DNr8k443EgR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/DMsRBDUJ7HC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/DNPcZfjJc8h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  ];

  return (
    <div>
      <Hero />
      <InstagramReels reelUrls={reelUrls} />
      <PreFooterCta />

    </div>
  );
}
