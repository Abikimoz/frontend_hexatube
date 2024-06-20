import React from "react";
import "./VideoCard.css";

function VideoCard({ video }) {
	return (
		<div className="video-card">
			<img src={video.preview} alt={video.name} />
			<div className="video-title">{video.name}</div>
		</div>
	);
}

export default VideoCard;
