import React, { useState } from "react";
import "./VideoPlayer.css";
import axios from "axios";

function VideoPlayer({
  id,
  name,
  preview,
  video,
  type,
  isAuthenticated,
  rating,
}) {
  const [likes, setLikes] = useState(rating.likes);
  const [dislikes, setDislikes] = useState(rating.dislikes);

  const fetchVideoData = async () => {
    try {
      const response = await axios.get(`https://hexatube.fun/api/video`, {
        params: {
          id,
        },
        headers: {
          Accept: "application/json",
        },
      });
      setLikes(response.data.rating.likes);
      setDislikes(response.data.rating.dislikes);
    } catch (error) {
      console.error("Error fetching video data", error);
    }
  };

  const handleLikeDislike = async (likeOrDislike) => {
    try {
      await axios.post(
        `https://hexatube.fun/api/video/${likeOrDislike}`,
        { id },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        },
      );
      await fetchVideoData();
    } catch (error) {
      console.error("Error liking or disliking video", error);
    }
  };

  return (
    <div className="videoplayer">
      <p className="video-title">{name}</p>
      <video className="video" poster={preview} controls muted>
        <source src={video} type={type} />
      </video>
      <div className="videoplayer-buttons">
        <button
          onClick={() => handleLikeDislike("like")}
          disabled={!isAuthenticated}
        >
          👍 {likes}
        </button>
        <button
          onClick={() => handleLikeDislike("dislike")}
          disabled={!isAuthenticated}
        >
          👎 {dislikes}
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
