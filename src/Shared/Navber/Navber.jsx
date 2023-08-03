import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTelephoneForward, BsMap, BsFacebook, BsTwitter, BsArrowRight } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Logo from '../../assets/Logo.png'
import './navber.css'
import NavLinks from './NavLinks';
import Button from './Button';


const Navber = () => {
    const [open, setOpen] = useState(false);

    // const handleDropdownToggle = () => {
    //     setShowDropdown((prev) => !prev);
    // };


    // const menu = <>
    //     {/* Home Menu */}
    //     <li tabIndex={0}>
    //         <details>
    //             <summary>Home</summary>
    //             <ul className="p-2">

    //             </ul>
    //         </details>
    //     </li>
    //     {/* Page Menu */}
    //     <li tabIndex={0}>
    //         <details>
    //             <summary>Page</summary>
    //             <ul className="p-2 w-60 ">
    //                 <li><Link>About</Link></li>
    //                 <li><Link>Out Team</Link></li>
    //                 <li><Link>Team Details</Link></li>
    //                 <li><Link>Team Details</Link></li>
    //                 <li><Link>Pricing</Link></li>
    //                 <li><Link>FAQs</Link></li>
    //                 <li><Link>Contact Us</Link></li>
    //                 <li><Link>Error 404</Link></li>

    //                 <li tabIndex={0}>
    //                     <details>
    //                         <summary>Shop</summary>
    //                         <ul className="p-2 w-48">
    //                             <li><Link>Our Products</Link></li>
    //                             <li><Link>Whishlist</Link></li>
    //                             <li><Link>Cart</Link></li>
    //                             <li><Link>Checkout</Link></li>
    //                             <li><Link>Product Details</Link></li>
    //                         </ul>
    //                     </details>
    //                 </li>
    //                 <li tabIndex={0}>
    //                     <details>
    //                         <summary>User Page</summary>
    //                         <ul className="p-2 w-48">
    //                             <li><Link>Login</Link></li>
    //                             <li><Link>Register</Link></li>

    //                         </ul>
    //                     </details>
    //                 </li>

    //                 <li><Link>Landing</Link></li>
    //             </ul>
    //         </details>
    //     </li>
    //     {/* Service Menu */}
    //     <li tabIndex={0}>
    //         <details>
    //             <summary>Service</summary>
    //             <ul className="p-2 w-48">
    //                 <li><Link>Our Service</Link></li>
    //                 <li><Link>Service Details </Link></li>
    //             </ul>
    //         </details>
    //     </li>
    //     {/* Portfolio Menu */}
    //     <li tabIndex={0}>
    //         <details>
    //             <summary>Portfolio</summary>
    //             <ul className="p-2 w-48">
    //                 <li><a>Submenu 1</a></li>
    //                 <li><a>Submenu 2</a></li>
    //             </ul>
    //         </details>
    //     </li>
    //     {/* Blog Menu */}
    //     <li tabIndex={0}>
    //         <details>
    //             <summary>Blog</summary>
    //             <ul className="p-2 w-48">
    //                 <li><a>Submenu 1</a></li>
    //                 <li><a>Submenu 2</a></li>
    //             </ul>
    //         </details>
    //     </li>
    //     {/* Elements */}
    //     <li tabIndex={0}>
    //         <details>
    //             <summary>Elements</summary>
    //             <ul className="p-2 w-48">
    //                 <li><a>Submenu 1</a></li>
    //                 <li><a>Submenu 2</a></li>
    //             </ul>
    //         </details>
    //     </li>

    // </>


    return (
        <div>
            {/* top nav */}
            <div className='lg:flex hidden justify-center gap-5 mt-8 mb-8 '>
                <h1 className='text-base text-gray-600 font-semibold  border-r-2 '><span className='mr-2 flex items-center gap-2'><BsTelephoneForward className='text-sky-700'></BsTelephoneForward>(+880) 17556677</span></h1>
                <h1 className='text-base text-gray-600 font-semibold  border-r-2 '><span className='mr-2 flex items-center gap-2'><BsMap className='text-sky-700'></BsMap>380 Albert St,Melbourne,Australia</span></h1>
                <h1 className='text-base text-gray-600 font-semibold  border-r-2 '><span className='mr-2 flex items-center gap-2'><FiMail className='text-sky-700'></FiMail>artifconnect@gmail.com</span></h1>

                <div className='flex gap-5 items-center'>
                    <Link to=""><BsFacebook></BsFacebook></Link>
                    <Link to=""><BsTwitter></BsTwitter></Link>
                </div>
            </div>
            {/* responsive menu */}
            <nav className='bg-white border-t-2 '>
                <div className='flex items-center font-medium justify-around'>
                    {/* logo */}
                    <div className='z-50 p-5 lg:w-auto w-full flex justify-between'>
                        <img src={Logo} alt="logo" className='md:cursor-pointer h-9' />
                        <div className='text-3xl lg:hidden' onClick={()=>setOpen(!open)}>
                        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                        </div>
                    </div>
                    {/*  */}

                    <ul className='lg:flex hidden uppercase  items-center gap-5 font-[Poppins] z-10'>
                        <li>
                            <Link className='py-7 px-3 inline-block'>
                                Home
                            </Link>
                        </li>
                        <NavLinks></NavLinks>
                    </ul>
                    <div className='lg:block hidden'>
                        <Button />
                    </div>

                    {/* Mobile nav */}

                    <ul className={
                        `lg:hidden z-10 bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"} `
                    }>
                        <li>
                            <Link className='py-7 px-3 inline-block'>
                                Home
                            </Link>
                        </li>
                        <NavLinks></NavLinks>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navber;