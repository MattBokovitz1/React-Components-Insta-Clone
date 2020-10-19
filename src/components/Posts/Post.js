import React, { useState } from 'react';
import Comments from '../Comments/Comments';
import CommentSection from '../Comments/CommentSectionContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import "./Posts.css"

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  console.log(props);
  const [ likes, setLikes ] = useState(props.post.likes)
  const [ comments, updateComments ] = useState(props.post.comments)
  
  const handleLike = (e) => {
    e.target.classList.toggle("like-red");

    if (e.target.classList.value.includes("like-red")) {
      setLikes(likes + 1);
      e.target.style.color = "red";
      // Remove a like count otherwise
    } else {
      setLikes(likes - 1);
      e.target.style.color = "black";
    }
  }

  return (
    <div className='post-border'>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likes={likes} setLikes={setLikes} handleLike={handleLike} />
      {/* Comments also wants its props! */}
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
        comments={comments}
        updateComments={updateComments}
      />
    </div>
  );
};

export default Post;
