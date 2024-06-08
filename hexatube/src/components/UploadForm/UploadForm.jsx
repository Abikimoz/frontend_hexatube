import React, { useState } from 'react';
import axios from '../services/api';

const UploadForm = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video', file);

        try {
            await axios.post('/upload', formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('Video uploaded successfully!');
        } catch (error) {
            console.error('Error uploading video', error);
            alert('Failed to upload video');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadForm;