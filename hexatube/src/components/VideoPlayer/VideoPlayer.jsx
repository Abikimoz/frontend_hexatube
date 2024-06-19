import React from "react";
import "./VideoPlayer.css";

function VideoPlayer({ id, title, thumbnail, videoUrl, type }) {
  return (
    <div className="videoplayer">
      <p className="video-title">{title}</p>
      <video width="600" height={480} poster={thumbnail} controls muted>
        <source src={videoUrl} type={type} />
      </video>
    </div>
  );
}

export default VideoPlayer;
