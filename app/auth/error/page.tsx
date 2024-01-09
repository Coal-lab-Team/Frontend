import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/navs/navbar';


function page() {
    const title = "The page you were looking for could not be found.";
    const subTitle = "It seems this page is missing. Please check the URL or go home."
    return(
        <>
            <Navbar/>
           <div className='' id=''>
                <div className='flex flex-col gap-y-2  items-center justify-center min-h-screen'>
                    <Image src="/assets/G404.png" alt="logo" width={758.307} height={374.08} />
                </div>
                 <button className='rounded-md bg-[#265D5C] w-full h-[45px]  text-[#f1f1f1f1] capitalize mt-[32px] '>go home</button>
           </div>
        </>
    )
}

export default page;