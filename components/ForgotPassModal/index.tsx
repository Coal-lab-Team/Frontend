// import React from 'react';
// import { IoIosCloseCircleOutline } from "react-icons/io";

// type ForgotPasswordModalProps = {
//   onClose: () => void; // Function to close the modal
// };

// const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ onClose }) => {
//   return (
//     <>
//     <div onClick={onClose} className="fixed inset-0 flex items-center justify-center z-50  bg-[#153333] bg-opacity-[50%]">
//     <div className=' mt-[30px] p-[64px] rounded-md bg-[#f1f1f1f1] w-[611px] h-[389px] p-[ 80px]'>
//     <form>

//         <div className=' justify-start w-full flex-col flex'>
//             <div  className=" flex justify-end ">
//                 <button type="button" onClick={onClose}>

//                 <IoIosCloseCircleOutline className="w-[32px] h-[32px] " />
//                 </button>
//             </div>
//             <h2 className=' font-bold text-2xl'>Forgot your Password?</h2>
//             <p className='mt-[8px]'>Enter your registered Email to receive reset instructions</p>
//         </div>
//         <div className=' flex-col flex w-full h-[86px] mt-[24px]'>
//             <label className=' justify-start w-full'>Email</label>
//                 <div className="flex items-center border rounded-md w-full h-[54px] mt-[8px]">
//                     <div className=' justify-start flex items-center mr-2 p-[14px]'>
//                         <input
//                             className="w-full h-full p-[16px] outline-none bg-transparent"
//                             placeholder="Enter email address"
//                         />
//                     </div>
//                 </div>
//         </div>
//         <button className='rounded-md bg-[#265D5C] w-full h-[45px]  text-[#f1f1f1f1] mt-[32px] '>Send recovery instructions</button>
//     </form>
//     </div>
//     </div>
//     </>
//   );
// };

// export default ForgotPasswordModal;

import React from "react";
import Modal from "../Ui/modal";
import Button from "../Ui/Button";

function ForgotPasswordModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      closeOnOverlayClick
      isOpen={isOpen}
      closeModal={onClose}
      isCloseIconPresent={true}
      size="md"
    >
      <div className=" self-center md:max-w-[451px] md:max-h-[261px] flex items-start justify-between flex-col md:m-[80px] m-[30px]">
        {/* <Image src="/assets/success.png" alt="success" width={64} height={65} /> */}
        {/* <h2 className=" mt-[24px] font-bold">Forgot your Password?</h2> */}
        <form>
          <h2 className=" font-bold text-2xl ">Forgot your Password?</h2>
          {/* <p className=" md:p-[12px] md:font-semibold text-center ">Your Password has been Successfully changed</p> */}
          <p className="mt-[8px] md:font-semibold">
            Enter your registered Email to receive reset instructions
          </p>
          <label className=" justify-start w-full mt-[24px] md:font-normal ">
            Email
          </label>
          <input
            className=" border rounded-md w-full h-full p-[16px] mt-[8px] outline-none bg-transparent"
            placeholder="Enter email address"
          />

          <Button className=" rounded-md bg-[#265D5C] h-[45px]  text-white-100 md:w-full w-auto md:p-[24px] mt-[32px] md:font-semibold font-normal">
            {" "}
            Send recovery instructions
          </Button>
        </form>
      </div>
    </Modal>
  );
}

export default ForgotPasswordModal;
