import React from 'react';
import { BsArrowRight } from "react-icons/bs";


const Button = () => {
    return (
        <div className='flex items-center gap-8 w-full'>
            <div className="form-control  border-r-2 border-l-2">
                <input type="text" placeholder="Search" className="input input-bordered border px-5 py-3 w-36 rounded-md mr-2 ml-2" />
            </div>
            <button className='bg-blue-600 text-white px-4 py-3 shadow-lg shadow-blue-500 rounded-full flex gap-2 items-center'>Get a quote now<BsArrowRight /></button>
        </div>
    );
};

export default Button;