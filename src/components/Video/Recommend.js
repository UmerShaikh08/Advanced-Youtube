import React from "react";
import { formatDate } from "../../utils/formdate";

const Recommend = ({ video }) => {
  // console.log(video);

  const { snippet } = video;
  return (
    <div className="flex flex-row gap-3 w-[90%]">
      <div className="relative ">
        <img
          src={snippet?.thumbnails?.medium?.url}
          className="min-w-[200px] max-w-[200px] rounded-md"
        />
        {snippet?.liveBroadcastContent === "live" && (
          <div className="bg-red-600 w-fit absolute right-0 top-[80%] text-xs px-1 text-white">
            LIVE
          </div>
        )}
      </div>
      <div>
        <h2 className="font-semibold">
          {snippet?.title?.length > 50
            ? snippet?.title?.slice(0, 50) + "..."
            : snippet?.title}
        </h2>
        <div className="text-xs text-gray-600">{snippet?.channelTitle}</div>
        <div className="flex flex-row gap-2 text-gray-600 text-xs">
          <p>8M views </p>
          <p>{formatDate(snippet?.publishTime)}</p>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
