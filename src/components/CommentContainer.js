import React from "react";
import CommentList from "./CommentList";

const CommentContainer = () => {
  const commentData = [
    {
      name: "umer",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      replies: [
        ,
        {
          name: "umer",
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          replies: [
            ,
            {
              name: "umer",
              comment:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              replies: [],
            },
            {
              name: "umer",
              comment:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              replies: [],
            },
          ],
        },
        {
          name: "umer",
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          replies: [],
        },
      ],
    },
    {
      name: "umer",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      replies: [],
    },
    {
      name: "umer",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      replies: [],
    },
    {
      name: "umer",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      replies: [
        {
          name: "umer",
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          replies: [
            ,
            {
              name: "umer",
              comment:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              replies: [],
            },
            {
              name: "umer",
              comment:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              replies: [
                ,
                {
                  name: "umer",
                  comment:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                  replies: [],
                },
                {
                  name: "umer",
                  comment:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "umer",
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          replies: [],
        },
        {
          name: "umer",
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          replies: [],
        },
        {
          name: "umer",
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          replies: [
            ,
            {
              name: "umer",
              comment:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              replies: [],
            },
            {
              name: "umer",
              comment:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              replies: [
                ,
                {
                  name: "umer",
                  comment:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                  replies: [
                    ,
                    {
                      name: "umer",
                      comment:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                      replies: [],
                    },
                    {
                      name: "umer",
                      comment:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                      replies: [
                        ,
                        {
                          name: "umer",
                          comment:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                          replies: [],
                        },
                        {
                          name: "umer",
                          comment:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "umer",
                  comment:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                  replies: [
                    ,
                    {
                      name: "umer",
                      comment:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                      replies: [],
                    },
                    {
                      name: "umer",
                      comment:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "umer",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      replies: [],
    },
  ];
  return (
    <div>
      <CommentList commentData={commentData} />
    </div>
  );
};

export default CommentContainer;
