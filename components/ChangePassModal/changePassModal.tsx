import React from "react";
import Image from "next/image";
import Modal from "../Ui/modal";
import Button from "../Ui/Button";

function ChangePassModal({
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
      size="sm"
    >
      <div className=" self-center md:max-w-[328px] md:max-h-[254px] flex items-center justify-between flex-col md:m-[80px] m-[30px]">
        <Image src="/assets/success.png" alt="success" width={64} height={65} />
        <h2 className=" mt-[24px] font-bold">Password Changed</h2>
        <p className=" md:p-[12px] md:font-semibold text-center ">Your Password has been Successfully changed</p>
        <Button className=" bg-[#265D5C] text-white-100 md:w-full w-auto md:p-[24px] mt-[40px] md:font-semibold font-normal">Log in to your Account</Button>
      </div>
    </Modal>
  );
}

export default ChangePassModal;
