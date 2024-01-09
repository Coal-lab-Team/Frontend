import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/navs/navbar';

function page() {
    const title = "The page you were looking for could not be found.";
    const subTitle = "It seems this page is missing. Please check the URL or go home."
    return(
        <>
            <Navbar/>
           <div id=''>
           <div className=''>
           <img src='./assets/Group.png' alt="Image" />

            </div>
            <div className='grid text-center px-4  place-items-center '>
            <h3>{title}</h3>
            <h4 className='grid'>{subTitle}</h4>
            <button type='button' className='capitalize flex justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>go home</button>

            </div>
            
           </div>
        </>
    )
}

export default page;