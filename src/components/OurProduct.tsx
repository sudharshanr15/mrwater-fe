import Image from 'next/image';
import BottleImage from '../assets/images/500ml.svg';

const OurProducts = () => {
    return (
        <section className="py-16 md:py-20 lg:py-24">
            <div className="container-wrapper px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-gray-600 text-sm md:text-base mb-2 uppercase tracking-wide">
                        What we do
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Our Products
                    </h2>
                </div>

                {/* Products Grid - Added proper bottom margin */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-24 lg:mb-28">
                    {/* Watering Bottles & Pots Card */}
                    <div className="bg-[#454886] rounded-3xl p-6 md:p-8 lg:p-10 text-white relative overflow-hidden min-h-[600px] md:min-h-[650px] lg:min-h-[700px] flex flex-col">
                        <div className="flex-1 z-10 relative">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                                Watering Bottles & <br className="lg:hidden" />Pots
                            </h3>
                            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 lg:mb-10 opacity-90">
                                At vero eos et accusamus et
                            </p>

                            {/* Product Options - Fixed border class */}
                            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 lg:mb-10">
                                <span className="bg-transparent border border-white/30 backdrop-blur-sm px-3 md:px-4 lg:px-5 py-2 md:py-2.5 rounded-full text-sm md:text-base">
                                    20L Water Bottle
                                </span>
                                <span className="bg-transparent border border-white/30 backdrop-blur-sm px-3 md:px-4 lg:px-5 py-2 md:py-2.5 rounded-full text-sm md:text-base">
                                    1L Bottle
                                </span>
                                <span className="bg-transparent border border-white/30 backdrop-blur-sm px-3 md:px-4 lg:px-5 py-2 md:py-2.5 rounded-full text-sm md:text-base">
                                    500ML Bottle
                                </span>
                                <span className="bg-transparent border border-white/30 backdrop-blur-sm px-3 md:px-4 lg:px-5 py-2 md:py-2.5 rounded-full text-sm md:text-base">
                                    300ML Bottle
                                </span>
                            </div>

                            <button className="bg-white text-[#454886] px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full font-semibold text-sm md:text-base hover:bg-gray-100 transition-colors duration-300">
                                Bulk Order Enquiry
                            </button>
                        </div>

                        {/* Product Image - Fixed scaling classes */}
                        <div className="absolute bottom-0 left-1/2 transform scale-200 
                                      -translate-x-1/2 translate-y-12 rotate-[30deg] 
                                      md:-translate-x-1/2 md:translate-y-16 md:rotate-[30deg] md:scale-200
                                      lg:-translate-x-1/2 lg:translate-y-20 lg:rotate-[15deg] lg:scale-125 lg:translate-y-24">
                            <Image
                                src={BottleImage}
                                alt="MrWater Bottle"
                                width={350}
                                height={500}
                                className="w-48 h-72 md:w-64 md:h-96 lg:w-80 lg:h-[30rem] object-contain opacity-95 drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Customisable Bottle Card */}
                    <div className="bg-[#454886] rounded-3xl p-6 md:p-8 lg:p-10 text-white relative overflow-hidden min-h-[600px] md:min-h-[650px] lg:min-h-[700px] flex flex-col">
                        <div className="flex-1 z-10 relative">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                                Customisable Bottle
                            </h3>
                            <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 opacity-90">
                                We are welcoming marriage bulk order
                            </p>
                            <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 lg:mb-10 opacity-75">
                                Customise with your groom & bride photo
                            </p>

                            <button className="bg-white text-[#454886] px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full font-semibold text-sm md:text-base hover:bg-gray-100 transition-colors duration-300">
                                Order Now
                            </button>
                        </div>

                        {/* Background Pattern/Bokeh Effect */}
                        <div className="absolute inset-0 opacity-30">
                            <div className="w-full h-full bg-gradient-to-tr from-transparent via-transparent to-blue-400/30"></div>
                            {/* Bokeh circles */}
                            <div className="absolute top-1/6 right-1/5 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/25 rounded-full blur-sm"></div>
                            <div className="absolute top-1/4 right-1/3 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/35 rounded-full blur-sm"></div>
                            <div className="absolute top-2/5 right-1/6 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full blur-sm"></div>
                            <div className="absolute bottom-1/3 right-1/4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/15 rounded-full blur-md"></div>
                            <div className="absolute bottom-1/4 right-2/5 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-white/30 rounded-full blur-sm"></div>
                            <div className="absolute top-1/3 right-1/2 w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 bg-white/25 rounded-full blur-sm"></div>
                            <div className="absolute bottom-1/5 right-1/3 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-full blur-sm"></div>
                            <div className="absolute top-1/2 right-1/4 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-white/40 rounded-full blur-sm"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Fixed margin class and added proper spacing */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mt-12 md:mt-12 lg:mt-16">
                    {/* Image Grid */}
                    <div className="grid grid-cols-3 gap-3 md:gap-4 order-2 lg:order-1 self-start">
                        {[1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div
                                key={item}
                                className={`bg-gray-200 rounded-lg aspect-square flex items-center justify-center overflow-hidden ${index === 1 || index === 4 ? '-mt-8 md:-mt-12 lg:-mt-16' : ''
                                    }`}
                            >
                                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                            </div>
                        ))}
                    </div>

                    {/* Content Block */}
                    <div className="flex flex-col justify-start order-1 lg:order-2">
                        <p className="text-gray-600 text-sm md:text-base mb-2 uppercase tracking-wide">
                            Why Choose MrWater
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                            At vero eos et accusamus et iusto odio dignissimos
                        </h3>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProducts;
