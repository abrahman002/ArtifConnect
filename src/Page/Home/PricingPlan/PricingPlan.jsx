import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './pricinigplan.css';
import { AiOutlineCheck } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";


const CustomTab = ({ children, onClick, isSelected }) => {

    
    return (
        <Tab>
            <div
                className={`tab-label ${isSelected ? 'active' : ''}`}
                onClick={onClick}
            >
                <span className={`tab-checkbox ${isSelected ? 'checked' : ''}`}></span>
                {children}
            </div>
        </Tab>
    );
};

const PricingPlan = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='mt-28' data-aos="fade-up">
            <div className='flex justify-center'>
                <div>
                    <button className='text-xl text-primary font-bold lg:ml-32 ml-16 mb-8 text-center px-12 py-3 rounded-full bg-white shadow-xl shadow-blue-300'>Pricing Plan</button>
                    <h1 className='lg:text-4xl text-2xl font-bold'>Our <span className='text-primary'>Awesome</span> Pricing Plans</h1>
                </div>
            </div>
            <div>
                <div className="tabs-container">
                    <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
                        <TabList>
                            <div className='lg:flex justify-center mb-10'>
                                <CustomTab isSelected={selectedTab === 0} onClick={() => handleTabSelect(0)} ><p className='font-bold ml-3'>Monthly</p> </CustomTab>
                                <CustomTab isSelected={selectedTab === 1} onClick={() => handleTabSelect(1)}><p className='font-bold ml-3'>Yearly <span className='text-sm px-3 py-1 rounded-md bg-gray-300'>save 20%</span> </p></CustomTab>
                            </div>
                        </TabList>

                        <TabPanel>
                            <div className='lg:grid grid-cols-3 gap-5 lg:mt-10'>
                                <div className="card lg:w-96 bg-white shadow-xl lg:mb-0 mb-20">
                                    <div>
                                        <div className='pl-5 pt-5 pb-3'>
                                            <h2 className="card-title font-bold mb-2">
                                                Basic Plan
                                            </h2>
                                            <p className='text-gray-500'>Our purpose is to build solutions that <br /> remove barriers preventing people.</p>
                                        </div>
                                        <div>
                                            <p className='text-2xl text-white bg-primary px-10  py-5 text-center font-bold'>$29 /monthly</p>
                                        </div>
                                        <div className='pt-5 pb-3 text-gray-600'>
                                            <p className='mb-5 flex gap-2 items-center px-7 '><AiOutlineCheck className='text-blue-600' />24/7 system monitoring</p>
                                            <p className='bg-gray-200 px-2 py-3   mb-5 flex gap-1 items-center lg:w-80 w-60 ml-5'><AiOutlineCheck className='text-blue-600' />Security management</p>
                                            <p className='mb-5 px-7  flex gap-2 items-center'><AiOutlineCheck className='text-blue-600' />Secure finance backup</p>
                                            <p className='mb-5 px-7  flex gap-2 items-center'><AiOutlineCheck className='text-blue-600' />Remote support</p>
                                        </div>
                                        <button className='btn btn-primary lg:w-80 w-56 ml-10 lg:ml-8 mb-7 rounded-full normal-case text-white font-bold'>Get a free trial</button>
                                    </div>
                                </div>
                                <div className="card lg:w-96 bg-white shadow-xl lg:mb-0  mb-10  ">
                                    <div className='absolute top-[-50px] p-3 bg-gray-400 w-full rounded-t-xl'>
                                        <p className='text-center text-white font-bold text-base'>Recommended</p>
                                    </div>
                                    <div>
                                        <div className='pl-5 pt-5 pb-3'>
                                            <h2 className="card-title font-bold mb-2">
                                                Basic Plan
                                            </h2>
                                            <p className='text-gray-500'>Our purpose is to build solutions that <br /> remove barriers preventing people.</p>
                                        </div>
                                        <div>
                                            <p className='text-2xl text-white bg-primary px-10  py-5 text-center font-bold'>$49 /monthly</p>
                                        </div>
                                        <div className='pt-5 pb-3 text-gray-600'>
                                            <p className='mb-5 flex gap-2 items-center px-7 '><AiOutlineCheck className='text-blue-600' />24/7 system monitoring</p>
                                            <p className='bg-gray-200 px-2 py-3   mb-5 flex gap-1 items-center lg:w-80 w-60 ml-5'><AiOutlineCheck className='text-blue-600' />Security management</p>
                                            <p className='mb-5 px-7  flex gap-2 items-center'><AiOutlineCheck className='text-blue-600' />Secure finance backup</p>
                                            <p className='mb-5 px-7  flex gap-2 items-center'><AiOutlineCheck className='text-blue-600' />Remote support</p>
                                        </div>
                                        <button className='btn btn-primary lg:w-80 w-56 ml-10 lg:ml-8 mb-7 rounded-full normal-case text-white font-bold'>Get a free trial</button>
                                    </div>
                                </div>
                                <div className="card lg:w-96 bg-white shadow-xl lg:mb-0 mb-10">
                                    <div>
                                        <div className='pl-5 pt-5 pb-3'>
                                            <h2 className="card-title font-bold mb-2">
                                                Basic Plan
                                            </h2>
                                            <p className='text-gray-500'>Our purpose is to build solutions that <br /> remove barriers preventing people.</p>
                                        </div>
                                        <div>
                                            <p className='text-2xl text-white bg-primary px-10  py-5 text-center font-bold'>$59 /monthly</p>
                                        </div>
                                        <div className='pt-5 pb-3 text-gray-600'>
                                            <p className='mb-5 flex gap-2 items-center px-7 '><AiOutlineCheck className='text-blue-600' />24/7 system monitoring</p>
                                            <p className='bg-gray-200 px-2 py-3   mb-5 flex gap-1 items-center lg:w-80 w-60 ml-5'><AiOutlineCheck className='text-blue-600' />Security management</p>
                                            <p className='mb-5 px-7  flex gap-2 items-center'><AiOutlineCheck className='text-blue-600' />Secure finance backup</p>
                                            <p className='mb-5 px-7  flex gap-2 items-center'><AiOutlineCheck className='text-blue-600' />Remote support</p>
                                        </div>
                                        <button className='btn btn-primary lg:w-80 w-56 ml-10 lg:ml-8 mb-7 rounded-full normal-case text-white font-bold'>Get a free trial</button>
                                    </div>
                                </div>


                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='lg:grid grid-cols-3 gap-5 lg:mt-10'>
                                <div className="card lg:w-96 bg-white shadow-xl lg:mb-0 mb-20">
                                    <div>
                                        <div className='pl-5 pt-5 pb-3'>
                                            <h2 className="card-title font-bold mb-2">
                                                Basic Plan
                                            </h2>
                                            <p className='text-gray-500'>Our purpose is to build solutions that <br /> remove barriers preventing people.</p>
                                        </div>
                                        <div>
                                            <p className='text-2xl text-white bg-primary px-10  py-5 text-center font-bold'>$299 yearly</p>
                                        </div>
                                        <div className='pt-5 pb-3 text-gray-600'>
                                            <p className='mb-5 flex gap-2 items-center px-7 '><AiOutlineCheck className='text-blue-600' />24/7 system monitoring</p>
                                            <p className='bg-gray-200 px-2 py-3   mb-5 flex gap-1 items-center lg:w-80 w-60 ml-5'><AiOutlineCheck className='text-blue-600' />Security management</p>
                                            <p className='mb-5 px-7  flex gap-2 items-center'><AiOutlineCheck className='text-blue-600' />Secure finance backup</p>
                                            <p className='mb-5 px-7  flex gap-2 items-center'><AiOutlineCheck className='text-blue-600' />Remote support</p>
                                        </div>
                                        <button className='btn btn-primary lg:w-80 w-56 ml-10 lg:ml-8 mb-7 rounded-full normal-case text-white font-bold'>Get a free trial</button>
                                    </div>
                                </div>
                                <div className="card lg:w-96 bg-white shadow-xl lg:mb-0 mb-10  ">
                                    <div className='absolute top-[-50px] p-3 bg-gray-400 w-full rounded-t-xl'>
                                        <p className='text-center text-white font-bold text-base'>Recommended</p>
                                    </div>
                                    <div>
                                        <div className='pl-5 pt-5 pb-3'>
                                            <h2 className="card-title font-bold mb-2">
                                                Basic Plan
                                            </h2>
                                            <p className='text-gray-500'>Our purpose is to build solutions that <br /> remove barriers preventing people.</p>
                                        </div>
                                        <div>
                                            <p className='text-2xl text-white bg-primary px-10  py-5 text-center font-bold'>$499 yearly</p>
                                        </div>
                                        <div className='pt-5 pb-3 text-gray-600'>
                                            <p className='mb-5 flex gap-2 items-center px-7 '><AiOutlineCheck className='text-blue-600' />24/7 system monitoring</p>
                                            <p className='bg-gray-200 px-2 py-3   mb-5 flex gap-1 items-center lg:w-80 w-60 ml-5'><AiOutlineCheck className='text-blue-600' />Security management</p>
                                            <p className='mb-5 px-7  flex gap-2 items-center'><AiOutlineCheck className='text-blue-600' />Secure finance backup</p>
                                            <p className='mb-5 px-7  flex gap-2 items-center'><AiOutlineCheck className='text-blue-600' />Remote support</p>
                                        </div>
                                        <button className='btn btn-primary lg:w-80 w-56 ml-10 lg:ml-8 mb-7 rounded-full normal-case text-white font-bold'>Get a free trial</button>
                                    </div>
                                </div>
                                <div className="card lg:w-96 bg-white shadow-xl lg:mb-0 mb-10">
                                    <div>
                                        <div className='pl-5 pt-5 pb-3'>
                                            <h2 className="card-title font-bold mb-2">
                                                Basic Plan
                                            </h2>
                                            <p className='text-gray-500'>Our purpose is to build solutions that <br /> remove barriers preventing people.</p>
                                        </div>
                                        <div>
                                            <p className='text-2xl text-white bg-primary px-10  py-5 text-center font-bold'>$599 yearly</p>
                                        </div>
                                        <div className='pt-5 pb-3 text-gray-600'>
                                            <p className='mb-5 flex gap-2 items-center px-7 '><AiOutlineCheck className='text-blue-600' />24/7 system monitoring</p>
                                            <p className='bg-gray-200 px-2 py-3   mb-5 flex gap-1 items-center lg:w-80 w-60 ml-5'><AiOutlineCheck className='text-blue-600' />Security management</p>
                                            <p className='mb-5 px-7  flex gap-2 items-center'><AiOutlineCheck className='text-blue-600' />Secure finance backup</p>
                                            <p className='mb-5 px-7  flex gap-2 items-center'><AiOutlineCheck className='text-blue-600' />Remote support</p>
                                        </div>
                                        <button className='btn btn-primary lg:w-80 w-56 ml-10 lg:ml-8 mb-7 rounded-full normal-case text-white font-bold'>Get a free trial</button>
                                    </div>
                                </div>


                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default PricingPlan;
