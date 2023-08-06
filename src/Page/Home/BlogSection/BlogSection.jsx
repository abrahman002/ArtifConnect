import React, { useEffect } from 'react';
import BlogSlider from './BlogSlider';
import AOS from "aos";
import "aos/dist/aos.css";

const BlogSection = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className='lg:px-20 lg:py-32 px-5 py-16' data-aos="fade-up">
            <div className='mb-16'>
                <h1 className='text-xl mb-10 text-primary px-2 py-3 w-36 rounded-full text-center shadow-2xl shadow-blue-300'>Blog</h1>
                <p className='lg:text-4xl text-2xl font-bold'>Our Latest <span className='text-primary'>Blog</span></p>
            </div>
            <BlogSlider></BlogSlider>
        </div>
    );
};

export default BlogSection;