import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "./Search";
import { Link } from "react-router-dom";
import SearchShimmer from "./shimmer/SearchShimmer";

const SearchPage = () => {
  const { id } = useParams();
  const [searchVideos, setSearchVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${id}&key=AIzaSyDxVXObkzSu9WSwil2XIIqm4hZKvkRNVKU`
    );
    const json = await data.json();
    setSearchVideos(json?.items);
    console.log(json?.items);
  };
  useEffect(() => {
    getVideos();
  }, [id]);

  return searchVideos.length === 0 ? (
    <SearchShimmer />
  ) : (
    <div>
      {searchVideos.map((video) => {
        return (
          <Link to={"/watch/" + video?.id?.videoId} key={video?.snippet?.id}>
            <Search {...video} />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchPage;
