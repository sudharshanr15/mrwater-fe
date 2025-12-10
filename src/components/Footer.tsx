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
                  <p className="font-bold text-heading-3 mt-2">
                    +91 81110 11008
                  </p>
                </div>
              </div>
            </div>
            <h2 className="mt-8 text-4xl md:text-5xl lg:text-heading-2 font-extrabold leading-tight">
              The signature taste of purity, made premium.
            </h2>

            <h2 className="mt-3 text-heading-3 font-medium mt-8">
              #SipTheDifference
            </h2>
          </div>

          {/* Right: address + contact */}
          <div className="text-white/90 lg:max-w-[35%] xl:max-w-[40%]">
            <div>
              <p className="text-body text-white">Manufactured & Marketed by</p>
              <p className="mt-2 max-w-md text-body-xl leading-relaxed">
                <span className="font-bold">
                  Arsu Manufacturing & Services Pvt. Ltd.
                </span>
                <br />
                No:205/1B, Ariyanipatti Village, Meigudipatti Road,
                Gandarvakottai Taluk, <br />
                Pudukkottai District-613303.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-body-xl font-bold text-white">Contact</p>
              <p className="mt-2 text-body-xl leading-relaxed">
                {/* support@arsumrwater.com
                <br /> */}
                +91 94455 90009
                <br />
                +91 94455 40009
                <br />
                +91 72888 30009
              </p>
            </div>
            <div className="mt-8">
              <p className="text-body-xl font-bold text-white">Customer Care</p>
              <p className="mt-2 text-body-xl leading-relaxed">
                +91 81110 11008
              </p>
            </div>
            <div className="mt-8">
              <p className="text-body-xl font-bold text-white">Email</p>
              <p className="mt-2 text-body-xl leading-relaxed hover:underline">
                <a href="mailto:hello@arsumrwater.com">hello@arsumrwater.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-16 border-white/20" />

        {/* Useful links */}
        <div className="text-center">
          {/* <h3 className="text-heading-3 font-semibold">Useful Links</h3>

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
          </nav> */}

          {/* Socials (placeholders) */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <a href="https://www.instagram.com/arsu.mrwater/">
              <button
                type="button"
                className="p-2 rounded-full bg-white transition hover:opacity-90"
              >
                <AiOutlineInstagram className="text-black h-7 w-7" />
              </button>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578433126690">
              <button
                type="button"
                className="p-2 rounded-full bg-white transition hover:opacity-90"
              >
                <BiLogoFacebook className="text-black h-7 w-7" />
              </button>
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-6 text-body-xl">
            &copy; 2025-2026 Arsu Mr.Water. All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 opacity-10 -z-1">
        <Image src={thanjavur} alt="Thanjavur Footer image" />
      </div>
    </footer>
  );
}
