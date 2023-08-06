import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabSection.css';
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";


const TabSection = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className="tabs-container  " data-aos="fade-up">


            <Tabs>
                <div className='border-t-2 border-b-2   '>
                    <TabList className="centered lg:flex justify-center p-8">
                        <Tab className="custom-tab px-10 py-3 lg:text-base text-gray-500 ">Company Mission</Tab>
                        <Tab className="custom-tab px-10 py-3 lg:text-base text-gray-500">Awards Winner</Tab>
                        <Tab className="custom-tab px-10 py-3 lg:text-base text-gray-500">Using Softwares</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className="tab-content">
                        <div className='w-full ' >
                            <div className='lg:grid grid-cols-2 gap-14 lg:px-20  lg:py-20 px-8 py-16'>
                                {/* img */}
                                <div className='shadow-lg bg-gray-100 shadow-slate-300 rounded-xl lg:h-[400px] lg:w-[400px] lg:py-10 lg:px-5'>
                                    <img className=' h-[400px] w-[400px] lg:ml-16  lg:mb-0 mb-10  rounded-xl ' src="https://img.freepik.com/free-photo/business-partners-shaking-hands-agreement_53876-25164.jpg" alt="" />
                                </div>

                                <div>
                                    {/* About info */}
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className='text-primary font-bold mb-5'>Touching Lives Through Technology</p>
                                    </div>
                                    <h1 className='lg:text-4xl text-2xl lg:mt-0 mt-10 font-extrabold mb-10'>Fingent’s Four Pillars Of Influence</h1>
                                    <div className=' '>
                                        <p className='lg:text-xl text-gray-500'>
                                            An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle.
                                        </p>
                                    </div>
                                    <div>
                                        <button className='btn bg-primary px-5 p-3 mt-10 text-white rounded-full flex items-center gap-2  normal-case font-bold shadow-lg shadow-blue-500'>About Us!<BsArrowRight className='text-white'></BsArrowRight></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="tab-content">
                        <div className='w-full ' >
                            <div className='lg:grid grid-cols-2 gap-14 lg:px-20  lg:py-20 px-8 py-16'>
                                {/* img */}
                                <div className='shadow-lg bg-gray-100 shadow-slate-300 rounded-xl lg:h-[400px] lg:w-[400px] lg:py-10 lg:px-5' >
                                    <img className='h-[400px] w-[400px] lg:ml-16  lg:mb-0 mb-10  rounded-xl ' src="https://img.freepik.com/free-photo/portrait-happy-attractive-man-woman-smart-clothes_171337-18724.jpg" alt="" />
                                </div>

                                <div>
                                    {/* About info */}
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className='text-primary font-bold mb-5'>Touching Lives Through Technology</p>
                                    </div>
                                    <h1 className='lg:text-4xl text-2xl lg:mt-0 mt-10 font-extrabold mb-10'>Fingent’s Four Pillars Of Influence</h1>
                                    <div className=' '>
                                        <p className='lg:text-xl text-gray-500'>
                                            An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle.
                                        </p>
                                    </div>
                                    <div>
                                        <button className='btn bg-primary px-5 p-3 mt-10 text-white rounded-full flex items-center gap-2  normal-case font-bold shadow-lg shadow-blue-500'>About Us!<BsArrowRight className='text-white'></BsArrowRight></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="tab-content">
                        <div className='w-full ' >
                            <div className='lg:grid grid-cols-2 gap-14 lg:px-20  lg:py-20 px-8 py-16'>
                                {/* img */}
                                <div className='shadow-lg bg-gray-100 shadow-slate-300 rounded-xl lg:h-[400px] lg:w-[400px] lg:py-10 lg:px-5'>
                                    <img className='h-[400px] w-[400px] lg:ml-16  lg:mb-0 mb-10  rounded-xl ' src="https://i.ibb.co/ZxKJxf8/male-female-office-workers-1.jpg" alt="" />
                                </div>

                                <div>
                                    {/* About info */}
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className='text-primary font-bold mb-5'>Touching Lives Through Technology</p>
                                    </div>
                                    <h1 className='lg:text-4xl text-2xl lg:mt-0 mt-10 font-extrabold mb-10'>Fingent’s Four Pillars Of Influence</h1>
                                    <div className=' '>
                                        <p className='lg:text-xl text-gray-500'>
                                            An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle.
                                        </p>
                                    </div>
                                    <div>
                                        <button className='btn bg-primary px-5 p-3 mt-10 text-white rounded-full flex items-center gap-2  normal-case font-bold shadow-lg shadow-blue-500'>About Us!<BsArrowRight className='text-white'></BsArrowRight></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default TabSection;
