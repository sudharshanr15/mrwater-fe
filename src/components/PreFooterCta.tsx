import Image from "next/image";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function PreFooterCta(): React.ReactElement {
  return (
    <section className="w-full bg-transparent mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-10 lg:mb-12">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-12">
        {/* Mobile view (vertical layout) */}
        <div className="md:hidden relative overflow-hidden rounded-3xl bg-[var(--color-primary-60)] p-6">
          <div className="relative z-[1] flex flex-col sm:items-center items-start">
            {/* Text content */}
            <div className="w-full sm:text-start text-left z-10">
              <h2
                className="
                  text-white
                  text-[var(--text-heading-4)]
                  sm:text-[32px]
                  md:text-[34px]
                  font-extrabold
                  leading-[var(--text-heading-3--line-height)]
                "
              >
                Stay Hydrated, Stay Healthy
              </h2>
              <p className="mt-3 text-white text-[var(--text-body-sm)]">
                Join the Mr. Water community and be the first to know about new
                launches, promotions, and sustainability initiatives. Your
                hydration, our mission
              </p>
              <div className="mt-5 mb-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-[var(--text-body-sm)] font-medium text-[var(--color-primary-60)] shadow-sm transition hover:opacity-90"
                >
                  <AiOutlineWhatsApp className="mr-2 h-5 w-5" />
                  <span>Whatsapp Now</span>
                </button>
              </div>
            </div>

            {/* Bottle image for mobile */}
            <div className="relative w-full h-[350px] mt-2 flex sm:justify-center justify-start overflow-hidden">
              <div className="relative h-[350px] w-[350px]">
                <Image
                  src="/images/500ml.svg"
                  alt="Mr. Water bottle"
                  fill
                  sizes="(max-width: 768px) 350px"
                  className="object-contain transform rotate-[-45deg] scale-150"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/tablet view (horizontal layout) */}
        <div className="hidden md:block relative overflow-hidden rounded-3xl bg-[var(--color-primary-60)] p-6 sm:p-8 md:p-10">
          <div className="relative z-[1] flex flex-row items-center justify-between">
            {/* Left: Text + Button */}
            <div className="max-w-[60%] z-10">
              <h2
                className="
                  text-white
                  text-[var(--text-heading-2)]
                  md:text-[42px]
                  lg:text-[44px]
                  font-extrabold
                  leading-[var(--text-heading-2--line-height)]
                "
              >
                Stay Hydrated, Stay Healthy
              </h2>
              <p className="mt-3 text-white text-body-base">
                <span className="font-bold">Pure Water, Delivered Fast</span>
                <br />
                <br />
                Connect with us for quick delivery, bulk orders, customised
                bottles, and reliable daily supply. At Mr. Water, we ensure
                every bottle reaches you fresh, safe, and perfectly pure.
              </p>
              <div className="mt-5">
                <a
                  href="https://wa.me/918111011008?text=Hi, I want to place a bulk order for Mr. Water. Please share the details and price."
                  target="_blank"
                >
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-[var(--text-body-sm)] font-medium text-[var(--color-primary-60)] shadow-sm transition hover:opacity-90"
                  >
                    <AiOutlineWhatsApp className="mr-2 h-5 w-5" />
                    Whatsapp Now
                  </button>
                </a>
              </div>
            </div>

            {/* Right: Water bottle image */}
            <div className="absolute right-[-150px] top-[-80px] bottom-[-80px] flex items-center justify-center z-0">
              <div className="relative h-[600px] w-[600px] lg:h-[700px] lg:w-[700px]">
                <Image
                  src="/images/500ml.svg"
                  alt="Mr. Water bottle"
                  fill
                  sizes="(max-width: 1024px) 600px, 900px"
                  className="object-contain transform rotate-[-32deg]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Rounded corners feel - ensure image doesn't spill */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/0" />
        </div>
      </div>
    </section>
  );
}
