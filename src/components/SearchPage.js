import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "./Search";
import { Link } from "react-router-dom";
import SearchShimmer from "./shimmer/SearchShimmer";
import { API_KEY } from "../utils/constants";
import InfiniteScroll from "react-infinite-scroller";

const SearchPage = () => {
  const { id } = useParams();
  const [searchVideos, setSearchVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  const getVideos = async () => {
    try {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&contentDetails&maxResults=25&q=${id}&key=${process.env.REACT_APP_KEY}&brandingSettings`
      );
      const json = await data.json();
      console.log("json", json);
      if (!json?.error) {
        setSearchVideos((prev) =>
          prev ? [...prev, ...json?.items] : json?.items
        );
      }
      if (json?.nextPageToken) {
        setNextPageToken(json?.nextPageToken);
      }
    } catch (error) {
      console.log("Failed to display video --->", error);
    }
  };
  useEffect(() => {
    getVideos();
  }, [id]);

  return searchVideos?.length === 0 ? (
    <SearchShimmer />
  ) : (
    <InfiniteScroll
      pageStart={nextPageToken}
      loadMore={getVideos}
      hasMore={true || false}
      loader={
        <div className="loader w-full" key={0}>
          <SearchShimmer />
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:w-11/12 mx-auto ">
        {searchVideos?.map((video, idx) => {
          return (
            <Link
              to={"/watch/" + video?.id?.videoId}
              key={video?.snippet?.id || idx}
            >
              <Search {...video} />
            </Link>
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

export default SearchPage;
