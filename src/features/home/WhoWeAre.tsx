import Image from 'next/image'
import React from 'react'
import { bottle_about_us } from './assets/images'
import { bottle_500_ml } from '@/assets/images/bottles'

function WhoWeAre() {
    return (
        <section className='container-wrapper'>
            <div className='relative overflow-hidden'>
                <div className="text-center md:text-start">
                    <p className='bg-primary rounded-full font-medium px-8 py-2 text-white inline-block md:text-body-xl md:font-bold font-jf-nesan' lang='ta'>“நீர் இன்றி அமையாது உலகு!”</p>
                </div>
                <div className='md:flex bg-primary rounded-[20px] items-center mt-10'>
                    <div className="md:w-1/2 text-white p-[30px] lg:px-[74px] lg:py-[57px] lg:box-content">
                        <h3 className=''>About Us</h3>
                        <h2 className='text-heading-3 xl:text-heading-2 font-bold'>Who we are</h2>
                        <p className='mt-[10px] xl:mt-5 xl:text-body-xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        </p>
                        <button className='bg-white text-primary rounded-full px-[30px] py-3 font-medium mt-[10px] xl:mt-5'>About Us More</button>
                    </div>
                    <div className='md:w-1/2 lg:w-[40%] relative md:absolute md:-top-12 lg:-top-14 xl:-top-16 right-0 max-h-[440px] max-w-[400px] md:max-w-none md:max-h-none overflow-hidden'>
                        <Image src={bottle_500_ml} alt='Mr.Water 500ml bottle' className='absolute blur-[2px] -rotate-17 w-3/4 top-20' />
                        <Image src={bottle_500_ml} alt='Mr.Water 500ml bottle' className='rotate-17 w-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre