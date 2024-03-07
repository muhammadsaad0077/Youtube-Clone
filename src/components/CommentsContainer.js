import React from "react";

const commentsData = [
  {
    name: "Saad",
    text: "Lorem ipsum dolor sit",
    replies: [],
  },
  {
    name: "Saad",
    text: "Lorem ipsum dolor sit",
    replies: [
      {
        name: "Saad",
        text: "Lorem ipsum dolor sit",
        replies: [
          {
            name: "Saad",
            text: "Lorem ipsum dolor sit",
            replies: [
              {
                name: "Saad",
                text: "Lorem ipsum dolor sit",
                replies: [
                  {
                    name: "Saad",
                    text: "Lorem ipsum dolor sit",
                    replies: [
                      {
                        name: "Saad",
                        text: "Lorem ipsum dolor sit",
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
        name: "Saad",
        text: "Lorem ipsum dolor sit",
        replies: [
          {
            name: "Saad",
            text: "Lorem ipsum dolor sit",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Saad",
    text: "Lorem ipsum dolor sit",
    replies: [
      {
        name: "Saad",
        text: "Lorem ipsum dolor sit",
        replies: [],
      },
    ],
  },
  {
    name: "Saad",
    text: "Lorem ipsum dolor sit",
    replies: [
      {
        name: "Saad",
        text: "Lorem ipsum dolor sit",
        replies: [],
      },
    ],
  },
  {
    name: "Saad",
    text: "Lorem ipsum dolor sit",
    replies: [
      {
        name: "Saad",
        text: "Lorem ipsum dolor sit",
        replies: [],
      },
    ],
  },
  {
    name: "Saad",
    text: "Lorem ipsum dolor sit",
    replies: [
      {
        name: "Saad",
        text: "Lorem ipsum dolor sit",
        replies: [],
      },
    ],
  },
  {
    name: "Saad",
    text: "Lorem ipsum dolor sit",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-100 p-2 rounded-lg mt-2">
      <img
        className="h-8 w-12"
        alt="user-icon"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({comments}) => {
  return comments.map((comment, index) =>(
    <div>
    <Comment key={index} data={comment} />
    <div key={index} className="pl-5 border border-l-black ml-5">
    <CommentsList comments={comment.replies}/>
    </div>
    </div>
    ));  
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
