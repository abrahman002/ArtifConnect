import React from 'react';
import { Link } from 'react-router-dom';
import { BsTelephoneForward, BsMap, BsFacebook, BsTwitter, BsArrowRight } from "react-icons/bs";
import { FiMail } from "react-icons/fi";


const Navber = () => {


    const menu = <>
    {/* Home Menu */}
        <li tabIndex={0}>
            <details>
                <summary>Home</summary>
                <ul className="p-2">

                </ul>
            </details>
        </li>
        {/* Page Menu */}
        <li tabIndex={0}>
            <details>
                <summary>Page</summary>
                <ul className="p-2 w-60 ">
                    <li><Link>About</Link></li>
                    <li><Link>Out Team</Link></li>
                    <li><Link>Team Details</Link></li>
                    <li><Link>Team Details</Link></li>
                    <li><Link>Pricing</Link></li>
                    <li><Link>FAQs</Link></li>
                    <li><Link>Contact Us</Link></li>
                    <li><Link>Error 404</Link></li>

                    <li tabIndex={0}>
                        <details>
                            <summary>Shop</summary>
                            <ul className="p-2 w-48">
                                <li><Link>Our Products</Link></li>
                                <li><Link>Whishlist</Link></li>
                                <li><Link>Cart</Link></li>
                                <li><Link>Checkout</Link></li>
                                <li><Link>Product Details</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary>User Page</summary>
                            <ul className="p-2 w-48">
                                <li><Link>Login</Link></li>
                                <li><Link>Register</Link></li>

                            </ul>
                        </details>
                    </li>

                    <li><Link>Landing</Link></li>
                </ul>
            </details>
        </li>
        {/* Service Menu */}
        <li tabIndex={0}>
            <details>
                <summary>Service</summary>
                <ul className="p-2 w-48">
                    <li><Link>Our Service</Link></li>
                    <li><Link>Service Details </Link></li>
                </ul>
            </details>
        </li>
        {/* Portfolio Menu */}
        <li tabIndex={0}>
            <details>
                <summary>Portfolio</summary>
                <ul className="p-2 w-48">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
{/* Blog Menu */}
        <li tabIndex={0}>
            <details>
                <summary>Blog</summary>
                <ul className="p-2 w-48">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
{/* Elements */}
        <li tabIndex={0}>
            <details>
                <summary>Elements</summary>
                <ul className="p-2 w-48">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>

    </>
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
            <div className="navbar  lg:px-10 border-t-2">

                <div className="navbar-start lg:hidden z-10  ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 mt-3 z-[1] p-2 shadow  rounded-box w-72">
                            {menu}
                        </ul>
                    </div>

                </div>
                {/* Company Name */}
                <Link className=" normal-case text-xl ">ArtifConnect</Link>

                {/*Nav Menu  */}
                <div className="navbar hidden lg:flex z-10">
                    <ul className="menu menu-horizontal px-1 text-base font-bold">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end lg:flex hidden">
                    <div className="form-control w-36 mr-10 border-l-2 border-r-2">
                        <input type="text" placeholder="Search" className="input input-bordered ml-3 mr-3" />
                    </div>
                    <button className='btn btn-primary rounded-full text-white shadow-md shadow-blue-500'>Get a quote now <BsArrowRight className='text-white'></BsArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Navber;