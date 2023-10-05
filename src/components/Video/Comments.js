import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BiDislike,
  BiLike,
  BiSolidDownArrow,
  BiSolidUpArrow,
} from "react-icons/bi";
import { PiThumbsUpThin, PiThumbsDownThin } from "react-icons/pi";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { formatDate } from "../../utils/formdate";
import { LiaCommentSolid } from "react-icons/lia";

const Comments = ({
  comment,
  replies = null,
  totalReply,
  imgHeight = null,
}) => {
  // console.log(comment);

  const { snippet } = comment;
  const [showReply, setShowReply] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);

  // console.log("resp", replies);

  useEffect(() => {
    if (replies) {
      setIsReply(true);
    }
  }, []);

  return (
    <>
      <div className="flex felx-row gap-2 items-start text-sm w-11/12 mx-auto">
        <img
          loading="lazy"
          src={`${snippet?.authorProfileImageUrl}`}
          className={`rounded-full ${imgHeight ? imgHeight : "h-5 sm:h-10"} `}
        />
        <div className="space-y-2">
          <div className="flex flex-row gap-1">
            <p className="font-semibold text-xs ">
              @{snippet?.authorDisplayName}
              <span className="text-xs text-gray-500">
                {` ${formatDate(snippet?.updatedAt)}`}
              </span>
            </p>
          </div>
          <div>
            <div className="text-xs sm:text-sm">
              {snippet?.textOriginal.length > 300 && !readMore
                ? snippet?.textOriginal?.substr(0, 300) + "..."
                : snippet?.textOriginal}
            </div>
            {snippet?.textOriginal.length > 300 && (
              <button
                onClick={() => setReadMore(!readMore)}
                className="text-gray-500 font-semibold hover:border-b border-black"
              >
                {readMore ? "Show less " : "Read More"}
              </button>
            )}
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div
              onClick={() => {
                setLike(!like);
                setDisLike(false);
              }}
              className={`rounded-full cursor-pointer p-2  hover:bg-slate-100 flex flex-row items-center `}
            >
              {like ? <IoMdThumbsUp size={20} /> : <PiThumbsUpThin size={20} />}
              <p className="text-gray-950 text-xs font-semibold">
                {like ? snippet?.likeCount + 1 : snippet?.likeCount}
              </p>
            </div>

            <div
              onClick={() => {
                setLike(false);
                setDisLike(!dislike);
              }}
              className={`rounded-full p-2 cursor-pointer  hover:bg-slate-100 `}
            >
              {dislike ? (
                <IoMdThumbsDown size={20} />
              ) : (
                <PiThumbsDownThin size={20} />
              )}
            </div>

            <p className=" hidden sm:flex font-semibold rounded-full cursor-pointer p-2  hover:bg-slate-100  flex-row items-center">
              Reply
            </p>
            <p className=" sm:hidden  font-semibold rounded-full cursor-pointer p-2  hover:bg-slate-100  ">
              <LiaCommentSolid size={20} />
            </p>
          </div>
        </div>
      </div>
      <div className="pl-10 space-y-3">
        <>
          {isReply && (
            <button
              onClick={() => setShowReply(!showReply)}
              className="font-semibold text-xs sm:text-sm text-blue-700 rounded-full px-4 py-1 transition-all duration-300 hover:bg-blue-100 flex flex-row items-center gap-2"
            >
              {showReply ? (
                <BiSolidDownArrow className=" hidden sm:block" />
              ) : (
                <BiSolidUpArrow className=" hidden sm:block" />
              )}{" "}
              {replies?.comments?.length} replies
            </button>
          )}
          {showReply &&
            replies?.comments &&
            replies?.comments?.map((comment, idx) => (
              <Comments comment={comment} key={idx} imgHeight={"h-6"} />
            ))}
        </>
      </div>
    </>
  );
};

export default Comments;
