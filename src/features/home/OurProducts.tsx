import { bottle_500_ml } from '@/assets/images/bottles';
import Image from 'next/image';
import React from 'react'

const product_bottle_buttons = [
    "20L Water Bottle",
    "1L Bottle",
    "500ML Bottle",
    "300ML Bottle"
];

function OurProducts() {
  return (
    <section className='container-wrapper'>
        <div className="text-center mb-5 md:mb-[40px]">
            <h2 className='text-body-xl md:text-body'>What we do</h2>
            <h3 className='text-heading-3 md:text-heading-2 font-bold'>Our Products</h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-[30px]">
            <div className="w-full lg:w-1/2 bg-primary-60 rounded-[30px] md:rounded-[40px] text-white p-8 md:px-11 md:py-13 overflow-hidden relative z-0 min-h-[500px] lg:min-h-[600px]">
                <h4 className='text-heading-3 md:text-heading-2 font-bold'>Watering Bottles & Pots</h4>
                <p className='text-body-xl md:text-heading-3'>Lorem, ipsum dolor.</p>
                <div className="flex flex-wrap gap-[10px] mt-[22px]">
                    {product_bottle_buttons.map((el, index) => (
                        <button className='px-[10px] py-[5px] rounded-full border border-primary-20' key={index}>{el}</button>
                    ))}
                </div>
                <button className='mt-5 rounded-full bg-white font-medium text-primary px-8 py-3'>Bulk Order Enquiry</button>
                <div className="relative">
                    <div className='absolute -top-15 md:-top-35 right-0 w-full -z-1'>
                        <Image src={bottle_500_ml} alt='Mr.Water 500ml bottle' className='rotate-35 lg:rotate-25 w-3/4 mx-auto' />
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 bg-primary-50 rounded-[30px] md:rounded-[40px] text-white p-8 md:px-11 md:py-13 overflow-hidden relative z-0 min-h-[500px] lg:min-h-[600px] our_products-2">
                <h4 className='text-heading-3 md:text-heading-2 font-bold'>Customisable Bottle</h4>
                <p className='text-body-xl md:text-heading-3'>We are welcoming marriage bulk order</p>
                <p className='text-body md:text-body-xl mt-5'>Customise with your groom & bride photo</p>
                <button className='mt-5 rounded-full bg-white font-medium text-primary px-8 py-3'>Order Now</button>
            </div>
        </div>
    </section>
  )
}

export default OurProducts