import React from 'react'
import Header from './Header'
import Image from 'next/image'
import { water_bottle } from './assets/images'

function Hero() {
  return (
    <section className='hero_section min-h-screen overflow-hidden'>
        <div className='hero_section-tint'>
            <div className="container-wrapper flex flex-col justify-between items-center min-h-screen">
                <Header />
                <h1 className='text-heading-2 font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <div className="flex items-end justify-between w-full text-white mb-7">
                    <h3 className='text-heading-3 font-medium'>#SipTheDifference</h3>
                    <div className='flex-grow-1 -mb-12 text-center h-full min-w-1/2'>
                        <Image src={water_bottle} className='w-full mx-auto' alt='Water Bottles' />
                    </div>
                    <div className='text-heading-3 text-white font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, labore!
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero