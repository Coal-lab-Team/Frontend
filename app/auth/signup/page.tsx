import React from 'react'
import Image from 'next/image'
import { FaRegEnvelope } from "react-icons/fa";
import { GoKey } from "react-icons/go";
import Link from 'next/link';

function page() {
  return (
    <>
    <div className='flex flex-col gap-y-2  items-center justify-center min-h-screen'>
        <Image src="/assets/logo.svg" alt='logo' width={180} height={60}/>
        <div className=' flex flex-col w-[475px] h-[666px] mt-6'>
            <div className=' items-center justify-center flex-col flex'>
                <h2 className=' font-bold text-31'>Welcome to Coallab</h2>
                <p>Sign up to start uploading templates that converts!</p>
            </div>

            <form className=' items-center justify-center flex flex-col'>
                <div className=' flex-col flex w-full h-[86px] mt-[40px]'>
                    <label className=' justify-start'>First Name</label>
                    <input className=' border rounded-md w-full h-[54px] p-[14px]' placeholder='First Name'/>
                </div>
                <div className=' flex-col flex w-full h-[86px] mt-[20px]'>
                    <label className=' justify-start w-full'>Last Name</label>
                    <input className=' border rounded-md w-full  h-[54px] p-[14px]' placeholder='Last Name'/>
                </div>

                <div className=' flex-col flex w-full h-[86px] mt-[20px]'>
                    <label className=' justify-start w-full'>Email</label>
                    <div className="flex items-center border rounded-md w-full h-[54px]">
                        <div className=' justify-start flex items-center mr-2 p-[14px]'>
                            <FaRegEnvelope className="text-gray-400 "/>
                            <input
                                className="w-full h-full p-[16px] outline-none bg-transparent"
                                placeholder="olivia@untitledui.com"
                            />
                        </div>
                    </div>
                </div>
                    
                <div className=' flex-col flex w-full h-[86px] mt-[20px]'>
                    <label className=' justify-start w-full'>Create password</label>
                    <div className="flex items-center border rounded-md w-full h-[54px]">
                        <div className=' justify-start flex items-center mr-2 p-[14px]'>
                            <GoKey className="text-gray-400 "/>
                            <input
                                className="w-full h-full p-[16px] outline-none bg-transparent"
                                placeholder="olivia@untitledui.com"
                            />
                        </div>
                    </div>
                </div>
                <div className=' flex-col flex w-full mt-[40px]'>
                    <div>
                        <input type="checkbox" className=' mr-2' />
                        <label>I agree to terms & conditions</label>
                    </div>
                </div>
                    
                <button className='rounded-md bg-[#265D5C] w-full h-[45px]  text-[#f1f1f1f1] mt-[40px] '>Create  Account</button>

            </form>
            <div className=' items-center justify-center flex mt-[20px] font-normal'>
                <label>Already have an account? </label>
                <Link href={'./login'} className=' text-[#265D5C]'>Sign in</Link>
            </div>
        </div>
    </div>
    </>


  )
}

export default page