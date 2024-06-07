import React, { useEffect, useState } from 'react';
import './VideoGrid.css';
import VideoCard from './VideoCard.jsx';
{/*
function VideoGrid({ category }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(`api/videos?category=${category}`);
      const data = await response.json();
      setVideos(data);
    };

    fetchVideos();
  }, [category]);

  return (
    <div className="video-grid">
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideoGrid;

 Ведется работа */}