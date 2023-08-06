import React, { useEffect } from 'react';
import './ourService.css'
import OurAwesomeSlider from './OurAwesomeSlider';
import AOS from "aos";
import "aos/dist/aos.css";



const OurAsesomeService = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);



    return (
        <div className="lg:py-28 py-32  our-service" data-aos="fade-up">
            <div className='lg:px-20 px-7'>
                <div className="title flex justify-center" data-swiper-parallax="-300">
                    <div className='pt-20 mb-10' >
                        <h1 className='bg-white text-center lg:mb-10  px-3 py-3 w-72 lg:text-xl  normal-case font-bold rounded-full text-blue-500 shadow-xl shadow-slate-200'>About Our Company</h1>
                        <h1 className='lg:text-4xl text-2xl lg:mt-0 mt-8 lg:mb-0 mb-14 font-extrabold'>We Are <span className='text-primary'>Dedicated</span> To <br />
                            Serve You All Time.
                        </h1>
                    </div>
                </div>
                {/* service card */}
                <div>
                   <OurAwesomeSlider></OurAwesomeSlider>
                </div>
            </div>
        </div>
    );
};

export default OurAsesomeService;