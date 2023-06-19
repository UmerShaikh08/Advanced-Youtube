import React, { useEffect, useState } from "react";
import LiveMsg from "./LiveMsg";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/chatSlice";
import { randomMassage, randomName } from "../utils/randomGenerator";

const LiveChat = () => {
  const [Chat, setChat] = useState("");
  const chatData = useSelector((store) => store.chat.massage);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addItem({
          name: randomName(),
          massage: randomMassage(Math.random() * 45),
        })
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const sendChatHandler = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        name: "Me",
        massage: Chat,
      })
    );
    setChat("");
  };

  return (
    <div>
      <div className="flex flex-col-reverse  border rounded border-black  w-full h-[450px] mt-4  overflow-y-scroll">
        {chatData.map((chat, idx) => {
          return <LiveMsg key={idx} name={chat.name} massage={chat.massage} />;
        })}
      </div>
      <form className="flex my-2 w-full" onSubmit={sendChatHandler}>
        <input
          value={Chat}
          onChange={(e) => {
            setChat(e.target.value);
          }}
          placeholder="Type here..."
          className="bg-red border border-black w-full placeholder:px-1 "
        />
        <button className="bg-black rounded-sm  text-white mx-1 p-1">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
