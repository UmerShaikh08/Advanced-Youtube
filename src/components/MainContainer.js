import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenu = useSelector((store) => store.app.isMenu);

  return (
    <div className=" flex flex-row mx-auto">
      {isMenu && <div className="hidden lg:block w-[200px]"></div>}
      <div className="w-11/12 mx-auto">
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
