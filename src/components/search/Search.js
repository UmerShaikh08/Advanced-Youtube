import React from "react";
import { formatDate } from "../../utils/formdate";
import { HiMiniSignal } from "react-icons/hi2";

const Search = ({ id, snippet }) => {
  return id?.kind === "youtube#video" ? (
    <div className="flex  flex-col  md:flex-row w-full gap-2 md:gap-5  overflow-x-hidden ">
      <div className="relative">
        <img
          src={
            snippet?.thumbnails?.high?.url
              ? snippet?.thumbnails?.high?.url
              : snippet?.thumbnails?.medium?.url
          }
          className="w-full md:rounded-md min-w-[95vw]  max-h-[180px]  object-cover  md:max-w-[250px]  md:min-w-[350px]"
        />
        {snippet?.liveBroadcastContent === "live" && (
          <div className="bg-[#D11919] w-fit flex flex-row gap-1 items-center absolute text-sm rounded-md right-[3%] bottom-[3%]  px-1  text-white">
            <HiMiniSignal />
            LIVE
          </div>
        )}
      </div>

      {/* deskstop view */}
      <div className="hidden md:flex flex-col gap-2 w-[50%]">
        <h1 className="font-normal text-xs md:text-xl tracking-wider">
          {snippet?.title}
        </h1>
        <p className=" text-gray-500 text-xs">
          {snippet?.channelTitle} {formatDate(snippet?.publishedAt)}
        </p>
        <div className="flex flex-row gap-1  ">
          <img
            loading="lazy"
            className="h-8   rounded-full w-fit"
            alt="channel logo"
            src={` https://api.dicebear.com/5.x/initials/svg?seed=${snippet?.channelTitle}`}
          />
          <p className="p-1 text-gray-500 text-sm">{snippet?.channelTitle}</p>
        </div>
        <p className="text-gray-500 text-sm hidden md:block">
          {snippet?.description}
        </p>
      </div>

      {/* mobile view */}
      <div className="md:hidden flex flex-row gap-1  ml-1">
        <img
          className="h-8   rounded-full w-fit "
          alt="channel logo "
          src={` https://api.dicebear.com/5.x/initials/svg?seed=${snippet?.channelTitle}`}
        />

        <div className=" ">
          <h1 className=" text-xs font-semibold md:text-xl tracking-wider">
            {snippet?.title?.length > 60
              ? snippet?.title.substr(0, 60) + "..."
              : snippet?.title}
          </h1>

          <div className="flex flex-row gap-2">
            <p className=" text-gray-500 text-xs">
              {snippet?.channelTitle} {formatDate(snippet?.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Search;
