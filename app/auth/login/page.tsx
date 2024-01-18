"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import ForgotPassModal from '@/components/ForgotPassModal/forgotPassModal';



function LoginPage() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword: any) => !prevShowPassword);
    };
    
  
  return (
    <>
      <div className="flex flex-col gap-y-2  items-center justify-center min-h-screen">
        <Image src="/assets/logo.svg" alt="logo" width={180} height={60} />

        <div className=" flex flex-col md:w-[475px] w-[270px] md:h-[468px]  mt-6">
          <div className=" items-center justify-center flex-col flex">
            <h2 className=" font-bold text-2xl">Welcome Back!</h2>
            <p className=" text-[14px]">Login to continue to your account...</p>
          </div>
          <form className=" items-center justify-center flex flex-col">
            <div className=" flex-col flex w-full h-[86px] mt-[32px]">
              <label className=" justify-start"> Email</label>
              <input
                className=" border rounded-md w-full h-[54px] p-[16px]"
                placeholder="Enter your email address"
              />
            </div>
            {/* <div className=" flex-col flex w-full h-[86px] mt-[32px]">
              <label className=" justify-start w-full">Password</label>
              <input
                className=" border rounded-md w-full  h-[54px] p-[16px]"
                placeholder="Enter your Password"
              />
              <div className="p-[14px]" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <IoEyeOffOutline className="text-gray-400 cursor-pointer" />
                ) : (
                  <IoEyeOutline className="text-gray-400 cursor-pointer" />
                )}
              </div>
            </div> */}
              <label className=" justify-start w-full">Password</label>
            <div className="flex items-center w-full border rounded-md mt-[32px]">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-[16px] outline-none bg-transparent"
                placeholder="Password"
              />
              <div className="p-[14px]" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <IoEyeOffOutline className="text-gray-400 cursor-pointer" />
                ) : (
                  <IoEyeOutline className="text-gray-400 cursor-pointer" />
                )}
              </div>
            </div>

            <button className="rounded-md bg-[#265D5C] w-full h-[45px]  text-[#f1f1f1f1] mt-[32px] ">
              {" "}
              Login
            </button>
          </form>
          <div className="flex flex-row justify-between mt-[16px] text-[16px]">
            <div className=" flex items-center justify-center ">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <div>
              {/* <Link href={'./forgotPassword'} className='text-[#265D5C]'>Forgot password?</Link> */}
              <button onClick={openModal} className="text-[#265D5C]">
                Forgot Password?
              </button>
              {showModal && <ForgotPassModal onClose={closeModal} />}
            </div>
          </div>
          <div className=" items-center justify-center flex mt-[32px] font-normal text-[14px]">
            <label>Don&apos;t have an account?</label>
            <Link href={"./signup"} className=" text-[#265D5C]">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage


