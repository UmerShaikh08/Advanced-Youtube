import { useState, useEffect } from "react";
import { API_KEY, YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideolist from "../utils/useVideolist";
import { ContainerShimmer } from "./shimmer/ContainerShimmer";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

const VideoContainer = () => {
  const isMenu = useSelector((store) => store.app.isMenu);
  const [videolist, setVideoList] = useState();
  const [nextPageToken, setNextPageToken] = useState("");
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&pageToken=${nextPageToken}&regionCode=US&key=` +
        API_KEY
    );
    const json = await data.json();
    setVideoList((prev) => (prev ? [...prev, ...json.items] : json.items));

    if (json?.nextPageToken) {
      setNextPageToken(json?.nextPageToken);
    }

    setData(json);

    console.log(json);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return !videolist ? (
    <ContainerShimmer />
  ) : (
    <InfiniteScroll
      pageStart={nextPageToken}
      loadMore={getVideos}
      hasMore={true || false}
      loader={
        <div className="loader" key={0}>
          Loading ...
          <ContainerShimmer />
        </div>
      }
    >
      <div
        className={` grid grid-cols-1 sm:grid-cols-2 h-full ${
          isMenu ? "lg:grid-cols-3" : "lg:grid-cols-4"
        } gap-8 mx-auto mt-4  overflow-x-hidden`}
      >
        {videolist.map((card, idx) => {
          return (
            <Link to={"/watch/" + card.id} key={idx}>
              <div className="  mx-auto rounded-md  space-y-2 mt-6  duration-200 md:hover:scale-105 ">
                <VideoCard {...card} />
              </div>
            </Link>
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

export default VideoContainer;
