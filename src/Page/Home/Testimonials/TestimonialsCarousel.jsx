import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
                right: '50px', // Set the right position here
                top: "300px"
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
                top: "300px",
                left: '450px', // Set the left position here
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
          left: '250px', // Set the left position here
          top:'300px'
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
          left: '200px', // Set the left position here
          top:'300px'
        }}
        onClick={onClick}
      />
    );
  };

const TestimonialsCarousel = () => {
    // var settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
        <div className='lg:w-[600px] w-[350px]  lg:mt-[100px]  lg:px-0 px-2 '>
            <Slider {...settings}>
                <div className='bg-white lg:p-10 p-5  '>
                    <div className="rating mb-5">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div>
                        <h1 className='lg:text-xl text-gray-400 '>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, reiciendis in nobis nisi possimus obcaecati accusamus nostrum aperiam harum corporis. Maiores deleniti quos vitae officiis!"</h1>
                    </div>
                    <div className='mt-5 flex items-center gap-5'>
                        <img className='rounded-full w-20 border-blue-400 border-r-8 border-2 ' src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=" alt="" />
                        <div>
                            <h1 className='text-base font-bold'>Elizabeth</h1>
                            <p className='text-primary font-bold '>CEO /FOUNDER</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white lg:p-10 p-5 '>
                    <div className="rating mb-5">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div>
                        <h1 className='lg:text-xl text-gray-400 '>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, reiciendis in nobis nisi possimus obcaecati accusamus nostrum aperiam harum corporis. Maiores deleniti quos vitae officiis!"</h1>
                    </div>
                    <div className='mt-5 flex items-center gap-5'>
                        <img className='rounded-full w-20 border-blue-400 border-r-8 border-2 ' src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=" alt="" />
                        <div>
                            <h1 className='text-base font-bold'>Elizabeth</h1>
                            <p className='text-primary font-bold '>CEO /FOUNDER</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white lg:p-10 p-5 '>
                    <div className="rating mb-5">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div>
                        <h1 className='lg:text-xl text-gray-400 '>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, reiciendis in nobis nisi possimus obcaecati accusamus nostrum aperiam harum corporis. Maiores deleniti quos vitae officiis!"</h1>
                    </div>
                    <div className='mt-5 flex items-center gap-5'>
                        <img className='rounded-full w-20 border-blue-400 border-r-8 border-2 ' src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=" alt="" />
                        <div>
                            <h1 className='text-base font-bold'>Elizabeth</h1>
                            <p className='text-primary font-bold '>CEO /FOUNDER</p>
                        </div>
                    </div>
                </div>

            </Slider>

        </div>
    );
};

export default TestimonialsCarousel;