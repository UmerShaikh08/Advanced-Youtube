import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenu = useSelector((store) => store.app.isMenu);

  return !isMenu ? null : (
    <div className="shadow-xl   ">
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
  );
};

export default Sidebar;
