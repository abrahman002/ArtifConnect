import React from 'react';
import './testimonials.css'
import TestimonialsCarousel from './TestimonialsCarousel';
import { BsArrowRight } from "react-icons/bs";


const Testimonials = () => {
    return (
        <div className='mt-20'>
            <div className='testimonials-bg lg:w-full lg:h-[100vh]   lg:grid grid-cols-2 gap-10 pb-16'>
                <div className='lg:py-40 py-20 lg:px-20 px-5 '>
                    <div>
                        <h1 className='text-xl text-primary font-bold px-5 py-2 bg-white w-40 shadow-xl shadow-blue-400 mb-5 rounded-full'>Testimonials</h1>
                        <h1 className='text-3xl text-white font-bold mb-5'>Here’s what our <br /> <span className='text-primary'>customers</span> have said.</h1>
                        <p className='lg:text-xl text-gray-200 font-semibold mb-5'>Simplified IT is designed to help make sure you and your data is protected and your computer runs it’s best. The network Access provides is valuable.</p>
                        <button className='btn btn-primary text-white items-center normal-case px-8 rounded-full'>View more <BsArrowRight className='text-white'></BsArrowRight></button>
                    </div>
                </div>
                <TestimonialsCarousel></TestimonialsCarousel>
            </div>
          
        </div>
    );
};

export default Testimonials;