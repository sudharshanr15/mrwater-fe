import Image from 'next/image'
import React from 'react'
import { water_and_bottle } from './assets/images'

function UserAction() {
  return (
    <section className='container-wrapper'>
        <div className="relative max-w-[1080px] mx-auto">
            <div>
                <Image src={water_and_bottle} alt='Mr.Water bottle' />
            </div>
            <div className="flex gap-5 flex-col sm:flex-row items-center justify-between mt-5 max-w-[700px] mx-auto md:absolute inset-x-0 bottom-13">
                <button className='bg-primary md:bg-white md:text-dp-9 py-3 px-7 rounded-full text-white font-medium'>
                    Become a Vendor
                </button>
                <button className='bg-primary md:bg-white md:text-dp-9 py-3 px-7 rounded-full text-white font-medium'>
                    Bulk Order Enquiry
                </button>
                <button className='bg-primary md:bg-white md:text-dp-9 py-3 px-7 rounded-full text-white font-medium'>
                    Customize Bottle
                </button>
            </div>
        </div>
    </section>
  )
}

export default UserAction