// import React from "react";
// import Modal from "../Ui/modal";
// import Button from "../Ui/Button";

// function ForgotPasswordModal({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) {
//   return (
//     <Modal
//       closeOnOverlayClick
//       isOpen={isOpen}
//       closeModal={onClose}
//       isCloseIconPresent={true}
//       size="md"
//     >
//       <div className=" self-center md:max-w-[451px] md:max-h-[261px] flex items-start justify-between flex-col md:m-[80px] m-[30px]">
//         <form>
//           <h2 className=" font-bold text-2xl ">Forgot your Password?</h2>
//           <p className="mt-[8px] md:font-semibold">
//             Enter your registered Email to receive reset instructions
//           </p>
//           <label className=" justify-start w-full mt-[24px] md:font-normal ">
//             Email
//           </label>
//           <input
//             className=" border rounded-md w-full h-full p-[16px] mt-[8px] outline-none bg-transparent"
//             placeholder="Enter email address"
//           />

//           <Button className=" rounded-md bg-[#265D5C] h-[45px]  text-white-100 md:w-full w-auto md:p-[24px] mt-[32px] md:font-semibold font-normal">
//             {" "}
//             Send recovery instructions
//           </Button>
//         </form>
//       </div>
//     </Modal>
//   );
// }

// export default ForgotPasswordModal;


import React, { useState } from "react";
import Modal from "../Ui/modal";
import Button from "../Ui/Button";
import { forgetPassword as forgetPasswordApi } from "@/app/http/auth"; // Update the path to auth.ts

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await forgetPasswordApi({ email });
      console.log("Password reset email sent successfully");
      onClose(); // Close the modal after successful submission
    } catch (error) {
      if (typeof error === "object" && error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred");
      }
    }
  };

  return (
    <Modal
      closeOnOverlayClick
      isOpen={isOpen}
      closeModal={onClose}
      isCloseIconPresent
      size="md"
    >
      <div className="self-center md:max-w-[451px] md:max-h-[261px] flex items-start justify-between flex-col md:m-[80px] m-[30px]">
        <form onSubmit={handleSubmit}>
          <h2 className="font-bold text-2xl">Forgot your Password?</h2>
          <p className="mt-[8px] md:font-semibold">
            Enter your registered Email to receive reset instructions
          </p>
          <label className="justify-start w-full mt-[24px] md:font-normal">
            Email
            <input
              type="email"
              className="border rounded-md w-full h-full p-[16px] mt-[8px] outline-none bg-transparent"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          {error && <p className="text-red-500">{error}</p>}

          <Button
            type="submit"
            className="rounded-md bg-[#265D5C] h-[45px] text-white-100 md:w-full w-auto md:p-[24px] mt-[32px] md:font-semibold font-normal"
          >
            Send recovery instructions
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
