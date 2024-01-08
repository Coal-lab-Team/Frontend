import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



function page() {
  return (
    <>
    <div className='flex flex-col gap-y-2  items-center justify-center min-h-screen'>
        <Image src="/assets/logo.svg" alt='logo' width={180} height={60}/>
        <div className=' flex flex-col w-[475px] h-[468px] mt-6'>
            <div className=' items-center justify-center flex-col flex'>
                <h2 className=' font-bold text-31'>Welcome Back!</h2>
                <p>Login to  continue to your account...</p>
            </div>
            <form className=' items-center justify-center flex flex-col'>
                <div className=' flex-col flex w-full h-[86px] mt-[32px]'>
                    <label className=' justify-start'> Email</label>
                    <input className=' border rounded-md w-full h-[54px] p-[16px]' placeholder='Enter your email address'/>
                </div>
                <div className=' flex-col flex w-full h-[86px] mt-[32px]'>
                    <label className=' justify-start w-full'>Password</label>
                    <input className=' border rounded-md w-full  h-[54px] p-[16px]' placeholder='Enter your Password'/>
                </div>
                
                    <button className='rounded-md bg-[#265D5C] w-full h-[45px]  text-[#f1f1f1f1] mt-[32px] '> Login</button>

            </form>
            <div className='flex flex-row gap-[188px] mt-[16px]'>
                <div>
                <input type="checkbox"/>
                <label>Remember me</label>
                </div>
                <div>
                <Link href={'#'} className='text-[#265D5C]'>Forgot password?</Link>
                </div>
            </div>
            <div className=' items-center justify-center flex mt-[32px] font-normal'>
                <label>Don&apos;t have an account?</label>
                <Link href={'./signup'} className=' text-[#265D5C]'>Create account</Link>
            </div>



        </div>

    </div>
    </>
  )
}

export default page