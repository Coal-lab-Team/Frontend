// "use client";
// import React, { useEffect } from "react";
// import { useRouter } from "next/router";
// import { signUpWithOAuth } from "../http/auth";
// import useAuthMutation from "../hook/Auth/useAuthMutation";
// import { ADMIN_ID, useAuth } from "../../context/AuthContext";
// import { notify } from "@/components/Ui/Toast";
// import { AuthResponse } from "@/@types";



// function GoogleRedirect() {
//   const router = useRouter();
//   const { handleAuth, userCameFrom, userCameFromForOAuth } = useAuth();
//   const { mutate: signUserWithGoogle } = useAuthMutation( {
//     mutationFn: signUpWithOAuth, // Wrap signUpWithOAuth in an object with the mutationFn key
//     onSuccess: (data: {
//       user: any;
//       email: any;
//       status: number;
//       response: { token: string; email: string };
//       data: AuthResponse | undefined;
//     }) => {
//       console.log("Goog;le data", data);
//       // Checking if user enabled 2fa
//       //   if (data?.status === 202) {
//       //     // Setting to localStorage because 2fa page needs them
//       //     localStorage.setItem("2fa", data?.response?.token);
//       //     localStorage.setItem("email", data?.response?.email);

//       //     router.push("/auth/2fa");
//       //     return;
//       //   }

//       if (data.status === 200) {
//         handleAuth(data.data);
//         localStorage.setItem("zpt", data?.email?.token);

//         // // redirecting the user  to admin dashbord if they are an admin
//         // if (data.user.roleId === ADMIN_ID) {
//         //   router.push("/super-admin/analytics-and-reporting");
//         //   return;
//         // }

//         // router.push(userCameFrom || "/explore");
//         // return;
//       }
//     },
//     onError: (error: any) => {
//       console.log("Google OAuth error", error);

//       if (
//         error.response &&
//         error.response.message === "INTERNAL SERVER ERROR"
//       ) {
//         notify({
//           message: "Something went wrong, please try again later",
//           type: "error",
//         });

//         router.replace(userCameFromForOAuth || "/login");
//         return;
//       }

//       notify({
//         message: error.message,
//         type: "error",
//         theme: "light",
//       });

//       // if an error occurs, take the user to where they signed up from or to sign in page if undefined
//       router.replace(userCameFromForOAuth || "/login");
//       // router.replace(userCameFrom || '/');
//     },
//   });

//   useEffect(() => {
//     const query = window.location.search.split("?")[1];

//     signUserWithGoogle({ query, oAuth: "google" });
//     /* eslint-disable-next-line react-hooks/exhaustive-deps */
//   }, []);
//   return (
//     <>
//       <div className="flex item-center justify-center mt-[2rem]">
//         Please Wait...
//       </div>
//     </>
//   );
// }
// export default GoogleRedirect;


import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { signUpWithOAuth } from "../http/auth";
import useAuthMutation from "../hook/Auth/useAuthMutation";
import { useAuth } from "../../context/AuthContext";
import { notify } from "@/components/Ui/Toast";
import { AuthResponse } from "@/@types";

function GoogleRedirect() {
  const router = useRouter();
  const { handleAuth, userCameFrom, userCameFromForOAuth } = useAuth();

  const { mutate: signUserWithGoogle } = useAuthMutation({
    mutationFn: signUpWithOAuth, // Wrap signUpWithOAuth in an object with the mutationFn key
    onSuccess: (data: {
      user: any;
      email: any;
      status: number;
      response: { token: string; email: string };
      data: AuthResponse | undefined;
    }) => {
      console.log("Google data", data);
      if (data.status === 200) {
        handleAuth(data.data);
        localStorage.setItem("zpt", data?.email?.token);
        // Handle redirection here
      }
    },
    onError: (error: any) => {
      console.log("Google OAuth error", error);
      if (
        error.response &&
        error.response.message === "INTERNAL SERVER ERROR"
      ) {
        notify({
          message: "Something went wrong, please try again later",
          type: "error",
        });
        router.replace(userCameFromForOAuth || "/login");
        return;
      }
      notify({
        message: error.message,
        type: "error",
        theme: "light",
      });
      router.replace(userCameFromForOAuth || "/login");
    },
  });

  useEffect(() => {
    const query = window.location.search.split("?")[1];
    signUserWithGoogle({ query, oAuth: "google" });
  }, []);

  return (
    <>
      <div className="flex item-center justify-center mt-[2rem]">
        Please Wait...
      </div>
    </>
  );
}

export default GoogleRedirect;
