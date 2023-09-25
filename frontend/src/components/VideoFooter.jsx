import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = ({ tag, desc, song }) => {
  return (
    <div className="video-footer">
      <div className="videoFooter-text">
        <h3>@{tag}</h3>
        <p>{desc}</p>
        <div className="video-ticker">
          <MusicNoteIcon className="ticker-icon" />
          <Ticker mode="smooth">
            {() => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="footer-disc"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="disc-image"
      />
    </div>
  );
};

export default VideoFooter;
