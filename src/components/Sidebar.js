import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const Sidebar = () => {
  const isMenu = useSelector((store) => store.app.isMenu);

  return !isMenu ? null : (
    <div
      className={`w-[200px] fixed flex z-30 h-[calc(100vh-1rem)] transition-transform duration-500 bg-white ease-in-out flex-row gap-2  ${
        isMenu ? "translate-x-[0px]" : "translate-x-[-220px]"
      } `}
    >
      <div className="  ">
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
      </div>
    </div>
  );
};

export default Sidebar;
