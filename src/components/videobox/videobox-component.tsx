import React from "react";

import "./video-styles.css";

export interface VideoBoxProps {}

const VideoBox: React.SFC<VideoBoxProps> = (props) => {
  return (
    <div style={{}} className="videoBox">
      <div
        className="embed-responsive embed-responsive-16by9 mb-4"
        style={{ height: "92vh" }}
      >
        <iframe
          style={{ height: "75%" }}
          src="https://www.youtube.com/embed/f449WCh5OGg"
          frameBorder="0"
          data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      {/* <Player
    playsInline
    poster="/assets/poster.png"
    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  /> */}
    </div>
  );
};

export default VideoBox;
