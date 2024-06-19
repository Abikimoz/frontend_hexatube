import React from 'react';
import './VideoGrid.css';
import VideoCard from '../VideoCard/VideoCard';

function VideoGrid({ videos, onVideoClick }) {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div
          key={video.id}
          className="video-item"
          onClick={() => onVideoClick(video)}
        >
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
}

export default VideoGrid;
