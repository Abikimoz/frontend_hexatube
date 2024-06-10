import React from 'react';
import './VideoCard.css';

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-title">{video.title}</div>
    </div>
  );
}

export default VideoCard;

{/* Ведется работа */}