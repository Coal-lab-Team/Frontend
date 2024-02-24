// // import React from 'react'

// // function page() {
// //   return (
// //     <>
// //     </>
// //   )
// // }

// // export default page

// // "use client";

// // import React, { useState } from 'react';
// // import ResetPassModal from '../../../components/resetPassModal/resetPassModal';

// // const MainComponent: React.FC = () => {
// //   const [showModal, setShowModal] = useState(false);

// //   const openModal = () => {
// //     setShowModal(true);
// //   };

// //   const closeModal = () => {
// //     setShowModal(false);
// //   };

// //   return (
// //     <div className=' items-center justify-center flex flex-col '>
// //       <button onClick={openModal} >Reset Password?</button>
// //       {showModal && <ResetPassModal onClose={closeModal} />}
// //     </div>
// //   );
// // };

// // export default MainComponent;
// // Block of Codes Above was for the modal component

"use client";
import { useState, useEffect, MouseEventHandler, Suspense } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import useAuthMutation from "@/app/hook/Auth/useAuthMutation";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import PasswordPopover from "@/components/PasswordPopover";
import { resetPassword } from "@/app/http/auth";
import { notify } from "@/components/Ui/Toast";

const LoadingSpinner = () => (
  <div className="flex item-center justify-center mt-[2rem]">Loading...</div> // Customized position to fit in the center
);

function ResetPasswordPage() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [isMicrosoftEdge, setIsMicrosoftEdge] = useState(false);
  const [routerReady, setRouterReady] = useState(false);
  const [mutate, setMutate] = useState<any>(null); // Adjust type accordingly
  const router = useRouter();

  // Wrap useSearchParams() in Suspense boundary
  const searchParams = (
    <Suspense fallback={<LoadingSpinner />}>{useSearchParams()}</Suspense>
  );
  const token = searchParams.get("token");
  console.log({ token });
  // const token = (() => {
  //   const searchParams = useSearchParams();
  //   return searchParams.get("token");
  // })();

  // console.log({ token });

  useEffect(() => {
    // Check if the user is using Microsoft Edge
    if (
      window.navigator.userAgent.includes("Edg") ||
      window.navigator.userAgent.includes("Edge")
    ) {
      setIsMicrosoftEdge(true);
    }

    // Set routerReady to true after initial setup
    setRouterReady(true);
  }, []);

  // Hook for making an API call and handling the response
  const authMutation = useAuthMutation(resetPassword, {
    onSuccess: (data: { status: number; message: any }) => {
      if (data.status === 200) {
        setPasswordChanged(true);
      } else {
        notify({
          message: data?.message,
          type: "error",
        });
      }
    },
    onError: (e: any) => {
      console.log("Error", e);
      notify({
        message: e.message,
        type: "error",
        theme: "light",
      });
    },
  });

  useEffect(() => {
    if (!routerReady || !authMutation) return;

    setMutate(authMutation);

    return () => {
      // Clean up the mutation
      authMutation.reset();
    };
  }, [routerReady, authMutation]);

  const schema = z
    .object({
      password: z.string().regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/, {
        message: "Please match requirements",
      }),
      confirmPassword: z
        .string()
        .min(2, { message: "Confirm password is required" }),
    })
    .refine(({ confirmPassword, password }) => {
      if (confirmPassword !== password) {
        throw { confirmPassword: "The passwords did not match" };
      }
      return true;
    });

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const handleResetPassword = (values: any) => {
    if (!routerReady || !mutate || !token) return;

    mutate.mutate({
      token,
      password: values.password,
    });
    console.log("handleResetPassword");
  };

  const togglePasswordVisibility1: MouseEventHandler<HTMLDivElement> = () => {
    setShowPassword1((prev) => !prev);
  };

  const togglePasswordVisibility2: MouseEventHandler<HTMLDivElement> = () => {
    setShowPassword2((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-y-2 min-h-screen mt-[1rem] ">
        <Image src="/assets/logo.svg" alt="logo" width={180} height={60} />
        <div className="items-center justify-center rounded-md bg-[#fff]  md:w-[611px] md:h-[553px] md:p-[80px] p-[30px]">
          <form
            onSubmit={form.onSubmit((values) => handleResetPassword(values))}
          >
            <div className="justify-start items-start w-full flex-col flex">
              <h2 className="font-bold text-2xl">Reset password</h2>
              <p className="text-[16px] mt-[8px]">Enter your new password</p>
            </div>
            <div className="flex flex-col w-full h-[86px] mt-[40px]">
              <label className="justify-start w-full"> New Password</label>
              <PasswordPopover password={form.values.password}>
                <div className="flex items-center w-full border rounded-md mt-[8px]">
                  <input
                    id="password"
                    {...form.getInputProps("password")}
                    type={showPassword1 ? "text" : "password"}
                    className="w-full p-[16px] outline-none bg-transparent"
                    placeholder="Password"
                    required
                  />
                  <div className="p-[14px]" onClick={togglePasswordVisibility1}>
                    {showPassword1 ? (
                      <IoEyeOutline className="text-gray-400 cursor-pointer" />
                    ) : (
                      <IoEyeOffOutline className="text-gray-400 cursor-pointer" />
                    )}
                  </div>
                </div>
              </PasswordPopover>
            </div>
            <div className="flex flex-col w-full h-[86px] mt-[24px]">
              <label className="justify-start w-full">
                Confirm New Password
              </label>
              <div className="flex items-center w-full border rounded-md mt-[8px]">
                <input
                  id="confirmPassword"
                  {...form.getInputProps("confirmPassword")}
                  type={showPassword2 ? "text" : "password"}
                  className="w-full p-[16px] outline-none bg-transparent"
                  placeholder="Password"
                  required
                />
                <div className="p-[14px]" onClick={togglePasswordVisibility2}>
                  {showPassword2 ? (
                    <IoEyeOutline className="text-gray-400 cursor-pointer" />
                  ) : (
                    <IoEyeOffOutline className="text-gray-400 cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="rounded-md bg-[#265D5C] w-full h-[45px]  text-[#f1f1f1f1] mt-[32px] "
            >
              Send recovery instructions
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPasswordPage;
