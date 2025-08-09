"use client";

import React from "react";

type FooterLink = {
  label: string;
  href: string;
};

const footerLinks: FooterLink[] = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Customised Bottle", href: "#" },
  { label: "Become a Vendor", href: "#" },
];

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-[#232a6b] text-white">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-12 py-12 sm:py-16 lg:py-24">
        {/* Top area */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 xl:gap-32 lg:flex lg:flex-row lg:justify-between">
          {/* Left: headline + newsletter */}
          <div className="lg:flex-1 lg:max-w-[60%] xl:max-w-[55%]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Let&apos;s bring your
              <br />
              Idea to life!
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="mt-10 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Subscribe to our newsletter"
                  className="h-14 w-full rounded-full border border-white/60 bg-transparent pl-6 pr-16 text-base text-white placeholder-white/80 outline-none focus:border-white"
                />
                <button
                  type="submit"
                  aria-label="Submit email"
                  className="absolute right-1 top-1 h-12 w-12 rounded-full border border-white/70 text-white transition hover:bg-white hover:text-[#232a6b] flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M13.172 12 7.05 5.879l1.414-1.415L16 12l-7.536 7.536-1.414-1.415z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Right: address + contact */}
          <div className="text-white/90 lg:max-w-[35%] xl:max-w-[40%]">
            <div>
              <p className="text-xs font-semibold text-white/80">Office Location</p>
              <p className="mt-2 max-w-md text-xl leading-relaxed">
                2972 Westheimer Rd. Santa
                <br />
                Ana, Illinois
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold text-white/80">Contact</p>
              <p className="mt-2 text-xl leading-relaxed">
                support@mrwater.com
                <br />
                +91 98765 433210
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-16 border-white/20" />

        {/* Useful links */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Useful Links</h3>

          <nav className="mt-6 flex flex-wrap items-center justify-center text-white/90">
            {footerLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <a
                  className="px-3 py-2 text-base hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
                {index < footerLinks.length - 1 ? (
                  <span aria-hidden className="text-white/30">|</span>
                ) : null}
              </React.Fragment>
            ))}
          </nav>

          {/* Socials (placeholders) */}
          <div className="mt-8 flex items-center justify-center gap-6">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                type="button"
                aria-label={`Social ${i + 1}`}
                className="size-10 rounded-full bg-white transition hover:opacity-90"
              />
            ))}
          </div>

          {/* Copyright */}
          <p className="mt-6 text-xs text-white/70">
            ©2025 MrWater. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


