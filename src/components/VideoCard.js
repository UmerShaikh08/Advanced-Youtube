import React from "react";

const VideoCard = ({ contentDetails, snippet, statistics }) => {
  const { thumbnails, title, channelTitle, publishedAt } = snippet;

  return (
    <div className="shadow-xl p-2 m-2 w-60 ">
      <img className="rounded-md bg-cover" src={thumbnails.medium.url} />
      <h1 className="font-bold">{title}</h1>
      <h2>{channelTitle}</h2>
      <p>{statistics?.viewCount}views</p>
    </div>
  );
};

export default VideoCard;
