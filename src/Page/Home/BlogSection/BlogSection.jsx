import React from 'react';
import BlogSlider from './BlogSlider';

const BlogSection = () => {
    return (
        <div className='lg:px-20 lg:py-32 px-5 py-16'>
            <div className='mb-16'>
                <h1 className='text-xl mb-10 text-primary px-2 py-3 w-36 rounded-full text-center shadow-2xl shadow-blue-300'>Blog</h1>
                <p className='lg:text-4xl text-2xl font-bold'>Our Latest <span className='text-primary'>Blog</span></p>
            </div>
            <BlogSlider></BlogSlider>
        </div>
    );
};

export default BlogSection;