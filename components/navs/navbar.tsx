"use client";

import { NAVLINKS } from "@/libs/constants";
import Image from "next/image";
import cn from "@/utils/twcx";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileNav from "./mobilenav";
import { useStateCtx } from "@/context/StateContext";
import useWindowHeight from "@/hooks/useDimension";

const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();

  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <nav
      className={cn(
        " max-[500px]:py-2 shadow-lg shadow-slate-800/20  px-4 sm:px-8 xl:px-10 2xl:px-14 flex w-full justify-between items-center  transition-colors duration-500",
        scrollHeight > 200
          ? " fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 opacity-0 animate-slideDown bg-white-100 py-3 border-b border-gray-200 shadow-md"
          : "md:py-3 py-3",
        {
          "bg-white/60 ": scrollHeight > 800 && scrollHeight < 4300,
        }
      )}
    >
      <Link
        href="/?path=home"
        className={cn(
          " max-sm:w-[120px] max-[450px]:w-[100px]",
          scrollHeight > 200 ? "w-[120px] " : "w-fit"
        )}
      >
        <Image src="/assets/logo.svg" alt="logo" width={155} height={55} />
      </Link>

      <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
        {NAVLINKS.map((link) => (
          <Link
            href={
              link.link === "home"
                ? "/?path=home"
                : `${link.link}?path=${link.link}`
            }
            key={link.id}
            onClick={() => {
              setIsActive(link.link);
            }}
            className={cn(
              " w-full text-black  flex justify-center capitalize text-base relative font-medium  before:bg-primary-light before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 ",
              isActive === link.link ? "before:w-full text-primary-light" : ""
            )}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      {/* <div className="hidden lg:flex gap-x-3 xl:gap-x-5 [&>button]:border-[#FED3A6] [&>button]:border [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-md [&>button:last-child]:bg-[#265D5C]  [&>button:last-child]:text-white-100 [&>button]:font-medium [&>button]:text-[#252525]">
        <button type="button">Login</button>
        <button type="button">Sign up</button>
      </div> */}
      <div className="hidden lg:flex gap-x-3 xl:gap-x-5">
        <Link href="/auth/login">
          <button type="button" className="border-[#FED3A6] border px-4 py-2 rounded-md font-medium text-[#252525]">
            Login
          </button>
        </Link>
  
        <Link href="/auth/signup">
          <button type="button" className=" px-4 py-2 rounded-md font-medium text-white-100 bg-[#265D5C] ">
            Sign up
          </button>
        </Link>
      </div>
      <div
        tabIndex={0}
        className="lg:hidden text-2xl cursor-pointer focus:border border-primary focus:p-1 focus:rounded-md"
        onClick={() => setShowMobileMenu(true)}
      >
        <FaBars />
      </div>

      <MobileNav />
    </nav>
  );
};

export default Navbar;
