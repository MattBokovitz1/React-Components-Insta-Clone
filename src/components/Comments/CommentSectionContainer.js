import React, { useState } from "react";
import Comment from "./Comment";
import Comments from "./Comments"
import "./Comments.css";

const CommentSection = props => {
  // Add state for the comments

  return (
    <div>
      {props.comments.map(e => (
        <Comment comment={e} />
      ))}
      <Comments currComments={props.currComments} updateComments={props.updateComments} comments={props.comments}
      />
    </div>
  );
};

export default CommentSection;