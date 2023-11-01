import React from "react";

import MainContainer from "./MainContainer";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./sidebar/Sidebar";

const Body = () => {
  const isMenu = useSelector((store) => store.app.isMenu);
  const location = useLocation();

  return (
    <div className="relative flex md:h-[calc(100vh-5rem)] w-full mt-16 lg:mx-auto">
      <Sidebar />
      {(isMenu || location.pathname.includes("/search/")) && (
        <div className="hidden lg:block w-[220px]"></div>
      )}

      <div className={`w-full ${isMenu ? "lg:w-[90%]" : "w-full"}  `}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
