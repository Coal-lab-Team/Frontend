import React from "react";
import Templates from "@/components/Templates";

function TemplatePage() {
  return (
    <>
      <div className=" flex justify-center items-center  font-bold text-brand-green-shade40 text-3xl md:text-5xl sm:text-2xl  leading-[140%] mt-[64px] min-w-full">
        Templates
      </div>
      <div className="">
        <Templates />
      </div>
    </>
  );
}

export default TemplatePage;
