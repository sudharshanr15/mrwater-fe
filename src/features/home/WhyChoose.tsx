import React from 'react'

function WhyChoose() {
  return (
    <section className='container-wrapper pt-10 why-choose'>
        <div className="flex gap-10 flex-col lg:flex-row items-center">
            <div className='w-full lg:w-1/2 lg:order-1'>
                <h2 className='text-body-xl'>Why Choose Mr.Water</h2>
                <p className='text-heading-3 lg:text-heading-2 font-bold'>At vero eos et accusamus et iusto odio dignissimos</p>
                <p className='mt-3 lg:text-body-xl'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam</p>
            </div>
            <div className='w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-5 lg:order-0 why-choose__list'>
                {Array(6).fill(0).map((el, index) => (
                    <div className="w-full aspect-square bg-dp-5 rounded-[20px] why-choose__list-item" key={index}></div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default WhyChoose