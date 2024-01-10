import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

type ResetPasswordModalProps = {
  onClose: () => void; // Function to close the modal
};

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({ onClose }) => {
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#153333]">
    <div className=' items-center justify-center rounded-md bg-[#f1f1f1f1]  w-[611px] h-[553px] p-[80px]'>
        <form>

            <div className=' justify-start w-full flex-col flex'>
                <div  className=" flex justify-end ">
                    <button type="button" onClick={onClose}>

                    <IoIosCloseCircleOutline className="w-[32px] h-[32px] " />
                    </button>
                </div>
                <h2 className=' font-bold text-2xl'>Reset password</h2>
                <p className='mt-[8px]'>Enter your new password</p>
            </div>
            <div className=' flex-col flex w-full h-[86px] mt-[40px]'>
                <label className=' justify-start w-full'>New Password</label>
                    <div className="flex items-center w-full border rounded-md mt-[8px] ">
                        <input
                        className="w-full p-[16px] outline-none bg-transparent"
                        placeholder="Password"
                        />
                        <div className="p-[14px]">
                        <IoEyeOutline className="text-gray-400" />
                        </div>
                    </div>
            </div>
            <div className=' flex-col flex w-full h-[86px] mt-[24px]'>
                <label className=' justify-start w-full'>Confirm New Password</label>
                    <div className="flex items-center border rounded-md w-full h-[54px] mt-[8px]">
                        <div className=' justify-start flex items-center mr-2 p-[14px]'>
                            <input
                                className="w-full h-full p-[16px] outline-none bg-transparent"
                                placeholder="Password"
                            />
                        </div>
                    </div>
            </div>
            <button className='rounded-md bg-[#265D5C] w-full h-[45px]  text-[#f1f1f1f1] mt-[32px] '>Send recovery instructions</button>
        </form>
    </div>
    </div>
    </>
  );
};

export default ResetPasswordModal;
