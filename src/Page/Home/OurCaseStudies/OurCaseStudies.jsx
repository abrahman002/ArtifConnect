import React, { useEffect } from 'react';
import CaseSlider from './CaseSlider';
import AOS from "aos";
import "aos/dist/aos.css";

const OurCaseStudies = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className="py-10" data-aos="fade-up">
        <div >
            <div className="title  lg:pl-32 px-7" data-swiper-parallax="-300">
                <div className='pt-20 mb-10' >
                    <h1 className='bg-white text-center lg:mb-10  px-3 py-3 w-72 lg:text-xl  normal-case font-bold rounded-full text-blue-500 shadow-xl shadow-slate-200'>Our Case Studies</h1>
                    <h1 className='lg:text-4xl text-3xl lg:mt-0 mt-8 lg:mb-0 mb-14 font-extrabold'>Technology Is <span className='text-primary'>Transforming</span>  <br />
                        Every Industry.
                    </h1>
                </div>
            </div>
            {/* service card */}
            <div className='lg:ml-24 px-7'>
              <CaseSlider></CaseSlider>
            </div>
        </div>
    </div>
    );
};

export default OurCaseStudies;