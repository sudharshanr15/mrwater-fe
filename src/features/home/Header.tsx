import { logo_white } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <header className='w-full flex items-center justify-center md:justify-between'>
            <p className='hidden md:block text-body-xl text-white'>
                Call us on <br />
                <span className='text-[24px] font-bold'>+91 98765 43210</span>
            </p>
            <div className='max-w-[80px]'>
                <Image src={logo_white} alt='Mr.Water logo' className='w-full' />
            </div>
            <div className="hidden md:block">
                <button className='bg-white rounded-full text-dp-9 px-[30px] py-3 font-medium'>Bulk Order Enquiry</button>
            </div>
        </header>
    )
}

export default Header