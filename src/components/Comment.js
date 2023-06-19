import React from "react";
import CommentList from "./CommentList";

const Comment = (commentData) => {
  return (
    <>
      <div className="bg-gray-100  shadow-sm rounded-lg my-2 ">
        <h1>{commentData.name}</h1>
        <p>{commentData.comment}</p>
      </div>
      <div className="pl-5 border border-l-black ml-5">
        <CommentList className="m-5" commentData={commentData.replies} />
      </div>
    </>
  );
};

export default Comment;
