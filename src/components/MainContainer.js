import React from "react";
import ButtonList from "./common/ButtonList";
import VideoContainer from "./home/VideoContainer";

const MainContainer = () => {
  return (
    <div className=" flex flex-row mx-auto w-full  ">
      <div className="w-11/12 mx-auto  ">
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
