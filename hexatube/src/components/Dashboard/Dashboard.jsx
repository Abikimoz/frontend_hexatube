import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Upload from '../Upload/Upload';

const Dashboard = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('/videos', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setVideos(response.data);
            } catch (error) {
                console.error('Error fetching videos', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <Upload />
            <div>
                {videos.map(video => (
                    <VideoPlayer key={video.id} videoUrl={video.url} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
