import React, { useRef } from "react";
import "./Videos.css";
import { useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Videos = ({ url, tag, desc, song, like, share, comment }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    // if video is playing stop it
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    //if not play it
  };

  return (
    <div className="video">
      <video
        loop
        ref={videoRef}
        className="video-player"
        src={url}
        onClick={handleVideoPress}
      ></video>

      <VideoFooter tag={tag} desc={desc} song={song} />
      <VideoSidebar like={like} share={share} comment={comment} />
    </div>
  );
};

export default Videos;
