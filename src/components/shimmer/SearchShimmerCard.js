import React from "react";

const SearchShimmerCard = () => {
  return (
    <div className="overflow-hidden w-[100%] flex flex-row   relative space-x-8 rounded-2xl bg-[#f8f6f6]   bg-gradient-to-r from-transparent via-[#fefeff] to-transparent p-4  before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite]   before:bg-gradient-to-r before:from-transparent before:via-[#edeef1] before:to-transparent">
      <div className="h-36 w-[30%] rounded-md  bg-[#f6f4f6] "></div>
      <div className="space-y-1 w-[50%]">
        <div className="h-5 rounded-md bg-[#f6f4f6]"></div>
        <div className="flex flex-row gap-3 items-center  w-full">
          <div className="h-[3rem] w-[3rem] rounded-full bg-[#f6f4f6]"></div>
          <div className="h-5 w-[70%] rounded-md bg-[#f6f4f6]"></div>
        </div>
        <div className="h-5 rounded-md bg-[#f6f4f6]"></div>
        <div className="h-5 rounded-md bg-[#f6f4f6]"></div>
      </div>
    </div>
  );
};

export default SearchShimmerCard;
