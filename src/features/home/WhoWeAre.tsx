import Image from 'next/image'
import React from 'react'
import { bottle_about_us } from './assets/images'

function WhoWeAre() {
    return (
        <section className="container-wrapper my-12 relative">
            <p className='inline-block text-body-xl font-bold bg-primary rounded-full text-white px-8 py-2 mb-10'>
                Lorem ipsum dolor sit amet.
            </p>
            <div className="flex-col items-end rounded-xl md:rounded-4xl bg-primary text-white">
                <div className='w-full p-8 md:px-14 md:py-18 md:pr-0'>
                    <h3>About Us</h3>
                    <h2 className='text-heading-2 font-bold mb-5'>Who we are</h2>
                    <p className='text-body-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, unde est, recusandae tempore ratione exercitationem veniam provident quasi assumenda libero alias officiis culpa quos doloremque asperiores iusto ullam. Dicta tempore adipisci cum magnam, excepturi accusamus laborum similique pariatur. Nisi eaque ullam assumenda temporibus cumque inventore impedit quod nam hic labore!</p>
                </div>
                <div className="w-full md:absolute bottom-0 right-0">
                    <Image src={bottle_about_us} alt='Mr.Water Bottle' className='mx-auto' />
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre