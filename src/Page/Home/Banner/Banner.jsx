import React, { useRef, useState } from 'react';
import { BsArrowRight } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './banner.css';

// import required modules


const Banner = () => {
    return (
        <div className='lg:h-[600px]'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'background-image':
                            'url(https://as1.ftcdn.net/v2/jpg/02/62/42/82/1000_F_262428206_1mIxQBmWX02lVzAzPBgvWKyaEvbpxjHp.jpg)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide className='lg:ml-10'>
                    <div className="title" data-swiper-parallax="-300">
                        <h1 className='bg-white lg:w-1/4 px-5 py-2 lg:text-xl lg:mt-10  normal-case font-bold rounded-full text-blue-500'>We are IT service agency</h1>
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <p className='text-2xl lg:text-7xl font-bold mt-5 mb-3'>Think Big,We make <br /> IT,Possible!</p>
                    </div>
                    <div className='text' data-swiper-parallax="-100">
                        <p className='text-base lg:text-2xl font-semibold text-gray-50'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec.
                        </p>
                        <button className='btn bg-primary px-5 p-3 rounded-lg flex items-center gap-2 mt-10 normal-case font-bold'>Our Team<BsArrowRight className='text-white'></BsArrowRight></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide  >
                    <div className="title" data-swiper-parallax="-300">
                        <h1 className='bg-white lg:w-1/4 px-5 py-2 lg:text-xl lg:mt-10 normal-case font-bold rounded-full text-blue-500'>We are IT service agency</h1>
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <p className='text-2xl lg:text-7xl font-bold mt-5 mb-3'>Prosper in this volatile <br /> market funding.</p>
                    </div>
                    <div className='text' data-swiper-parallax="-100">
                        <p className='text-base lg:text-2xl font-semibold text-gray-50'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec.
                        </p>
                        <button className='btn bg-primary px-5 p-3 rounded-lg flex items-center gap-2 mt-10 normal-case font-bold'>Our Team<BsArrowRight className='text-white'></BsArrowRight></button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;