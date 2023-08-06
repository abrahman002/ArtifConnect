import React, { useEffect } from 'react';
import './footer.css'
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { BsBrowserChrome, BsBehance, BsFillSendCheckFill, BsTelephone } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';




const Footer = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div data-aos="fade-up">
            <footer className='footer-top p-14 text-white lg:flex items-center justify-between'>
                <div>
                    <h1 className='font-bold lg:text-2xl lg:mb-0 mb-5'>Looking for the Best IT Business Solutions?</h1>
                    <p className='text-gray-300 lg:mb-0 mb-5'>As a app web crawler expert, We will help to organize.</p>
                </div>
                <button className='btn btn-primary px-10 rounded-full normal-case shadow-md shadow-blue-400'>Get a quote</button>
            </footer>
            <footer className="footer p-10 text-white footer-bottom pt-16">
                <div>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p className='text-gray-400 mt-5'>We work with a passion of taking <br /> challenges and creating new ones in <br /> advertising sector.</p>
                    <button className='btn btn-primary btn-sm normal-case px-3 rounded-full mt-5'>About us</button>
                </div>
                <div>
                    <span className=" text-xl font-bold text-white">News letter</span>
                    <p className='text-gray-400 mt-5'>Subscribe our newsletter to get our <br /> latest update & news.</p>
                    <div className="form-control">
                        <div className="input-group mt-5">
                            <input type="text" placeholder="Search…" className="input input-bordered footer-bottom" />
                            <button className="btn  text-lg bg-blue-700 hover:bg-blue-950 text-white  ">
                                <BsFillSendCheckFill></BsFillSendCheckFill>
                            </button>
                        </div>
                    </div>
                    {/* social icon */}
                    <div className='mt-5 flex gap-5 items-center'>
                        <Link className='text-2xl'><AiFillFacebook></AiFillFacebook></Link>
                        <Link className='text-2xl'><AiFillTwitterSquare></AiFillTwitterSquare></Link>
                        <Link className='text-2xl'><BsBrowserChrome></BsBrowserChrome></Link>
                        <Link className='text-2xl'><BsBehance></BsBehance></Link>
                    </div>
                </div>
                <div>
                    <span className="text-xl font-bold text-white">Official info:</span>
                    <p className='flex items-center gap-2 mt-5 text-gray-400'><VscLocation className='text-xl text-primary'></VscLocation> 30 Commercial Road <br />
                        Fratton, Australia</p>
                    <p className='flex items-center gap-2 mt-5 text-gray-400'><BsTelephone className='text-xl text-primary'></BsTelephone> +880 166775566</p>

                    <span className="text-lg mt-3 font-semibold text-white">Open Hours:</span>
                    <p className='text-gray-400'>Mon – Sat: 8 am – 5 pm, <br />
                        Sunday: CLOSED</p>
                </div>
                <div>
                    <span className="text-xl font-bold text-white">Gallery</span>
                     <div className='grid grid-cols-3 gap-2 mt-5'>
                        <img className='w-20' src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery1.jpg" alt="" />
                        <img className='w-20' src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery2.jpg" alt="" />
                        <img className='w-20' src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery3.jpg" alt="" />
                        <img className='w-20' src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery4.jpg" alt="" />
                        <img className='w-20' src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery5.jpg" alt="" />
                        <img className='w-20' src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery6.jpg" alt="" />
                     </div>
                </div>
            </footer>
            <footer className='footer-bottom p-10'>
                <div className='lg:block hidden'>
                    <hr />
                </div>
                <h1 className='text-white text-center font-semibold mt-5'>© 2023 Itfirm – ArtifConnect. All rights reserved.</h1>
            </footer>
        </div>
    );
};

export default Footer;