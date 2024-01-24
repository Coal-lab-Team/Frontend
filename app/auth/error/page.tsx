"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../../components/Navs/Navbar";

function Page() {
  const title = "The page you were looking for could not be found.";
  const subTitle =
    "It seems this page is missing. Please check the URL or go home.";
  return (
    <>
      <Navbar />
      <div className="mt-[60px]">
        <div className=" flex flex-col gap-y-2 px-6 items-center justify-center ">
          <Image
            src="/assets/G404.png"
            alt="logo"
            width={758.307}
            height={374.08}
          />
        </div>
        <div className=" justify-center items-center flex flex-col mt-[40px]">
          <h3 className="font-semibold text-2xl px-3">{title}</h3>
          <p className="py-2  font-light text-sx">{subTitle}</p>
          <button className=" rounded-md bg-[#265D5C] w-6/12 h-[50px]  text-[#f1f1f1f1] capitalize mt-[32px]">
            go home
          </button>
        </div>
      </div>
    </>
  );
}

export default Page;
