import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

type ChangePasswordModalProps = {
  onClose: () => void; // Function to close the modal
};

const ForgotPasswordModal: React.FC<ChangePasswordModalProps> = ({ onClose }) => {
  return (
    <>
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center z-50  bg-[#153333] bg-opacity-[50%]">
    <div className=' mt-[30px] p-[64px] rounded-md bg-[#f1f1f1f1] w-[611px] h-[389px] p-[ 80px]'>
    <form>

        <div className=' justify-end items-end w-full flex-col flex'>
            <div  className=" flex  ">
                <button type="button" onClick={onClose}>

                <IoIosCloseCircleOutline className="w-[32px] h-[32px] " />
                </button>
            </div>
        </div>
        <div>
            <h2 className=' font-bold text-2xl'>Forgot your Password?</h2>
            <p className='mt-[8px]'>Enter your registered Email to receive reset instructions</p>
        </div>

        <button className='rounded-md bg-[#265D5C] w-full h-[45px]  text-[#f1f1f1f1] mt-[32px] '>Send recovery instructions</button>
    </form>
    </div>
    </div>
    </>
  );
};

export default ForgotPasswordModal;
