import React from "react";
import Templates from "@/components/Templates";

function TemplatePage() {
  return (
    <>
      <div className=" flex justify-center items-center font-bold text-brand-green-shade40 mt-[64px]">Templates</div>
      <div className="">
        <Templates />
      </div>
    </>
  );
}

export default TemplatePage;
