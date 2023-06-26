import { useState, useEffect } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideolist from "../utils/useVideolist";
import { ContainerShimmer } from "./shimmer/ContainerShimmer";

const VideoContainer = () => {
  const videolist = useVideolist();
  return !videolist ? (
    <ContainerShimmer />
  ) : (
    <div className="flex flex-wrap justify-center">
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
