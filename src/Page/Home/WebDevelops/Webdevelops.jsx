import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import './webdevelops.css'; // Import your CSS file
import AOS from "aos";
import "aos/dist/aos.css";

const Webdevelops = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div data-aos="fade-up" className="webdevelops-container lg:ml-20  ml-5 mr-5 lg:mr-20  rounded-xl mt-10 lg:h-[350px] ">
            <div className='flex justify-center text-center'>
                <h1 className='lg:text-3xl text-2xl mb-10 lg:mb-0 text-white font-bold lg:mt-16 mt-5'>We develops strategic software solutions for businesses.</h1>
            </div>
            <div className=' lg:grid grid-cols-4 gap-10 lg:mt-16 text-center'>
                <div className='text-white font-bold text-3xl lg:mb-0 mb-5'>
                    <CountUp
                        start={0}
                        end={2003}
                        duration={2.75}
                        separator=" "

                    >

                    </CountUp>
                    <h1 className='text-2xl text-white'>Year of <br /> establishment</h1>
                </div>
                <div className='text-white font-bold text-3xl lg:mb-0 mb-5'>
                    <CountUp
                        start={0}
                        end={2500}
                        duration={2.75}
                        separator=" "
                    />+
                    <h1 className='text-2xl text-white'>Of customers <br /> worldwide</h1>
                </div>
                <div className='text-white font-bold text-3xl lg:mb-0 mb-5'>
                    <CountUp
                        start={0}
                        end={14}
                        duration={2.75}
                        separator=" "

                    >

                    </CountUp>+
                    <h1 className='text-2xl text-white'>Countries with active <br /> client base</h1>
                </div>
                <div className='text-white font-bold text-3xl'>
                    <CountUp
                        start={0}
                        end={4.9} // 4.9 is represented as 49
                        duration={2.75}
                        separator=" "
                        decimals={1} // Display one decimal place
                        suffix="/5" // Add the "/5" suffix
                    />
                    <h1 className='text-2xl text-white'>Customer <br /> rating</h1>
                </div>
            </div>
            <div>
                <h1 className='text-white text-center lg:mt-12 lg:p-0 p-5 font-semibold'>You have better things to do than worry about IT for your small business. <span className='text-black'>Let’s Discuss about Project.</span></h1>
            </div>
        </div>
    );
};

export default Webdevelops;
