/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { useStateCtx } from "@/context/StateContext";
import { NAVLINKS } from "@/libs/constants";
import cn from "@/utils/twcx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import Button from "@/components/Ui/Button";

const MobileNav = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();

  const [isActive, setIsActive] = useState("");
  const searchParams = useSearchParams().get("path");

  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMobileMenu]);

  return (
    <>
      <div
        className={cn(
          "lg:hidden fixed min-h-screen w-full bg-black/50 top-0 left-0 z-20 transition-all duration-300",
          showMobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowMobileMenu(false)}
      />
      <nav
        className={cn(
          "pt-20 lg:hidden  px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full max-w-[300px] sm:max-w-[70%] md:max-w-[50%] justify-between items-center bg-white/90 backdrop-blur-lg fixed right-0 top-0 z-50 h-screen transition-all opacity-0",
          showMobileMenu
            ? "translate-x-0 duration-1000 opacity-100"
            : "translate-x-full duration-300"
        )}
      >
        <Button
          autoFocus
          aria-label="close menu"
          type="button"
          className="outline-none text-primary text-2xl sm:text-4xl absolute top-2 right-2 h-12 w-12 rounded-full border focus:border-2 focus-visible:border-primary  flex justify-center items-center"
          onClick={() => setShowMobileMenu(false)}
          tabIndex={0}
        >
          <BsX />
        </Button>
        <div className="flex flex-col items-start h-full w-full gap-y-2 ">
          {NAVLINKS.map((link) => (
            <Link
              tabIndex={0}
              aria-label={link.label}
              href={
                link.link === "home"
                  ? "/?path=home"
                  : `${link.link}?path=${link.link}`
              }
              key={link.id}
              onClick={() => {
                setIsActive(link.link);
                setShowMobileMenu(false);
              }}
              className={cn(
                " text-black  flex justify-center capitalize relative font-medium  before:bg- before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 text-lg",
                isActive === link.link ? "before:w-full text-primary-light" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col items-center  justify-center  gap-y-2 w-full mt-5">
            <Link href="/auth/login">
              <Button
                type="button"
                className=" border-[#FED3A6] border px-16 py-2 rounded-md  font-medium text-[#252525]"
              >
                Login
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                type="button"
                className=" rounded-md px-16 py-2 font-medium text-white-100 bg-[#265D5C] mt-3"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
