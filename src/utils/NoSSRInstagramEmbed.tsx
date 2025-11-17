import dynamic from "next/dynamic";

const NoSSRInstagramEmbed = dynamic(() => import('react-social-media-embed')
.then(mod => mod.InstagramEmbed), {
    ssr: false
});

export default NoSSRInstagramEmbed;