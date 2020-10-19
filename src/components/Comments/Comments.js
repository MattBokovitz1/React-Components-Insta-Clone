import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  const [inputValue, updateInputVal] = useState("");
  // 🔥 Make sure the parent of Comments is passing the right props!
  const updateComment = () => {
    if(inputValue != ""){
      props.updateComments([
        ...props.comments,
        { username: "LAMBDA_LLAMA", text: inputValue }
      ])
    }
  }
  const clearField = () =>{
    document.querySelectorAll(".clearField").forEach(function (x){
      x.value = "" ? null : (x.value = "")
    })
    updateInputVal("")
  };

  const handleSubmit = e => {
    e.preventDefault();
    clearField();
    updateComment();
  };

  const handleChange = e =>{
    updateInputVal(e.target.value);
    e.target.style.color = "black";
  }

  return (
    <div>
      <form className="comment-form" onSubmit={handleSubmit}>
      <input
        class="clearField"
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={handleChange}
        />
        <button>...</button>
        </form>
      {/* map through the comments prop and render a Comment for every piece of data */}
    </div>
  );
};

export default Comments;
