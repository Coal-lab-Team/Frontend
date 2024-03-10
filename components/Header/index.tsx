import React from "react";

const Header = () => {
  return (
    <header className="w-full h-full bg-[#1B4241]">
      <div className=" w-full min-[550px]:max-w-[300px] sm:max-w-[380px]">
        <div className=" flex flex-col justify-start items-start px-4 sm:px-8 xl:px-10 2xl:px-14 ">
          <div className="my-[147px]">
            <h2 className="  text-[#FEDCB8] text-4xl leading-[140%] font-semibold tracking-[0.063em]">
              A market-place of timeless, easy-to-use digital templates
            </h2>
            <p className=" text-[20px] font-normal  mt-[8px] text-white-100 ">
              Browse a wide range of templates, sign up and start downloading
              for free
            </p>
          <div className=" mt-[40px]">
            <input></input>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
