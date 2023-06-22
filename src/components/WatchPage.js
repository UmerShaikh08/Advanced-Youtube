import React, { useEffect, useState } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams, useParams } from "react-router-dom";
import useVideolist from "../utils/useVideolist";
import CommentContainer from "./CommentContainer";
import WatchShimmer from "./shimmer/WatchShimmer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const { id } = useParams();
  const [video, setVideo] = useState({});

  const getVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyDxVXObkzSu9WSwil2XIIqm4hZKvkRNVKU`
    );
    const json = await data.json();
    setVideo(json?.items[0]);
  };

  useEffect(() => {
    getVideos();
  }, []);

  const { snippet, statistics } = video;

  return video.length === 0 ? (
    <WatchShimmer />
  ) : (
    <div className="flex flex-col w-full">
      <div className="flex w-full">
        <div className="m-5">
          <iframe
            width="900"
            height="500"
            src={`https://www.youtube.com/embed/${id}` + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            autoPlay
            muted
            allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <h1 className="font-medium text-lg mt-2">{snippet?.title}</h1>
          <p>{statistics?.viewCount} Views</p>

          <div className="flex justify-between my-2">
            <div className="flex">
              <img
                className="h-12 "
                alt="channel logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAY1BMVEX///8AAADV1dWLi4v4+PgbGxv8/PzDw8Pe3t6xsbFnZ2dFRUXj4+Pq6urn5+d9fX2qqqpOTk4jIyOTk5O7u7uioqJeXl4TExM8PDycnJxWVlZvb2/KysozMzN2dnbx8fErKyun6xAFAAAE3klEQVRoge1b2ZKqMBSUVXZRFEcE8f+/8so4jiE5STohjnWr7PfQkJy1c1itPvjgg/8G4Vgm/np/w9pPyjH8Q+okDbI88hhEeRakyR9Q+4fWk6I9+C+kjv0gknP/7EPgxy8hH+utjvuObT06Jy+CHUY+YRcUTsnLC859x6V0Rl5tTMknbCon5GFztGH3vGPjIBr4X3bkE76W+mF8siefcFrkhWW3jN3zugUmuF5KPmFty35wwe55ByvyOHDD7nmBhQHEZ1fsnnc2519sdCw60293yn7jN/p+lzt/h9H+O7O6JwKc3ZHHzQH7n5NoIwKMP+Vr2D0Pir+ujf4JyPwX5jgVTnp2/3XsnqfN/+GC6kKPL1390xg8LMrbG3Jt7c+gUbNXcF2XN331Xc+PVd/k6Kqjuv5Ea9qsn6/rM3DhRsUOunxLdBGFovdjoXJ+rJtI6cUptPgiZy+Q9Vep9/hXZL28/0IS3aDwXX8AHiBNfSPQRR6VIkICOM5O1v/WwLtr4hYSM2t6aQz075qwAYWtLZ15gDcftDkrBo6f3kHA8CQuxwJwP9r49LH7C0jYsT5nRdQ6YO+BfA3VC9TuA8sgxQaIXdRn6GP2FlIrQr0DtcQy/Usrs9UTQNYUFyX6RZJ4wQOIXmLoBBymJ7gI9PoniQ4MeD2oGQP7KHo+UK6AQl2lf1LGrwmBcs3d1+e8D41Averu7CM+6SJVHhDxJyBFF1/xATuGtuhIzcSfI1IntJBCESMlLx/1kZ5e0yP8AOpU+F5/D6zBBApIGtnb0OdIvocaLit6RB/BlBk7+lxPj3WbPD0oJ2lPHxTF+G1ERQ1N4EXCxwTe8dB1g9L5KqTLor4CVtO2ijvCEbxoFIMuknLuyKUdegmLHELKQRLuAxL3MxBDhYSLlBu/2BAbUJrcNQrlhpmIPTScBVYNanTfEHMnJo08cU5/36BKTeV/sXJAPY/Brr0EwaU1uNp+gIge5g+xB2G4oDDmAlSTBUbr6HqV1BPH6xUMHlTmgKL+pi/GMkmJ6Latk3Isesj9SHlD/+pPf084ms2vMQH+T8oLWs/PZu193J/OXT4MeXc+9bMqqNBFMLpiVu/+lajyw3AcQ6LpT9XyJi0tKYW1zmgWpVDdB0mENVVjbnoJrbr+lskEclEVbK9YSIO4VFSVGd/RagBhLQkP8lZNIkpZjj9I8r/CiMjrBL4ohkEW74rrBLLiszj3B6jzV96kiiFLq2GrIOrbanFOaE+p5GQAPo3qmmTufdVlvR584a/bS+4S1Xrm54G5+WsvUeeRX2WmIGbOBIyQMcr2zsHMX8mEUkSQZ8YHxG7AHEz/gk3PMM5/XswfMjU4uJeMuSw+fOboYTNmqk6zcSMe7ByIweAak/pUDbUObMNtMDY0G5qyH7hkxzzNhtZm0zOWSYdNOMZnyPJnNvN+bL1rOjDHDa1FxsF3zXYNFuOCXLWYGVmAPyv1bYYlV3zXR0kaNLhGx25UdCVUaw30AiWXsxckTX5MONM+a811WEvGhIkh6V3QS+PQ2AtD/MuGpFfUiPjQ1n7JPTYu/boV1KXFI+IryYD8rjsH9b73b+j3dXDuiAbJyYD86s2/B0x4688RE976a8iEt/4YM+GtvwXd4Z9UP0WdXvlT1ANv/CXsgTf+EPfBBx8sxD8SrEB2niv1BAAAAABJRU5ErkJggg=="
              />
              <div className="mx-2">
                <p className="font-bold">{snippet?.channelTitle}</p>
                <p>Subscribers</p>
              </div>
              <button className="px-4 my-1 ml-2 bg-black text-white rounded-full">
                Subscribe
              </button>
            </div>

            <div className="flex">
              <div className="w-full">
                <button className=" px-4 py-1  my-1 mx-2 bg-gray-100  rounded-l-full mr-0  border-r-2">
                  {statistics?.likeCount} likes
                </button>
                <button className=" px-4 py-1 my-1 mx-2 bg-gray-100  rounded-r-full ml-0  ">
                  Dislike
                </button>
              </div>
              <button className="px-4 my-1 mx-2 bg-gray-100 rounded-full ">
                Share
              </button>
              <button className="px-4 my-1 mx-2 bg-gray-100  rounded-full">
                More
              </button>
            </div>
          </div>
        </div>
        <LiveChat />
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
