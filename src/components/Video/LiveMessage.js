import React, { useEffect, useState } from "react";
import { LiveChat, liveContentData } from "../../operation/liveChat";
import { VscSend } from "react-icons/vsc";
import { CiFaceSmile } from "react-icons/ci";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/chatSlice";
import { useParams } from "react-router-dom";

const LiveMessage = ({ video }) => {
  const [commentId, setCommentId] = useState(null);
  const [pageToken, setPageToken] = useState(null);
  const { id } = useParams();

  const [chat, setChat] = useState(null);
  const chatList = useSelector((store) => store.chat.chat);
  const dispatch = useDispatch();

  //   live content data
  useEffect(() => {
    const fetchData = async () => {
      const result = await liveContentData(video?.id);

      if (result) {
        if (result?.items?.[0]?.liveStreamingDetails?.activeLiveChatId) {
          setCommentId(
            result?.items?.[0]?.liveStreamingDetails?.activeLiveChatId
          );
        }
      }
    };

    fetchData();
  }, [id]);

  //    live chat data
  useEffect(() => {
    const FetchChat = async () => {
      const result = await LiveChat(commentId);

      if (result) {
        dispatch(addItem(result?.items));
      }
    };

    const interval = setInterval(() => {
      if (commentId) {
        FetchChat();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [commentId, id]);

  return (
    <div className="h-[550px] w-[80%] mx-auto border flex flex-col justify-between  rounded-md border-gray-300 overflow-hidden ">
      <div className="space-y-3 w-full h-[70%] px-2 flex flex-col-reverse overflow-y-scroll overflow-x-hidden">
        {chatList &&
          chatList?.map((data, idx) => (
            <div className="flex flex-row gap-3">
              <img
                loading="lazy"
                src={data?.authorDetails?.profileImageUrl}
                className="h-6 w-6 rounded-full"
              />
              <div className="text-sm w-[80%]">
                <span className="text-gray-500 font-semibold">
                  {`${data?.authorDetails?.displayName}         `}
                </span>
                {`         ${data?.snippet?.displayMessage}`}
              </div>
            </div>
          ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (chat.length > 0) {
            dispatch(
              addItem([
                {
                  authorDetails: {
                    profileImageUrl:
                      "https://res.cloudinary.com/dwoigy8ot/image/upload/v1695721342/Study%20Notion/mpr2clyewviydtjytjr4.jpg",
                    displayName: "Umer Shaikh",
                  },
                  snippet: {
                    displayMessage: chat,
                  },
                },
              ])
            );
            setChat("");
          }
        }}
        className="space-y-3 py-8 px-4 border-y border-gray-30000 overflow-hidden"
      >
        <div className="flex flex-row gap-3">
          <img
            loading="lazy "
            className="h-7 rounded-full w-7 max-w-7"
            src="https://res.cloudinary.com/dwoigy8ot/image/upload/v1695721342/Study%20Notion/mpr2clyewviydtjytjr4.jpg"
          />
          <div className="flex flex-col outline-none border-b border-gray-600 w-full ">
            <label className="" htmlFor="name">
              Umer Shaikh
            </label>
            <input
              type="text"
              id="name"
              value={chat}
              placeholder="Enter chat here"
              className="focus:outline-none placeholder:text-gray-500 w-full"
              onChange={(e) => setChat(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3  ">
            <CiFaceSmile size={25} className="text-gray-600" />
            <RiMoneyDollarBoxLine size={25} className="text-gray-600" />
          </div>
          <button type="submit" className="flex flex-row text-sm gap-3">
            {chat?.length || 0} /200
            <VscSend
              size={25}
              className={`${chat?.length > 0 ? "text-black" : "text-gray-600"}`}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveMessage;
