import Image from 'next/image';
import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import Success from "@/public/assets/success.png"

type ChangePasswordModalProps = {
  onClose: () => void; // Function to close the modal
};

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ onClose }) => {
  return (
    <>
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center z-50  bg-[#153333] bg-opacity-[50%]">
        <div className=' mt-[30px] p-[64px] justify-center items-center flex rounded-md bg-[#f1f1f1f1] w-[611px] h-[414px] p-[ 80px]'>
            <form>
                        <div  className="  flex  justify-end items-end  top-0 right-0">
                            <button type="button" onClick={onClose}>
                            <IoIosCloseCircleOutline className="w-[32px] h-[32px] " />
                            </button>
                        </div>
                <div className='  flex  items-center justify-center flex-col w-[328px] h-[254px]'>

                    <div className=' justify-center  items-center w-full flex-col flex '>

                        <div className=' justify-center items-center flex'>
                            <Image src={Success} alt='success w-[64px] h-[65px]'  />
                        </div>
                    </div>
                    <div className=' justify-center  items-center flex flex-col mt-[24px]'>
                        <h2 className=' font-bold text-2xl'>Password Changed</h2>
                        <p className='mt-[12px]'>Your Password has been Successfully changed</p>
                    </div>
                    <button className='rounded-md bg-[#265D5C] w-full h-[45px]  text-[#f1f1f1f1] mt-[40px]'>Log in to your Account</button>

                </div>
            </form>
        </div>
    </div>
    </>
  );
};

export default ChangePasswordModal;
