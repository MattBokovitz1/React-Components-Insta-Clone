import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';
import data from "../../dummy-data"

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const [post, setPost] = useState(data);

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {post.map(post =>{
        return <Post post={post} setPost={setPost} />
      })}
    </div>
  );
};

export default Posts;
