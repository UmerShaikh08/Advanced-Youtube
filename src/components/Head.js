import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SUGGESTION_API } from "../utils/constants";
import searchLogo from "../img/search.svg";
import { cacheResult } from "../utils/searchSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";

const Head = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const SearchCache = useSelector((store) => store.search);
  const [suggestion, setSuggestion] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const MenuBarHandler = () => {
    dispatch(toggleMenu());
  };

  const setSuggestionData = async () => {
    const data = await fetch(SUGGESTION_API + SearchQuery);
    const json = await data.json();

    if (json) {
      setSuggestion(json[1]);
      dispatch(
        cacheResult({
          [SearchQuery]: json[1],
        })
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (SearchCache[SearchQuery]) {
        setSuggestion(SearchCache[SearchQuery]);
      } else {
        setSuggestionData();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [SearchQuery]);

  const searchHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      className={` sticky top-0 bg-white flex  bg-richblack-900 outline-none border-none w-screen  z-50 h-16 items-center justify-center border-b-[1px] border-b-richblack-700 translate-y-  transition-all duration-500`}
    >
      <div className="flex justify-between -none  w-full ">
        <div className="flex  items-center outline-none  ">
          <img
            onClick={MenuBarHandler}
            className="h-12 mt-2 "
            alt="menu bar"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/hamburger-menu-1821641-1545492.png?f=avif&w=256"
          ></img>
          <img
            className=" h-12 mt-2 hidden sm:inline-block   "
            alt="youtube logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6F9Cyvi4uEYUfbsfNHod5E-rnv-RXhCIgEA&usqp=CAU"
          ></img>
          <IoLogoYoutube className="sm:hidden  text-red-500 mt-2" size={65} />
        </div>

        <div className="group w-full">
          <div className="flex justify-center align-middle relative w-full">
            <input
              onChange={searchHandler}
              value={SearchQuery}
              className="group border-slate-200 border-2 lg:w-[50%] w-[50%] h-10 rounded-s-2xl border-r-transparent mt-5 p-4 hover:border-gray-300"
              placeholder="Search"
            ></input>
            <button className="border-blackborder-slate-200 w-16 h-10 border-2 rounded-r-2xl mt-5 grid place-content-center ">
              <img
                className="h-6 "
                src="https://fontawesomeicons.com/images/svg/search-sharp.svg"
              ></img>
            </button>
          </div>

          <ul className="absolute fixed z-10 invisible group-hover:visible bg-white lg:w-[37rem] w-[15rem] rounded-lg shadow-2xl border-gray-200 mt-3">
            {suggestion.map((data, idx) => {
              const handleClick = async () => {
                await setSearchQuery(data);
                navigate(`/search/${data}`);
              };
              return (
                <li
                  className="flex font-bold mt-3 p-1  hover:bg-gray-100 cursor-pointer"
                  key={idx}
                  // to={"/search/" + searchname}
                  onClick={handleClick}
                >
                  <img src={searchLogo} className="w-5 h-4 mt-2 mr-2" />
                  {data}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <img
            className="h-9 m-5"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAY1BMVEX///8AAADV1dWLi4v4+PgbGxv8/PzDw8Pe3t6xsbFnZ2dFRUXj4+Pq6urn5+d9fX2qqqpOTk4jIyOTk5O7u7uioqJeXl4TExM8PDycnJxWVlZvb2/KysozMzN2dnbx8fErKyun6xAFAAAE3klEQVRoge1b2ZKqMBSUVXZRFEcE8f+/8so4jiE5STohjnWr7PfQkJy1c1itPvjgg/8G4Vgm/np/w9pPyjH8Q+okDbI88hhEeRakyR9Q+4fWk6I9+C+kjv0gknP/7EPgxy8hH+utjvuObT06Jy+CHUY+YRcUTsnLC859x6V0Rl5tTMknbCon5GFztGH3vGPjIBr4X3bkE76W+mF8siefcFrkhWW3jN3zugUmuF5KPmFty35wwe55ByvyOHDD7nmBhQHEZ1fsnnc2519sdCw60293yn7jN/p+lzt/h9H+O7O6JwKc3ZHHzQH7n5NoIwKMP+Vr2D0Pir+ujf4JyPwX5jgVTnp2/3XsnqfN/+GC6kKPL1390xg8LMrbG3Jt7c+gUbNXcF2XN331Xc+PVd/k6Kqjuv5Ea9qsn6/rM3DhRsUOunxLdBGFovdjoXJ+rJtI6cUptPgiZy+Q9Vep9/hXZL28/0IS3aDwXX8AHiBNfSPQRR6VIkICOM5O1v/WwLtr4hYSM2t6aQz075qwAYWtLZ15gDcftDkrBo6f3kHA8CQuxwJwP9r49LH7C0jYsT5nRdQ6YO+BfA3VC9TuA8sgxQaIXdRn6GP2FlIrQr0DtcQy/Usrs9UTQNYUFyX6RZJ4wQOIXmLoBBymJ7gI9PoniQ4MeD2oGQP7KHo+UK6AQl2lf1LGrwmBcs3d1+e8D41Averu7CM+6SJVHhDxJyBFF1/xATuGtuhIzcSfI1IntJBCESMlLx/1kZ5e0yP8AOpU+F5/D6zBBApIGtnb0OdIvocaLit6RB/BlBk7+lxPj3WbPD0oJ2lPHxTF+G1ERQ1N4EXCxwTe8dB1g9L5KqTLor4CVtO2ijvCEbxoFIMuknLuyKUdegmLHELKQRLuAxL3MxBDhYSLlBu/2BAbUJrcNQrlhpmIPTScBVYNanTfEHMnJo08cU5/36BKTeV/sXJAPY/Brr0EwaU1uNp+gIge5g+xB2G4oDDmAlSTBUbr6HqV1BPH6xUMHlTmgKL+pi/GMkmJ6Latk3Isesj9SHlD/+pPf084ms2vMQH+T8oLWs/PZu193J/OXT4MeXc+9bMqqNBFMLpiVu/+lajyw3AcQ6LpT9XyJi0tKYW1zmgWpVDdB0mENVVjbnoJrbr+lskEclEVbK9YSIO4VFSVGd/RagBhLQkP8lZNIkpZjj9I8r/CiMjrBL4ohkEW74rrBLLiszj3B6jzV96kiiFLq2GrIOrbanFOaE+p5GQAPo3qmmTufdVlvR584a/bS+4S1Xrm54G5+WsvUeeRX2WmIGbOBIyQMcr2zsHMX8mEUkSQZ8YHxG7AHEz/gk3PMM5/XswfMjU4uJeMuSw+fOboYTNmqk6zcSMe7ByIweAak/pUDbUObMNtMDY0G5qyH7hkxzzNhtZm0zOWSYdNOMZnyPJnNvN+bL1rOjDHDa1FxsF3zXYNFuOCXLWYGVmAPyv1bYYlV3zXR0kaNLhGx25UdCVUaw30AiWXsxckTX5MONM+a811WEvGhIkh6V3QS+PQ2AtD/MuGpFfUiPjQ1n7JPTYu/boV1KXFI+IryYD8rjsH9b73b+j3dXDuiAbJyYD86s2/B0x4688RE976a8iEt/4YM+GtvwXd4Z9UP0WdXvlT1ANv/CXsgTf+EPfBBx8sxD8SrEB2niv1BAAAAABJRU5ErkJggg=="
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Head;
