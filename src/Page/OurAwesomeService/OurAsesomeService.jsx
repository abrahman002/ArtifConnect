import React from 'react';
import './ourService.css'

const OurAsesomeService = () => {
    return (
        <div className="lg:py-28 py-32  our-service">
            <div className='lg:px-20 px-5'>
                <div className="title flex justify-center" data-swiper-parallax="-300">
                    <div>
                        <h1 className='bg-white text-center lg:mb-10  px-3 py-3 w-72 lg:text-xl  normal-case font-bold rounded-full text-blue-500 shadow-xl shadow-slate-200'>About Our Company</h1>
                        <h1 className='lg:text-4xl text-2xl lg:mt-0 mt-8 lg:mb-0 mb-14 font-extrabold'>We Are <span className='text-primary'>Dedicated</span> To <br />
                            Serve You All Time.
                        </h1>
                    </div>
                </div>
                {/* service card */}
                <div>
                    <div>
                        <img className='w-20 bg-white  px-3 py-3 text-white' src="https://i.ibb.co/64dWgLh/web-design-1.png" alt="" />
                        <h1>UI/UX Design</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAsesomeService;