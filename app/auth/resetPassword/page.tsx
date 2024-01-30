// import React from 'react'

// function page() {
//   return (
//     <>
//     </>
//   )
// }

// export default page

// "use client";

// import React, { useState } from 'react';
// import ResetPassModal from '../../../components/resetPassModal/resetPassModal';

// const MainComponent: React.FC = () => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className=' items-center justify-center flex flex-col '>
//       <button onClick={openModal} >Reset Password?</button>
//       {showModal && <ResetPassModal onClose={closeModal} />}
//     </div>
//   );
// };

// export default MainComponent;
// Block of Codes Above was for the modal component 

"use client";
import React, { useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'
import Image from 'next/image';


function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword: any) => !prevShowPassword);
  };
  return (
    <>
      <div className=" flex justify-center items-center flex-col gap-y-2 min-h-screen ">
        <Image src="/assets/logo.svg" alt="logo" width={180} height={60} />
        <div className=" items-center justify-center rounded-md bg-[#fff]  md:w-[611px] md:h-[553px] md:p-[80px] p-[30px]">
          <form>
            <div className=" justify-start items-start w-full flex-col flex">
              <h2 className=" font-bold text-2xl">Reset password</h2>
              <p className=" text-[16px] mt-[8px]">Enter your new password</p>
            </div>
            <div className="flex flex-col w-full h-[86px] mt-[40px]">
              <label className="justify-start w-full"> New Password</label>
              <div className="flex items-center w-full border rounded-md mt-[8px]">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-[16px] outline-none bg-transparent"
                  placeholder="Password"
                />
                <div className="p-[14px]" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <IoEyeOutline className="text-gray-400 cursor-pointer" />
                  ) : (
                    <IoEyeOffOutline className="text-gray-400 cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-[86px] mt-[24px]">
              <label className="justify-start w-full">
                Confirm New Password
              </label>
              <div className="flex items-center w-full border rounded-md mt-[8px]">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-[16px] outline-none bg-transparent"
                  placeholder="Password"
                />
                <div className="p-[14px]" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <IoEyeOutline className="text-gray-400 cursor-pointer" />
                  ) : (
                    <IoEyeOffOutline className="text-gray-400 cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
            <button className="rounded-md bg-[#265D5C] w-full h-[45px]  text-[#f1f1f1f1] mt-[32px] ">
              Send recovery instructions
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPasswordPage