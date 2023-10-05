import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenu = useSelector((store) => store.app.isMenu);
  const location = useLocation();
  const { id } = useParams();

  return (
    <div className="relative flex md:h-[calc(100vh-5rem)] w-full mt-20 ">
      <Sidebar />
      {isMenu && !location.pathname.includes("/search/") && (
        <div className="hidden lg:block w-[220px]"></div>
      )}
      {location.pathname.includes("/search/") && (
        <div className="hidden lg:block w-[220px]"></div>
      )}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
