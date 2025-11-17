import Hero from "@/pages/home/Hero";
import InstagramReels from "@/components/InstagramReels";
import PreFooterCta from "@/components/PreFooterCta";

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
      <InstagramReels reelUrls={reelUrls} />
      <PreFooterCta />
    </div>
  );
}
