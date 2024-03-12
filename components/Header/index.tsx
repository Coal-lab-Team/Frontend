// import React from "react";
// import Button from "../Ui/Button";
// import Link from "next/link";
// import { BsLightningCharge } from "react-icons/bs";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Header = () => {
//   return (
//     <header className="w-full h-full bg-[#1B4241]">
//       <div className=" w-full min-[550px]:max-w-[300px] sm:max-w-[380px]">
//         <div className=" flex flex-col justify-start items-start px-4 sm:px-8 xl:px-10 2xl:px-14 ">
//           <div className="my-[147px]">
//             <h2 className=" text-[#FEDCB8] text-4xl leading-[140%] font-semibold tracking-[0.063em]">
//               A market-place of timeless, easy-to-use digital templates
//             </h2>
//             <p className="  font-normal  mt-[8px] text-white-100 ">
//               Browse a wide range of templates, sign up and start downloading
//               for free
//             </p>
//             <div className=" mt-[40px] ">
//               <input
//                 className="rounded-[12px] px-[24px] py-[12px] text-[#BBB] placeholder-opacity-100 border border-solid border-[#E6E6E6] bg-[#F6F6F6] w-full whitespace-nowrap"
//                 placeholder="Search templates on web, apps, figma, ecommerce and more..."
//               />
//               <div className=" flex  lg:flex gap-x-3 xl:gap-x-5  w-full mt-[40px]">
//                 <Link href="/auth/login">
//                   <Button
//                     type="button"
//                     className=" border-[#FED3A6] border px-[32px] py-[12px] rounded-md  font-medium text-[#FFF] bg-[#265D5C] whitespace-nowrap"
//                   >
//                     <BsLightningCharge className=" w-6 h-6" />
//                     Sign up for free
//                   </Button>
//                 </Link>

//                 <Link href="/auth/signup">
//                   <Button
//                     type="button"
//                     className=" border-[#FED3A6]  border rounded-md px-[32px] py-[12px] font-medium text-white-100 bg-[#1B4241] whitespace-nowrap"
//                   >
//                     Explore templates
//                     <FaArrowRightLong />
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import Button from "../Ui/Button";
import Link from "next/link";
import { BsLightningCharge } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-full bg-[#1B4241]">
      <div className="flex flex-col md:flex-row justify-between items-start w-full min-h-[550px] max-w-[1100px] px-4 sm:px-8 xl:px-10 2xl:px-14">
        <div className="flex flex-col justify-start items-start max-w-[550px] ">
          <div className="my-[147px] ">
            <h2 className="text-[#FEDCB8] text-4xl leading-[140%] font-semibold tracking-[0.063em]">
              A market-place of timeless, easy-to-use digital templates
            </h2>
            <p className="font-normal mt-4 text-white-100">
              Browse a wide range of templates, sign up and start downloading
              for free
            </p>
            {/* <div className="mt-8 w-full">
              <CiSearch/>
              <input
                className="rounded-[12px] px-4 py-2 text-[#BBB] placeholder-opacity-100 border border-solid border-[#E6E6E6] bg-[#F6F6F6] w-full"
                placeholder="Search templates on web, apps, figma, ecommerce and more..."
              /> */}
            <div className="mt-8 w-full relative">
              <div className="relative">
                <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="rounded-[12px] px-10 py-2 pl-10 text-[#BBB] placeholder-opacity-100 border border-solid border-[#E6E6E6] bg-[#F6F6F6] w-full"
                  placeholder="Search templates on web, apps, figma, ecommerce and more..."
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-8 w-full">
                <Link href="/auth/login">
                  <Button
                    type="button"
                    className="flex items-center border-[#FED3A6] border px-4 py-2 rounded-md font-medium text-[#FFF] bg-[#265D5C] mb-6 sm:mb-0 sm:mr-2"
                  >
                    <BsLightningCharge className="w-6 h-6 mr-2" />
                    <span>Sign up for free</span>
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button
                    type="button"
                    className="flex items-center border-[#FED3A6] border rounded-md px-4 py-2 font-medium text-white-100 bg-[#1B4241]"
                  >
                    <span>Explore templates</span>
                    <FaArrowRightLong className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/3 ml-auto my-[147px] absolute inset-0 bg-cover bg-center bg-lightgray-50% ">
          <Image
            src="/assets/header.svg"
            alt=" header banner"
            width={696}
            height={480}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
