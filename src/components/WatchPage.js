import React, { useEffect, useRef, useState } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams, useParams, Link } from "react-router-dom";

import { BiDislike, BiLike } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdSort } from "react-icons/md";

import "video-react/dist/video-react.css";
import { Player } from "video-react";
import ReactPlayer from "react-player";
import { formatNumber } from "../utils/formatNumber";
import Comments from "./Video/Comments";
import InfiniteScroll from "react-infinite-scroller";
import { PiThumbsUpThin, PiThumbsDownThin } from "react-icons/pi";
import Loader from "./shimmer/Loader";
import { API_KEY } from "../utils/constants";
import Recommend from "./Video/Recommend";
import RecommendCardShimmer from "./shimmer/RecommendCardShimmer";
import LiveMessage from "./Video/LiveMessage";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const VideoPlayerRef = useRef(null);

  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [statistics, setStatistics] = useState(null);
  const [snippet, setSnippet] = useState(null);
  const [showDiscription, setShowDiscription] = useState(false);
  const [commentsList, setCommentsList] = useState(null);
  const [commentsData, setcommentsData] = useState(null);
  const [commentNextPageToken, setCommentNextPageToken] = useState(null);
  const [recommendtNextPageToken, setRecommendtNextPageToken] = useState(null);
  const [title, setTitle] = useState(null);
  const [recommenedVideos, setRecommenedVideos] = useState(null);

  const getVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_KEY}`
    );
    const json = await data.json();
    console.log(json);
    setVideo(json?.items[0]);

    if (json.items[0]?.snippet) {
      setSnippet(json.items[0]?.snippet);
    }

    if (json.items[0]?.statistics) {
      setStatistics(json.items[0]?.statistics);
    }

    if (json?.items[0]?.snippet?.title) {
      setTitle(json?.items[0]?.snippet?.channelTitle);
    }
    // console.log("playing video", json);
  };

  useEffect(() => {
    getVideos();
  }, [id]);

  // fetching comments api data
  // comments are infinite after some comments its fetching random commentsr
  const fetchComment = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&order=relevance&pageToken=${commentNextPageToken}&videoId=_VB39Jo8mAQ&key=${process.env.REACT_APP_KEY}`
    );
    const json = await data?.json();

    if (json) setcommentsData(json);

    if (json?.items) {
      setCommentsList((prev) =>
        prev ? [...prev, ...json?.items] : json?.items
      );
    }

    if (json?.nextPageToken) {
      setCommentNextPageToken(json?.nextPageToken);
    } else {
      setCommentNextPageToken(null);
    }

    // console.log(json);
  };

  useEffect(() => {
    const firstFetchComment = async () => {
      try {
        const data = await fetch(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&order=relevance&videoId=${id}&key=${process.env.REACT_APP_KEY}`
        );
        const json = await data?.json();

        if (json) setcommentsData(json);

        if (json?.items) {
          setCommentsList(json?.items);
        }

        if (json?.nextPageToken) {
          setCommentNextPageToken(json?.nextPageToken);
        }

        // console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
    firstFetchComment();
  }, [id]);

  const fetchRecommenedVideos = async () => {
    try {
      console.log("hiiii");
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&pageToken=${recommendtNextPageToken}&q={title}&key=${process.env.REACT_APP_KEY}&brandingSettings`
      );
      const json = await data.json();

      if (json?.items) {
        setRecommenedVideos((prev) =>
          prev ? [...prev, ...json?.items] : json?.items
        );
      }

      if (json?.nextPageToken) {
        setRecommendtNextPageToken(json?.nextPageToken);
      }
      // console.log("recommended videos ", json);
    } catch (error) {
      console.log(error);
    }
  };
  // recommenedvideos
  useEffect(() => {
    const firstFetchRecommenedVideos = async () => {
      try {
        const data = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&contentDetails&maxResults=25&q=${title}&key=${process.env.REACT_APP_KEY}&brandingSettings`
        );
        const json = await data.json();

        if (json?.items) {
          setRecommenedVideos(json?.items);
        }

        if (json?.nextPageToken) {
          setRecommendtNextPageToken(json?.nextPageToken);
        }
        console.log("recommended videos ", json);
      } catch (error) {
        console.log(error);
      }
    };

    if (title) {
      firstFetchRecommenedVideos();
    }
  }, [title, id]);

  return video ? (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-screen sm:w-11/12 overflow-x-hidden mx-auto">
      <div className="col-span-2  rounded-lg space-y-4 ">
        <div className=" sm:rounded-md w-full aspect-video overflow-hidden ">
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        {/* video title  */}
        <div className="space-y-2 mx-2 sm:mx-0">
          <h1 className="font-semibold text-xl">{snippet?.title}</h1>
          <div className="flex flex-col gap-3 md:flex-row justify-between ">
            {/* title and channel logo , name */}
            <div className="flex flex-row gap-1">
              <img
                className="h-10   rounded-full w-fit "
                alt="channel logo"
                src={` https://api.dicebear.com/5.x/initials/svg?seed=${snippet?.channelTitle}`}
              />
              <div className="flex flex-row gap-5">
                <div>
                  <h2 className="font-semibold">{snippet?.channelTitle} </h2>
                  <p className="text-xs text-gray-500">
                    {formatNumber(statistics?.viewCount)} subscribers
                  </p>
                </div>
                <button className="text-white h-fit font-semibold bg-black px-3 py-1 rounded-full transition-all duration-200 hover:bg-red-700">
                  Subscribe
                </button>
              </div>
            </div>

            {/* features and options */}
            <div className="flex flex-wrap w-full lg:w-[50%] gap-2">
              {/* like and unlike */}
              <div className="flex flex-row bg-slate-100 gap-3 rounded-full px-2 items-center">
                <abbr
                  title="i like this"
                  className="flex flex-row text-semibold cursor-pointer   "
                  style={{ textDecoration: "none" }}
                >
                  <PiThumbsUpThin size={25} className="" />
                  {formatNumber(statistics?.likeCount)}
                </abbr>
                <p className="border-gray-200 border-l border h-[80%] "></p>
                <abbr title="i dislike this" className="cursor-pointer">
                  <PiThumbsDownThin size={25} />
                </abbr>
              </div>
              {/* share */}
              <div className="flex flex-row bg-slate-100 gap-3 rounded-full px-3 items-center duration-200 hover:bg-slate-200">
                <abbr
                  title="share"
                  className="flex flex-row text-semibold cursor-pointer font-semibold  items-center gap-2 "
                  style={{ textDecoration: "none" }}
                >
                  <IoMdShareAlt />
                  <p>Share</p>
                </abbr>
              </div>

              {/* Download */}
              <div className="flex flex-row bg-slate-100 gap-3 rounded-full px-3 py-1 items-center duration-200 hover:bg-slate-200">
                <abbr
                  title="Download"
                  className="flex flex-row text-semibold cursor-pointer font-semibold  items-center gap-2 "
                  style={{ textDecoration: "none" }}
                >
                  <LiaDownloadSolid />
                  <p>Download</p>
                </abbr>
              </div>

              {/* options */}
              <div className="flex flex-row bg-slate-100 gap-3 rounded-full px-3 py-1 items-center duration-200 hover:bg-slate-200">
                <div className="flex flex-row text-semibold cursor-pointer  items-center gap-2 ">
                  <HiDotsHorizontal />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* discription  */}
        <div className="bg-richblack text-sm bg-gray-100 rounded-md p-2">
          <div className="flex flex-row gap-3 text-sm font-semibold">
            <p>1.4m views </p>
            <p>3 years ago </p>
          </div>
          {showDiscription
            ? snippet?.description.split("\n")?.map((text, idx) => (
                <>
                  <p key={"idx"}> {text} </p>
                  {text.length == 0 && <br />}
                </>
              ))
            : snippet?.description
                ?.slice(0, 200)
                ?.split("\n")
                ?.map((text, idx) => (
                  <>
                    <p key={"idx"}> {text} </p>
                    {text.length == 0 && <br />}
                  </>
                ))}
          <button
            className="transition-all rounded-lg hover:bg-gray-300 duration-200 font-semibold"
            onClick={() => setShowDiscription(!showDiscription)}
          >
            {showDiscription ? "...show less" : "...More"}
          </button>
        </div>

        {/* comments */}
        <div className="space-y-5">
          <div className="flex font-semibold flex-row justify-between w-[80%] sm:w-[30%]">
            <div>1.4K Comments</div>
            <div className="flex flex-row items-center gap-2">
              <MdSort size={20} />
              Sort By
            </div>
          </div>
          {commentsList ? (
            <InfiniteScroll
              pageStart={commentNextPageToken}
              loadMore={fetchComment}
              hasMore={true || false}
              loader={
                <div className="loader" key={0}>
                  <Loader />
                </div>
              }
            >
              <div className="space-y-3">
                {commentsList.map((comment, idx) => (
                  <Comments
                    comment={comment?.snippet?.topLevelComment}
                    replies={comment?.replies}
                    totalReply={comment?.snippet?.totalReplyCount}
                  />
                ))}
              </div>
            </InfiniteScroll>
          ) : (
            <div>Comments are off</div>
          )}
        </div>
      </div>

      {recommenedVideos ? (
        <div className="hidden lg:block w-full">
          <InfiniteScroll
            pageStart={recommendtNextPageToken}
            loadMore={fetchRecommenedVideos}
            hasMore={true || false}
            loader={
              <div className="loader" key={0}>
                <RecommendCardShimmer />
              </div>
            }
          >
            {snippet?.liveBroadcastContent === "live" && (
              <LiveMessage video={video} />
            )}
            <div className="hidden  col-span-1 mt-5 lg:flex flex-col gap-3">
              {recommenedVideos?.map(
                (video, idx) =>
                  video?.id?.kind !== "youtube#channel" &&
                  idx !== 0 && (
                    <Link to={"/watch/" + video?.id?.videoId} key={idx}>
                      <Recommend video={video} />
                    </Link>
                  )
              )}
            </div>
          </InfiniteScroll>
        </div>
      ) : (
        <div className="hidden lg:block col-span-1 space-y-3">
          <div>Recommend Videos Not Found</div>
        </div>
      )}
    </div>
  ) : (
    ""
  );
};

export default WatchPage;
