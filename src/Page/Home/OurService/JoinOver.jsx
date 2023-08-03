import React from 'react';
import './joinover.css'
import SliderJoinOver from '../SliderJoinOver/js/SliderJoinOver';


const JoinOver = () => {
    return (
        <div className='lg:px-14 px-5 lg:mt-0 mt-10 lg:flex gap-2'>
            <div className='flex items-center gap-5'>
                <h1 className='lg:text-base text-sm font-bold '>Join over +15,000 happy clients!</h1>
                <p className='sub-title'></p>
            </div>
            <SliderJoinOver></SliderJoinOver>
        </div>
    );
};

export default JoinOver;