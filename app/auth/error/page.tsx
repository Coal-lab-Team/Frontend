"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../../components/Navs/Navbar";
import Link from "next/link";

function Page() {
  const title = "The page you were looking for could not be found.";
  const subTitle =
    "It seems this page is missing. Please check the URL or go home.";
  return (
    <>
      <Navbar />
      <div className="mt-[60px]">
        <div className=" flex flex-col gap-y-2 px-6 items-center justify-center">
          <Image
            src="/assets/G404.png"
            alt="logo"
            width={758.307}
            height={374.08}
          />
          <div className=" flex flex-col justify-center items-center  m-[40px] ">
            <h3 className="font-semibold text-2xl px-3">{title}</h3>
            <p className="py-2  font-light text-sx  mt-[16px]">{subTitle}</p>
            <Link
              href="/?path=home"
              className=" flex flex-col justify-center items-center rounded-md bg-[#265D5C] w-full h-[50px] text-[#f1f1f1f1] mt-[32px] "
            >
              <button type="button" className="capitalize">
                go home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
