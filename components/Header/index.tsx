// No animation =====

// import React from "react";
// import Button from "../Ui/Button";
// import Link from "next/link";
// import { BsLightningCharge } from "react-icons/bs";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// import { HiOutlineChevronDown } from "react-icons/hi";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="w-full h-full bg-[#1B4241]">
//       <div className="flex flex-col md:flex-row justify-between items-start w-full min-h-[550px] max-w-[1440px] px-4 sm:px-8 xl:px-10 2xl:px-14">
//         <div className="flex flex-col justify-start items-start max-w-[681px] ">
//           <div className="my-[32px] md:my-[147px] md:w-[550px]">
//             <h2 className="text-[#FEDCB8] text-3xl md:text-5xl sm:text-2xl  leading-[140%] font-semibold tracking-[0.063em]">
//               A market-place of timeless, easy-to-use digital templates
//             </h2>
//             <p className="font-normal mt-4 text-white-100">
//               Browse a wide range of templates, sign up and start downloading
//               for free
//             </p>

//             <div className="mt-8 w-full relative bg-[#F6F6F6] rounded-[12px] overflow-hidden">
//               <div className="flex items-center">
//                 <div className="relative flex-1">
//                   <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     className="pl-10 pr-10 py-3 md:py-4 text-[#BBB] placeholder-opacity-100 border-none focus:outline-none bg-transparent w-full"
//                     placeholder="Search templates on web, apps, figma, ecommerce and more..."
//                   />
//                 </div>
//                 {/* <div className="divider bg-gray-300 h-full w-px"></div> */}
//                 <div className="border-l border-gray-300 h-6 mr-1 ml-1"></div>{" "}
//                 <div className="relative">
//                   <select className="appearance-none border-none bg-transparent text-[#BBB] outline-none pr-4 py-2 pl-1 text-sm md:text-base ">
//                     <option value="" disabled selected hidden>
//                       All Categories
//                     </option>
//                     <option
//                       className="text-[#265D5C] text-center "
//                       value="category1"
//                     >
//                       UI Kits
//                     </option>
//                     <option
//                       className="text-[#265D5C] text-center"
//                       value="category2"
//                     >
//                       WordPress Templates
//                     </option>
//                     <option
//                       className="text-[#265D5C] text-center"
//                       value="category3"
//                     >
//                       Figma Templates
//                     </option>
//                     <option
//                       className="text-[#265D5C] text-center"
//                       value="category4"
//                     >
//                       Invoices
//                     </option>
//                   </select>
//                   <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                     <HiOutlineChevronDown className="text-gray-400" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-full md:w-auto">
//               <Link href="/auth/login">
//                 <Button
//                   type="button"
//                   className="flex items-center border-[#FED3A6] border px-4 py-2 rounded-md font-medium text-[#FFF] bg-[#265D5C] mb-6 sm:mb-0 sm:mr-2"
//                 >
//                   <BsLightningCharge className="w-6 h-6 mr-2" />
//                   <span>Sign up for free</span>
//                 </Button>
//               </Link>
//               <Link href="/auth/signup">
//                 <Button
//                   type="button"
//                   className="flex items-center border-[#FED3A6] border rounded-md px-4 py-2 font-medium text-white-100 bg-[#1B4241]"
//                 >
//                   <span>Explore templates</span>
//                   <FaArrowRightLong className="ml-2" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="hidden lg:block md:w-1/3 ml-auto my-[147px] absolute inset-0 bg-cover bg-center bg-lightgray-50% ">
//           <Image
//             src="/assets/header.svg"
//             alt=" header banner"
//             width={696}
//             height={480}
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// Just the text box slide in =======

// import React from "react";
// import Button from "../Ui/Button";
// import Link from "next/link";
// import { BsLightningCharge } from "react-icons/bs";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// import { HiOutlineChevronDown } from "react-icons/hi";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Header = () => {
//   return (
//     <header className="w-full h-full bg-[#1B4241]">
//       <div className="flex flex-col md:flex-row justify-between items-start w-full min-h-[550px] max-w-[1440px] px-4 sm:px-8 xl:px-10 2xl:px-14">
//         <div className="flex flex-col justify-start items-start max-w-[681px] ">
//           <div className="my-[32px] md:my-[147px] md:w-[550px]">
//             <motion.h2
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-[#FEDCB8] text-3xl md:text-5xl sm:text-2xl  leading-[140%] font-semibold tracking-[0.063em]"
//             >
//               A market-place of timeless, easy-to-use digital templates
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="font-normal mt-4 text-white-100"
//             >
//               Browse a wide range of templates, sign up and start downloading
//               for free
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="mt-8 w-full relative bg-[#F6F6F6] rounded-[12px] overflow-hidden"
//             >
//               <div className="flex items-center">
//                 <div className="relative flex-1">
//                   <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     className="pl-10 pr-10 py-3 md:py-4 text-[#BBB] placeholder-opacity-100 border-none focus:outline-none bg-transparent w-full"
//                     placeholder="Search templates on web, apps, figma, ecommerce and more..."
//                   />
//                 </div>
//                 <div className="border-l border-gray-300 h-6 mr-1 ml-1"></div>{" "}
//                 <div className="relative">
//                   <select className="appearance-none border-none bg-transparent text-[#BBB] outline-none pr-4 py-2 pl-1 text-sm md:text-base ">
//                     <option value="" disabled selected hidden>
//                       All Categories
//                     </option>
//                     <option
//                       className="text-[#265D5C] text-center "
//                       value="category1"
//                     >
//                       UI Kits
//                     </option>
//                     <option
//                       className="text-[#265D5C] text-center"
//                       value="category2"
//                     >
//                       WordPress Templates
//                     </option>
//                     <option
//                       className="text-[#265D5C] text-center"
//                       value="category3"
//                     >
//                       Figma Templates
//                     </option>
//                     <option
//                       className="text-[#265D5C] text-center"
//                       value="category4"
//                     >
//                       Invoices
//                     </option>
//                   </select>
//                   <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                     <HiOutlineChevronDown className="text-gray-400" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.8 }}
//               className="flex flex-col sm:flex-row mt-4 md:mt-8 w-full md:w-auto"
//             >
//               <Link href="/auth/login">
//                 <Button
//                   type="button"
//                   className="flex items-center border-[#FED3A6] border px-4 py-2 rounded-md font-medium text-[#FFF] bg-[#265D5C] mb-6 sm:mb-0 sm:mr-2"
//                 >
//                   <BsLightningCharge className="w-6 h-6 mr-2" />
//                   <span>Sign up for free</span>
//                 </Button>
//               </Link>
//               <Link href="/auth/signup">
//                 <Button
//                   type="button"
//                   className="flex items-center border-[#FED3A6] border rounded-md px-4 py-2 font-medium text-white-100 bg-[#1B4241]"
//                 >
//                   <span>Explore templates</span>
//                   <FaArrowRightLong className="ml-2" />
//                 </Button>
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//         <div className="hidden lg:block md:w-1/3 ml-auto my-[147px] absolute inset-0 bg-cover bg-center bg-lightgray-50% ">
//           <Image
//             src="/assets/header.svg"
//             alt=" header banner"
//             width={696}
//             height={480}
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// both box slide in framer========
import React, { useState } from "react";
import Button from "../Ui/Button";
import Link from "next/link";
import { BsLightningCharge } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { HiOutlineChevronDown } from "react-icons/hi";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showOptionsOnArrowClick, setShowOptionsOnArrowClick] = useState(false);

  const handleArrowClick = () => {
    setShowOptionsOnArrowClick(!showOptionsOnArrowClick);
  };

  const handleSelectClick = () => {
    setShowOptions(false);
    setShowOptionsOnArrowClick(!showOptionsOnArrowClick);
  };

  return (
    <header className="w-full h-full bg-[#1B4241]">
      <div className="flex flex-col md:flex-row justify-between items-start w-full min-h-[550px] max-w-[1440px] px-4 sm:px-8 xl:px-10 2xl:px-14">
        <div className="flex flex-col justify-start items-start max-w-[681px] ">
          <div className="my-[32px] md:my-[147px] md:w-[550px]">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#FEDCB8] text-3xl md:text-5xl sm:text-2xl  leading-[140%] font-semibold tracking-[0.063em]"
            >
              A market-place of timeless, easy-to-use digital templates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-normal mt-4 text-white-100"
            >
              Browse a wide range of templates, sign up and start downloading
              for free
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 w-full relative bg-[#F6F6F6] rounded-[12px] overflow-hidden"
            >
              <div className="flex items-center">
                <div className="relative flex-1">
                  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    className="pl-10 pr-10 py-3 md:py-4 text-[#BBB] placeholder-opacity-100 border-none focus:outline-none bg-transparent w-full"
                    placeholder="Search templates on web, apps, figma, ecommerce and more..."
                  />
                </div>
                <div className="border-l border-gray-300 h-6 mr-1 ml-1"></div>{" "}
                <div className="relative">
                  <select
                    className="appearance-none border-none bg-transparent text-[#BBB] outline-none pr-4 py-2 pl-1 text-sm md:text-base "
                    onClick={handleSelectClick}
                  >
                    <option value="" disabled selected hidden>
                      All Categories
                    </option>
                    <option
                      className="text-[#265D5C] text-center "
                      value="category1"
                    >
                      UI Kits
                    </option>
                    <option
                      className="text-[#265D5C] text-center"
                      value="category2"
                    >
                      WordPress Templates
                    </option>
                    <option
                      className="text-[#265D5C] text-center"
                      value="category3"
                    >
                      Figma Templates
                    </option>
                    <option
                      className="text-[#265D5C] text-center"
                      value="category4"
                    >
                      Invoices
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <HiOutlineChevronDown
                      // className="text-gray-400"
                      className={`text-gray-400 ${
                        showOptionsOnArrowClick ? "transform rotate-180" : ""
                      }`}
                      onClick={handleArrowClick}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row mt-4 md:mt-8 w-full md:w-auto"
            >
              <Link href="/auth/signup">
                <Button
                  type="button"
                  className="flex items-center border-[#FED3A6] border px-4 py-2 rounded-md font-medium text-[#FFF] bg-[#265D5C] mb-6 sm:mb-0 sm:mr-2"
                >
                  <BsLightningCharge className="w-6 h-6 mr-2" />
                  <span>Sign up for free</span>
                </Button>
              </Link>
              <Link href="/templates">
                <Button
                  type="button"
                  className="flex items-center border-[#FED3A6] border rounded-md px-4 py-2 font-medium text-white-100 bg-[#1B4241]"
                >
                  <span>Explore templates</span>
                  <FaArrowRightLong className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block md:w-1/3 ml-auto my-[147px] absolute inset-0 bg-cover bg-center bg-lightgray-50% ">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
              src="/assets/header.svg"
              alt=" header banner"
              width={696}
              height={480}
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
