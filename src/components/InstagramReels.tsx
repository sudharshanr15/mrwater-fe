'use client';

import React from 'react';

interface InstagramReelProps {
  reelUrls: string[];
}

export default function InstagramReels({ reelUrls }: InstagramReelProps): React.ReactElement {
  // Load Instagram embed script
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full bg-transparent py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[var(--text-heading-2)] font-extrabold leading-[var(--text-heading-2--line-height)] text-[var(--color-primary-60)] mb-4">
            Get social with us
          </h2>
          <p className="text-[var(--text-body-base)] text-gray-600 max-w-2xl mx-auto">
            Follow our journey and stay updated with our latest adventures
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reelUrls.map((url, index) => (
            <div 
              key={index} 
              className="group relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <blockquote
                className="instagram-media w-full h-full"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '12px',
                  boxShadow: '0 0 1px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)',
                  margin: 0,
                  padding: 0,
                  width: '100%',
                  height: '100%',
                }}
              >
                <div style={{ padding: '16px' }} className="h-full flex items-center justify-center">
                  <a
                    href={url}
                    style={{ 
                      background: '#FFFFFF',
                      lineHeight: 0,
                      padding: 0,
                      margin: 0,
                      textAlign: 'center',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="animate-pulse">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
                    </div>
                  </a>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}