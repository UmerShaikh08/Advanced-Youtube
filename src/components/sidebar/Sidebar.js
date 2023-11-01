import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";

import { HiMiniSignal } from "react-icons/hi2";
import {
  SiYoutubegaming,
  SiYoutubemusic,
  SiYoutubestudio,
} from "react-icons/si";

import {
  MdHistory,
  MdThumbUp,
  MdWatchLater,
  MdVideoLibrary,
  MdSlowMotionVideo,
  MdMusicNote,
} from "react-icons/md";
import { BsCollectionPlayFill, BsYoutube } from "react-icons/bs";

const Sidebar = () => {
  const isMenu = useSelector((store) => store.app.isMenu);

  return !isMenu ? null : (
    <div
      className={`w-[200px]  fixed flex z-30 h-screen transition-transform duration-500 bg-white ease-in-out flex-col gap-5  ${
        isMenu ? "translate-x-[0px]" : "translate-x-[-220px]"
      } `}
    >
      <div className="space-y-2 mx-auto w-full ml-1  ">
        <Link to={"/"}>
          <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
            <GoHomeFill size={20} /> Home
          </p>
        </Link>

        <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
          <MdVideoLibrary size={20} /> Library
        </p>

        <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
          {" "}
          <BsCollectionPlayFill size={20} />
          Subscription
        </p>
      </div>
      <div className="border-b border-gray-300 mx-auto w-[90%]"></div>
      <div className="space-y-2 mx-auto w-full ml-1">
        <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
          <MdHistory size={20} /> History
        </p>
        <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
          <MdThumbUp size={20} /> Liked videos
        </p>

        <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
          <MdWatchLater size={20} /> Watch Later
        </p>
      </div>
      <div className="border-b border-gray-300 mx-auto w-[90%]"></div>
      <div className="space-y-2">
        <p className="font-semibold text-lg ml-1">Explore</p>
        <div>
          <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
            <HiMiniSignal size={20} /> Live
          </p>
          <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
            <MdMusicNote size={20} /> Music
          </p>
          <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
            <MdSlowMotionVideo size={20} /> Trending
          </p>
          <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
            <SiYoutubegaming size={20} /> Gaming
          </p>
        </div>
      </div>
      <div className="border-b border-gray-300 mx-auto w-[90%]"></div>
      <div className="space-y-2">
        <p className="font-semibold text-lg ml-1">More From Youtube</p>
        <div>
          <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
            <BsYoutube size={20} className="text-[#CD201F]" /> YouTube Premium
          </p>
          <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
            <SiYoutubestudio size={20} className="text-[#CD201F]" /> YouTube
            Studio
          </p>
          <p className="flex felx-row  items-center px-2 gap-5 py-1 font-semibold transition-all duration-200 rounded-md  hover:bg-gray-200 cursor-pointer w-full">
            <SiYoutubemusic size={20} className="text-[#CD201F]" /> YouTube
            Music
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

{
  /* <div className=" mt-10 mx-auto">
  <ul className="m-2 p-3">
    <Link to="/">
      <li className="mt-2">Home</li>
    </Link>
    <li className="mt-2">Short</li>
    <li className="mt-2">Subscription</li>
    <li className="mt-2">Live</li>
  </ul>

  <h1 className="font-bold mt-5">Subscription</h1>
  <ul className="ml-3">
    <li className="mt-2">Music</li>
    <li className="mt-2">Sports</li>
    <li className="mt-2">Gaming</li>
    <li className="mt-2">Movies</li>
  </ul>

  <h1 className="font-bold mt-5">Watch Later</h1>
  <ul className=" ml-3">
    <li className="mt-2">Music</li>
    <li className="mt-2">Sports</li>
    <li className="mt-2">Gaming</li>
    <li className="mt-2">Movies</li>
  </ul>
</div> */
}
