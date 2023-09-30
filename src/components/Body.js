import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="relative flex md:h-[calc(100vh-5rem)]  ">
      <Sidebar />

      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
