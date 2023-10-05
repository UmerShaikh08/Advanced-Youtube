import React from "react";
import { useSelector } from "react-redux";

export const ContainerCard = () => {
  return (
    <div className="overflow-hidden w-[100%] sm:w-[40%] md:w-[40%] lg:w-[30%] relative space-y-2 rounded-2xl bg-[#ffffff] border-3 border-richblack-800  bg-gradient-to-r from-transparent via-[#fefeff] to-transparent p-4  before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-richblack-900 before:bg-gradient-to-r before:from-transparent before:via-[#edeef1] before:to-transparent">
      <div className="h-36 rounded-lg bg-[#f9f6f9] "></div>
      <div className="space-y-1">
        <div className="flex flex-row gap-3 items-center  w-full">
          <div className="h-[3rem] w-[3rem] rounded-full bg-[#f9f6f9]"></div>
          <div className="h-5 w-[70%] rounded-md bg-[#f9f6f9]"></div>
        </div>
        <div className="h-5 rounded-lg bg-[#f9f6f9]"></div>
        <div className="h-5 rounded-lg bg-[#f9f6f9]"></div>
      </div>
    </div>
  );
};
