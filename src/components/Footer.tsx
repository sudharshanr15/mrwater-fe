"use client";

import Image from "next/image";
import React from "react";
import { CustomerSupport } from "./icons";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { thanjavur } from "@/assets/images";

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
    <footer className="bg-primary backdrop-opacity-0 relative text-white overflow-hidden">
      <div className="container-wrapper">
        {/* Top area */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 xl:gap-32 lg:flex lg:flex-row lg:justify-between">
          {/* Left: headline + newsletter */}
          <div className="lg:flex-1 lg:max-w-[60%] xl:max-w-[55%]">
            <div className="p-4 bg-primary-30 rounded-lg border-2 border-primary-20 inline-block">
              <div className="flex items-center gap-4">
                <div className="">
                  <Image src={CustomerSupport} alt="Customer Support" />
                </div>
                <div>
                  <p className="text-heading-4">Customer Support</p>
                  <p className="font-bold text-heading-3">+91 81110 11008</p>
                </div>
              </div>
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-heading-1 font-extrabold leading-tight">
              Let&apos;s bring your
              <br />
              Idea to life!
            </h2>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Subscribe to our newsletter"
                  className="h-14 w-full rounded-full border border-white/60 bg-transparent pl-6 pr-16 text-[var(--text-body-base)] text-white placeholder-white/80 outline-none focus:border-white"
                />
                <button
                  type="submit"
                  aria-label="Submit email"
                  className="absolute right-1 top-1 h-12 w-12 rounded-full border border-white/70 text-white transition hover:bg-white hover:text-[var(--color-primary-60)] flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M13.172 12 7.05 5.879l1.414-1.415L16 12l-7.536 7.536-1.414-1.415z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Right: address + contact */}
          <div className="text-white/90 lg:max-w-[35%] xl:max-w-[40%]">
            <div>
              <p className="text-body-xl font-bold text-white/80">
                Office Location
              </p>
              <p className="mt-2 max-w-md text-body-xl leading-relaxed">
                No:205/1B, Ariyanipatti Village, Meigudipatti Road,
                Gandarvakottai Taluk, Pudukkottai District-613 303.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-[var(--text-body-xs)] font-semibold text-white/80">
                Contact
              </p>
              <p className="mt-2 text-body-xl leading-relaxed">
                support@arsumrwater.com
                <br />
                +91 81110 11008
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-16 border-white/20" />

        {/* Useful links */}
        <div className="text-center">
          <h3 className="text-heading-3 font-semibold">Useful Links</h3>

          <nav className="mt-2 flex flex-wrap items-center justify-center text-white/90">
            {footerLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <a
                  className="px-3 py-2 text-body-xl hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
                {index < footerLinks.length - 1 ? (
                  <span aria-hidden className="text-white/30">
                    |
                  </span>
                ) : null}
              </React.Fragment>
            ))}
          </nav>

          {/* Socials (placeholders) */}
          <div className="mt-8 flex items-center justify-center gap-6">
            {/* {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                type="button"
                aria-label={`Social ${i + 1}`}
                className="size-10 rounded-full bg-white transition hover:opacity-90"
              />
            ))} */}
            <a href="">
              <button
                type="button"
                className="p-2 rounded-full bg-white transition hover:opacity-90"
              >
                <AiOutlineInstagram className="text-black h-7 w-7" />
              </button>
            </a>
            <a href="">
              <button
                type="button"
                className="p-2 rounded-full bg-white transition hover:opacity-90"
              >
                <BiLogoFacebook className="text-black h-7 w-7" />
              </button>
            </a>
            <a href="">
              <button
                type="button"
                className="p-2 rounded-full bg-white transition hover:opacity-90"
              >
                <BiLogoLinkedin className="text-black h-7 w-7" />
              </button>
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-6 text-body-xl">
            &copy; 2024-2026 Arsu Mr.Water. All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 opacity-10 -z-1">
        <Image src={thanjavur} alt="Thanjavur Footer image" />
      </div>
    </footer>
  );
}
