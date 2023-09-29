import { useState, useEffect } from "react";
import { API_KEY, YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideolist from "../utils/useVideolist";
import { ContainerShimmer } from "./shimmer/ContainerShimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const isMenu = useSelector((store) => store.app.isMenu);
  const [videolist, setVideoList] = useState();
  const [nextPageToken, setNextPageToken] = useState("");

  const getVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&pageToken=${nextPageToken}&regionCode=US&key=` +
        API_KEY
    );
    const json = await data.json();
    setVideoList(json.items);
    console.log(json);
  };

  useEffect(() => {
    getVideos();
  }, [nextPageToken]);

  useEffect(() => {
    if (
      window.innerHeight + document.documentElement.scrollHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      setNextPageToken();
    }
  }, []);

  return !videolist ? (
    <ContainerShimmer />
  ) : (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2  ${
        isMenu ? "lg:grid-cols-3" : "lg:grid-cols-4"
      } gap-8 mx-auto mt-4`}
    >
      {videolist.map((card) => {
        return (
          <Link to={"/watch/" + card.id} key={card.id}>
            <VideoCard {...card} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
