import React, { useState } from "react";
import Image from "next/image";
import SignUpWithSocialsButton from "./SignUpWithSocialsButton";
import googleLogo from "@/public/assets/googleLogo.svg"
// import {BASE_URL} from "../../app/http/auth"
import { BASE_URL } from "../../app/http/auth";

const SignUpWithGoogle = () => {
  const [isloading, setIsLoading] = useState(false);

  const handleLinkClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = `${BASE_URL}/google`;
    }, 5000);
  };

  return (
    // the google logo has white space around it, so i am reducing the margin on the right so all the buttons look similar
    <SignUpWithSocialsButton
      onClick={handleLinkClick}
      isLoading={isloading}
      leftIcon={<Image src={googleLogo} alt="Google Logo" className="" />}
    >
      Continue with Google
    </SignUpWithSocialsButton>
  );
};

export default SignUpWithGoogle;
