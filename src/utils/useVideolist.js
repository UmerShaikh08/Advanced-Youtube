import { useState, useEffect } from "react";
import { YOUTUBE_API_URL } from "./constants";

const useVideolist = () => {
  const [videolist, setVideoList] = useState();

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideoList(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return videolist;
};

export default useVideolist;
