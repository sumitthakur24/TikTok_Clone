import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

const VideoSidebar = ({ like, share, comment }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="video-sidebar">
      <div className="side-button">
        {liked ? (
          <FavoriteIcon onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon onClick={() => setLiked(true)} />
        )}
        <p>{liked ? like + 1 : like}</p>
      </div>
      <div className="side-button">
        <CommentIcon />
        <p>{comment}</p>
      </div>
      <div className="side-button">
        <ShareIcon />
        <p>{share}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
