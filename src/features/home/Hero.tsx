import React from 'react'
import Header from './Header'
import Image from 'next/image'
import { bottle_1l, hero_tamil_text, water_bottle } from './assets/images'

function Hero() {
  return (
    <section className='min-h-screen hero-section relative overflow-hidden'>
        <div className="hero-section--tint">
        </div>
        <div className="flex flex-col justify-between h-screen container-wrapper pt-5 md:pt-6 pb-0">
            <div className="relative w-full">
                <Header />
            </div>
            <div className="mt-7 text-white text-center relative">
                <h1 className='font-bold text-white font-jf-nesan text-center leading-[1.2]' lang='ta'>
                    <span className='block md:inline text-heading-3 md:text-heading-2 lg:text-heading-1'>தண்ணீருக்கு &nbsp;</span>
                    <span className='block md:inline text-[50px] md:text-heading-2 lg:text-heading-1'>புதிய&nbsp;தரம்!</span>    
                </h1>
                <div className="block md:hidden">
                    <p className='text-white mt-3'>
                        <span className='block text-body-xl'>Call us on</span>
                        <span className='block text-[24px] font-bold'>+91 98765 43210</span>
                    </p>
                    <h2 className='mt-3 text-heading-3 font-medium'>#SipTheDifference</h2>
                </div>
            </div>
            <div className="relative">
                <div className="flex justify-center md:justify-between items-end">
                    <h2 className='mt-3 text-body-xl lg:text-heading-3 font-medium text-white hidden md:block mb-7'>#SipTheDifference</h2>
                    <div className='flex justify-center max-h-[290px] lg:max-h-[350px] xl:max-h-[485px]'>
                        <Image src={bottle_1l} alt='1L Mr.Water bottle' className='w-full max-w-[200px] lg:max-w-[270px] xl:max-w-[334px] absolute top-7 -translate-x-[38%] z-0' />
                        <Image src={bottle_1l} alt='1L Mr.Water bottle' className='w-full max-w-[200px] lg:max-w-[270px] xl:max-w-[334px] absolute top-7 translate-x-[38%] z-0' />
                        <Image src={bottle_1l} alt='1L Mr.Water bottle' className='w-full max-w-[200px] lg:max-w-[270px] xl:max-w-[334px] relative object-cover object-top' />
                    </div>
                    <div className="hidden md:block mb-7">
                        <Image src={hero_tamil_text} alt='Our town, Our water, Our Mr. Water' className='w-3/4 mx-auto lg:w-full' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero