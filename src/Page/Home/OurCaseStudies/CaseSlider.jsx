import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'

export default class CaseSlider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 4,
            initialSlide: 0,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="card w-96 card-compact rounded-md  shadow-sm">
                        <figure><img src="https://img.freepik.com/free-photo/business-people-with-clipboard_23-2147984983.jpg?size=626&ext=jpg&ga=GA1.2.1962734003.1691067639&semt=ais" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">
                               Product Engineering
                            </h2>
                            <p className="text-gray-500">4850 McKnight Rd,USA</p>
                           <p className="text-gray-500 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi, voluptates esse similique quidem error.</p>
                        </div>
                    </div>
                    <div className="card w-96 card-compact rounded-md  shadow-sm">
                        <figure><img src="https://img.freepik.com/free-photo/business-people-with-clipboard_23-2147984983.jpg?size=626&ext=jpg&ga=GA1.2.1962734003.1691067639&semt=ais" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">
                               Product Engineering
                            </h2>
                            <p className="text-gray-500">4850 McKnight Rd,USA</p>
                           <p className="text-gray-500 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi, voluptates esse similique quidem error.</p>
                        </div>
                    </div>
                    <div className="card w-96 card-compact rounded-md  shadow-sm">
                        <figure><img src="https://img.freepik.com/free-photo/business-people-with-clipboard_23-2147984983.jpg?size=626&ext=jpg&ga=GA1.2.1962734003.1691067639&semt=ais" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">
                               Product Engineering
                            </h2>
                            <p className="text-gray-500">4850 McKnight Rd,USA</p>
                           <p className="text-gray-500 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi, voluptates esse similique quidem error.</p>
                        </div>
                    </div>
                    <div className="card w-96 card-compact rounded-md  shadow-sm">
                        <figure><img src="https://img.freepik.com/free-photo/business-people-with-clipboard_23-2147984983.jpg?size=626&ext=jpg&ga=GA1.2.1962734003.1691067639&semt=ais" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">
                               Product Engineering
                            </h2>
                            <p className="text-gray-500">4850 McKnight Rd,USA</p>
                           <p className="text-gray-500 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi, voluptates esse similique quidem error.</p>
                        </div>
                    </div>
                    <div className="card w-96 card-compact rounded-md  shadow-sm">
                        <figure><img src="https://img.freepik.com/free-photo/business-people-with-clipboard_23-2147984983.jpg?size=626&ext=jpg&ga=GA1.2.1962734003.1691067639&semt=ais" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">
                               Product Engineering
                            </h2>
                            <p className="text-gray-500">4850 McKnight Rd,USA</p>
                           <p className="text-gray-500 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi, voluptates esse similique quidem error.</p>
                        </div>
                    </div>
                    <div className="card w-96 card-compact rounded-md  shadow-sm">
                        <figure><img src="https://img.freepik.com/free-photo/business-people-with-clipboard_23-2147984983.jpg?size=626&ext=jpg&ga=GA1.2.1962734003.1691067639&semt=ais" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">
                               Product Engineering
                            </h2>
                            <p className="text-gray-500">4850 McKnight Rd,USA</p>
                           <p className="text-gray-500 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi, voluptates esse similique quidem error.</p>
                        </div>
                    </div>
                   
                    
                </Slider>
            </div>
        );
    }
}