import { logo_white } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <header className='pt-12 pb-6 w-full flex items-center justify-between'>
            <div>
                <p className='text-white'>Call us on<br />
                    <span className='font-bold'>+91 9876 543210</span>
                </p>
            </div>
            <div>
                <Image src={logo_white} alt='MrWater logo' />
            </div>
            <div>
                <button className='bg-dp-0 rounded-full px-7 py-3 font-medium'>Bulk Order Enquiry</button>
            </div>
        </header>
    )
}

export default Header