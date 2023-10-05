import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  return (
    <div className=" flex flex-row mx-auto w-full mt-20 ">
      <div className="w-11/12 mx-auto  ">
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
