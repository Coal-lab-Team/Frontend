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
            <form>
                <div className=' flex-col flex'>
                    <label className=' justify-start'> Email</label>
                    <input className=' border rounded-md' placeholder='Enter your email address'/>
                </div>

            </form>

        </div>

    </div>
    </>
  )
}

export default page