import React, { useEffect } from 'react';
import './service.css';
import AOS from "aos";
import "aos/dist/aos.css";
import JoinOver from './JoinOver';

const OurService = () => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className='service w-full pb-10 pt-10 lg:pt-0' >
            <div className='lg:grid grid-cols-5 gap-2 card-group lg:top-[-100px] lg:mt-0 mt-16  lg:relative  z-10 lg:px-14 px-5 ' data-aos="fade-up">
                <div className='card lg:w-56 p-10 bg-white flex items-center flex-col  '>
                    <img className='w-14 mb-5' src="https://i.ibb.co/p4wFD9m/designer.png" alt="" />
                    <h1 className='text-xl text-center font-bold'>Ui/Ux Design <br /> Service</h1>
                </div>
                <div className='card lg:w-56 p-10 bg-white lg:mt-0 mt-5 flex items-center flex-col'>
                    <img className='w-14 mb-5' src="https://cdn-icons-png.flaticon.com/128/609/609116.png" alt="" />
                    <h1 className=' text-xl text-center font-bold'>Business <br /> Consultation</h1>
                </div>
                <div className='card lg:w-56 p-10 bg-white lg:mt-0 mt-5 flex items-center flex-col'>
                    <img className='w-14 mb-5' src="https://cdn-icons-png.flaticon.com/128/7991/7991055.png" alt="" />
                    <h1 className='text-xl text-center font-bold'>WebSite <br /> Development</h1>
                </div>
                <div className='card lg:w-56 p-10 bg-white lg:mt-0 mt-5 flex items-center flex-col'>
                    <img className='w-14 mb-5' src="https://cdn-icons-png.flaticon.com/128/11268/11268821.png" alt="" />
                    <h1 className='text-xl text-center font-bold'>Support <br /> Management</h1>
                </div>
                <div className='card lg:w-56 p-10 bg-white lg:mt-0 mt-5 flex items-center flex-col'>
                    <img className='w-14 mb-5 ' src="https://cdn-icons-png.flaticon.com/128/6012/6012178.png" alt="" />
                    <h1 className='text-xl text-center font-bold '>Market <br /> Research</h1>
                </div>
            </div>
            <JoinOver/>
            
        </div>
    );
};

export default OurService;