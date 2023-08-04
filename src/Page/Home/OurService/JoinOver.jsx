import React, { useEffect } from 'react';
import './joinover.css'
import SliderJoinOver from '../SliderJoinOver/js/SliderJoinOver';
import AOS from "aos";
import "aos/dist/aos.css";


const JoinOver = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='lg:px-14 px-5 lg:mt-0 mt-10 lg:flex gap-2' data-aos="fade-up">
            <div className='flex items-center gap-5'>
                <h1 className='lg:text-base text-sm font-bold '>Join over +15,000 happy clients!</h1>
                <p className='sub-title'></p>
            </div>
            <SliderJoinOver></SliderJoinOver>
        </div>
    );
};

export default JoinOver;