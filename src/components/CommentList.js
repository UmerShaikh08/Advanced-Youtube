import React from "react";
import Comment from "./Comment";
const CommentList = ({ commentData }) => {
  return commentData.map((comment, idx) => (
    <div key={idx}>
      <Comment {...comment} />
    </div>
  ));
};

export default CommentList;
