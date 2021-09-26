import React from "react";
import Tweetbox from './Tweetbox'
import "./Feed.css";
import Post from './Post'
const Feed = () => {
  return (
    <div className="feed">
      {/* home */}
      <div className="feed__home">
        <h2>Home</h2>
      </div>
      
      {/* tweetbox */}
      <Tweetbox/>
      {/* post */}
      <Post/>
      <Post/>
      
      {/* post */}
      {/* post */}
    </div>
  );
};

export default Feed;
