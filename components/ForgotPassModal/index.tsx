
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
        <form>
          <h2 className=" font-bold text-2xl ">Forgot your Password?</h2>
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
