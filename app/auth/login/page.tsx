import React from 'react'
import Image from 'next/image'



function page() {
  return (
    <>
    <div className='flex flex-col gap-y-2  items-center justify-center min-h-screen'>
        <Image src="/assets/logo.svg" alt='logo' width={100} height={30}/>
        <div className=' flex flex-col w-[475px] h-[468px] border border-[#f1f1f1]'>
            <div className=' items-center justify-center flex-col flex'>
                <h2>Welcome Back!</h2>
                <p>Login to  continue to your account...</p>
            </div>
            <form className=' items-center justify-center flex flex-col'>
                <div className=' flex-col flex w-full h-[86px] mt-[32px]'>
                    <label className=' justify-start  '> Email</label>
                    <input className=' border rounded-md w-full h-[54px] p-[16]' placeholder='Enter your email address'/>
                </div>
                <div className=' flex-col flex w-full h-[86px] mt-[32px]'>
                    <label className=' justify-start w-full'>Password</label>
                    <input className=' border rounded-md w-full  h-[54px] p-[16]' placeholder='Enter your Password'/>
                </div>
                
                    <button className='rounded-md bg-[#265D5C] w-[90px] h-[45px]  text-[#f1f1f1f1] mt-[32px] '> Login</button>

            </form>
            <div>
                <input/>
            </div>

        </div>

    </div>
    </>
  )
}

export default page