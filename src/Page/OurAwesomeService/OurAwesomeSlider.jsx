import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ourslider.css';

export default class OurAwesomeSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
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
      <div className="lg:mt-16">
        <Slider {...settings}>

          <div className="bg-white  py-10  lg:px-5 p-3  text-center card-slider rounded-md ">
            <img className="w-20  shadow-xl shadow-blue-300  lg:ml-20  ml-28" src="https://i.ibb.co/SsmDhx0/user-experience.png" alt="" />
            <h1 className="text-xl  font-bold p-5 "><span>Ul/UX Design</span></h1>
            <p className="text-border  lg:ml-20 ml-28 mb-5"></p>
            <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia.</p>
          </div>
          <div className="bg-white  py-10  lg:px-5 p-3  text-center card-slider rounded-md ">
            <img className="w-20  shadow-xl shadow-blue-300  lg:ml-20  ml-28" src="https://i.ibb.co/SsmDhx0/user-experience.png" alt="" />
            <h1 className="text-xl  font-bold p-5 "><span>Ul/UX Design</span></h1>
            <p className="text-border  lg:ml-20 ml-28 mb-5"></p>
            <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia.</p>
          </div>
          <div className="bg-white  py-10  lg:px-5 p-3  text-center card-slider rounded-md ">
            <img className="w-20  shadow-xl shadow-blue-300  lg:ml-20  ml-28" src="https://i.ibb.co/SsmDhx0/user-experience.png" alt="" />
            <h1 className="text-xl  font-bold p-5 "><span>Ul/UX Design</span></h1>
            <p className="text-border  lg:ml-20 ml-28 mb-5"></p>
            <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia.</p>
          </div>
          <div className="bg-white  py-10  lg:px-5 p-3  text-center card-slider rounded-md ">
            <img className="w-20  shadow-xl shadow-blue-300  lg:ml-20  ml-28" src="https://i.ibb.co/SsmDhx0/user-experience.png" alt="" />
            <h1 className="text-xl  font-bold p-5 "><span>Ul/UX Design</span></h1>
            <p className="text-border  lg:ml-20 ml-28 mb-5"></p>
            <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia.</p>
          </div>
          <div className="bg-white  py-10  lg:px-5 p-3  text-center card-slider rounded-md ">
            <img className="w-20  shadow-xl shadow-blue-300  lg:ml-20  ml-28" src="https://i.ibb.co/SsmDhx0/user-experience.png" alt="" />
            <h1 className="text-xl  font-bold p-5 "><span>Ul/UX Design</span></h1>
            <p className="text-border  lg:ml-20 ml-28 mb-5"></p>
            <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia.</p>
          </div>
          <div className="bg-white  py-10  lg:px-5 p-3  text-center card-slider rounded-md ">
            <img className="w-20  shadow-xl shadow-blue-300  lg:ml-20  ml-28" src="https://i.ibb.co/SsmDhx0/user-experience.png" alt="" />
            <h1 className="text-xl  font-bold p-5 "><span>Ul/UX Design</span></h1>
            <p className="text-border  lg:ml-20 ml-28 mb-5"></p>
            <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia.</p>
          </div>



        </Slider>
      </div>
    );
  }
}