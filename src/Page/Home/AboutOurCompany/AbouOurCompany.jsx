import React, { useEffect } from 'react';
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";


const AbouOurCompany = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className='w-full ' data-aos="fade-up">
            <div className='lg:grid grid-cols-2 lg:px-56  lg:py-20 px-8 py-16'>
                {/* img */}
                <div className=''>
                    <img className='h-[400px] lg:ml-16 lg:mb-0 mb-10  rounded-xl lg:mt-16' src="https://img.freepik.com/free-photo/business-partners-shaking-hands-agreement_53876-25164.jpg" alt="" />
                </div>

                <div>
                    {/* About info */}
                    <div className="title" data-swiper-parallax="-300">
                        <h1 className='bg-white text-center lg:mb-10  px-3 py-3 w-72 lg:text-xl  normal-case font-bold rounded-full text-blue-500 shadow-xl shadow-slate-200'>About Our Company</h1>
                    </div>
                    <h1 className='lg:text-4xl text-3xl lg:mt-0 mt-5 font-extrabold mb-5'>Choose <span className='text-primary'>The Best</span> It <br /> Service Company</h1>
                    <div className=' border-l-2 border-primary '>
                        <p className='lg:text-xl text-gray-500 ml-5'>
                            An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle.
                        </p>
                    </div>

                    {/* money and support */}
                    <div className='lg:flex  items-center mt-10 gap-16 border-t-2 border-b-2'>
                        <div className='flex items-center gap-3 mt-8 mb-8'>
                            <img className='w-16 ' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNVjAB48XC0k6suzl0Zw29Uh910ie13dKX0vBxZWNzvH4wSzlS" alt="" />
                            <h1 className='text-xl font-bold'>Moneyback <br />Gurentee</h1>
                        </div>
                        <div className='flex items-center gap-3  mt-8 mb-8'>
                            <img className='w-16' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7V8XPwMBqqngD6Rt3Sf3Ud9K3o0u4apNF4bmM7Y8nksfNRXcU" alt="" />
                            <h1 className='text-xl font-bold'>Technical <br /> support</h1>
                        </div>
                    </div>

                    {/* Contact info */}
                    <div className='lg:flex items-center gap-16 mt-10'>
                        <div>
                            <button className='btn bg-primary px-5 p-3 text-white rounded-full flex items-center gap-2  normal-case font-bold shadow-lg shadow-blue-500'>Contact Us!<BsArrowRight className='text-white'></BsArrowRight></button>
                        </div>
                        <div className='flex items-center lg:mt-0 mt-5'>

                            <img className='w-16' src="https://i.ibb.co/Y2jSWhF/male-call-center-operator.gif" alt="" />

                            <div>
                                <h1 className='text-gray-500'>Call for help</h1>
                                <p>+880 1728889933</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbouOurCompany;