import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
    return (
        <video width="600" controls>
            <source src={videoUrl} type="video/mp4" />
        </video>
    );
};

export default VideoPlayer;