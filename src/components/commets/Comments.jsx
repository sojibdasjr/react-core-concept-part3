import React, { useEffect, useState } from "react";
import Comment from "./Comment";

const Comments = () => {
  const [comments, SetComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => SetComments(data));
  }, []);
  return (
    <div>
      <h1>Show All Comments : {comments.length} </h1>
      <div className="comment_Container">
        {
            comments.map(commentsData=> <Comment commentsProps={commentsData} key={commentsData.id}></Comment>)
        }
      </div>
    </div>
  );
};

export default Comments;
