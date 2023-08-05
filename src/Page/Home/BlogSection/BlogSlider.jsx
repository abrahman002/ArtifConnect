import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';


const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'absolute',
                background: 'gray',
                width: '40px',
                height: '40px',
                padding: "10px",
                borderRadius: '50%',
                bottom: '0px', // Set the bottom position here
                right: '10px', // Set the right position here
                top: "-50px"
            }}
            onClick={onClick}
        />
    );
};

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'absolute',
                zIndex: '1',
                background: 'gray',
                width: '40px',
                height: '40px',
                padding: "10px",
                borderRadius: '50%',
                bottom: '0px', // Set the bottom position here
                top: "-50px",
                left: '90%', // Set the left position here
            }}
            onClick={onClick}
        />
    );
};


const CustomNextArrowMobile = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                position: 'absolute',
                zIndex: '1',
                background: 'gray',
                width: '30px',
                height: '30px',
                padding: '5px',
                borderRadius: '50%',
                bottom: '0px', // Set the bottom position here
                left: '0px', // Set the left position here
                top: '0px'
            }}
            onClick={onClick}
        />
    );
};
const CustomPrevArrowMobile = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                position: 'absolute',
                zIndex: '1',
                background: 'gray',
                width: '30px',
                height: '30px',
                padding: '5px',
                borderRadius: '50%',
                bottom: '0px', // Set the bottom position here
                left: '50px', // Set the left position here
                top: '0px'
            }}
            onClick={onClick}
        />
    );
};

const BlogSlider = () => {





    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <CustomNextArrowMobile />, // Use a different custom "next" button for mobile
                    prevArrow: <CustomPrevArrowMobile />, // Use a different custom "previous" button for mobile
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
        nextArrow: <CustomNextArrow />, // Custom "next" button component for desktop
        prevArrow: <CustomPrevArrow />, // Custom "previous" button component for desktop
    };

    return (
        <div className='  lg:px-0 px-2 '>
            <Slider {...settings}>

                <div className="card lg:w-96 bg-base-100 shadow rounded-none lg:mt-0 mt-10">
                    <figure><img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/theme3-600x419.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>July 24,2021</p>
                        <h2 className="card-title">Virtual Classroom Software Development for Teaching</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, assumenda molestiae doloremque voluptas ullam porro?</p>
                        <div className="card-actions  justify-around border-t-2 mt-3 items-center">
                            <div className='flex items-center lg:gap-2  mt-3'>
                                <img className='w-9' src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/favicon-90x90.png" alt="" />
                                <p className='text-black font-semibold '>Rayan Colins</p>
                            </div>
                            <Link className='underline hover:text-primary mt-3 text-black font-semibold flex items-center gap-2'>More Details <BsArrowRight className='text-primary'></BsArrowRight></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 bg-base-100 shadow rounded-none lg:mt-0 mt-10">
                    <figure><img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/theme2-600x419.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>July 24,2021</p>
                        <h2 className="card-title">Virtual Classroom Software Development for Teaching</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, assumenda molestiae doloremque voluptas ullam porro?</p>
                        <div className="card-actions justify-around border-t-2 mt-3 items-center">
                            <div className='flex items-center lg:gap-2 mt-3'>
                                <img className='w-9' src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/favicon-90x90.png" alt="" />
                                <p className='text-black font-semibold '>Rayan Colins</p>
                            </div>
                            <Link className='underline hover:text-primary mt-3 text-black font-semibold flex items-center gap-2'>More Details <BsArrowRight className='text-primary'></BsArrowRight></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 bg-base-100 shadow rounded-none lg:mt-0 mt-10">
                    <figure><img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/theme1-600x419.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>July 24,2021</p>
                        <h2 className="card-title">Virtual Classroom Software Development for Teaching</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, assumenda molestiae doloremque voluptas ullam porro?</p>
                        <div className="card-actions justify-around border-t-2 mt-3 items-center">
                            <div className='flex items-center lg:gap-2 mt-3'>
                                <img className='w-9' src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/favicon-90x90.png" alt="" />
                                <p className='text-black font-semibold '>Rayan Colins</p>
                            </div>
                            <Link className='underline hover:text-primary mt-3 text-black font-semibold flex items-center gap-2'>More Details <BsArrowRight className='text-primary'></BsArrowRight></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 bg-base-100 shadow rounded-none lg:mt-0 mt-10">
                    <figure><img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/07/h2-blog1-600x419.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>July 24,2021</p>
                        <h2 className="card-title">Virtual Classroom Software Development for Teaching</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, assumenda molestiae doloremque voluptas ullam porro?</p>
                        <div className="card-actions justify-around border-t-2 mt-3 items-center">
                            <div className='flex items-center lg:gap-2 mt-3'>
                                <img className='w-9' src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/favicon-90x90.png" alt="" />
                                <p className='text-black font-semibold '>Rayan Colins</p>
                            </div>
                            <Link className='underline hover:text-primary mt-3 text-black font-semibold flex items-center gap-2'>More Details <BsArrowRight className='text-primary'></BsArrowRight></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 bg-base-100 shadow rounded-none lg:mt-0 mt-10">
                    <figure><img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/07/h2-blog2-600x419.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>July 24,2021</p>
                        <h2 className="card-title">Virtual Classroom Software Development for Teaching</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, assumenda molestiae doloremque voluptas ullam porro?</p>
                        <div className="card-actions justify-around border-t-2 mt-3 items-center">
                            <div className='flex items-center lg:gap-2 mt-3'>
                                <img className='w-9' src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/favicon-90x90.png" alt="" />
                                <p className='text-black font-semibold '>Rayan Colins</p>
                            </div>
                            <Link className='underline hover:text-primary mt-3 text-black font-semibold flex items-center gap-2'>More Details <BsArrowRight className='text-primary'></BsArrowRight></Link>
                        </div>
                    </div>
                </div>


            </Slider>

        </div>
    );
};

export default BlogSlider;