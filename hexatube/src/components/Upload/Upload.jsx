import React, { useState, useEffect } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { categories } from '../Сategories/Collection';
import axios from 'axios';
import './Upload.css';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [successfullyUploaded, setSuccessfullyUploaded] = useState(false);

  const handleVideoChange = (e) => {
    setSuccessfullyUploaded(false);
    setVideo(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setSuccessfullyUploaded(false);
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
      setIsImageLoaded(true);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', title);
    formData.append('video', video);
    formData.append('preview', image);
    formData.append('category', selectedCategory);

    try {
      const response = await axios.post('https://hexatube.fun/api/video/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Видео успешно загружено:', response.data);
      setSuccessfullyUploaded(true);
    } catch (error) {
      console.error('Ошибка при загрузке видео:', error);
    }
  };

  return (
    <div className='upload'>
      <form onSubmit={handleSubmit} className='upload-form'>
        <div className='form-left'>
          <div className='form-group'>
            <label htmlFor='title'>Название:</label>
            <input 
              type='text' 
              id='title' 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          <div className='form-group'>
            <label htmlFor='category'>Категория:</label>
            <select 
              id='category' 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)} 
              required 
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="file">Видео:</label>
            <input 
              type='file' 
              id='file' 
              accept='video/*' 
              onChange={handleVideoChange} 
              required 
            />
          </div>
          <div className='form-group'>
            <label htmlFor="image">Preview:</label>
            <input 
              type='file' 
              id='image' 
              accept='image/*' 
              onChange={handleImageChange} 
              required 
            />
          </div>
          <div className='button-container'>
            <button type='submit'>
              <FaCloudUploadAlt color='white' size={50}/>
            </button>
          </div>
        </div>
        {successfullyUploaded ? <div>
          <p className="uploaded">Загружено!</p>
        </div> : <div></div>}
        <div className={`image-preview ${!isImageLoaded ? 'hidden' : ''}`}>
          <div className='preview-text'>Preview:</div>
          {imagePreview && <img src={imagePreview} alt="Предпросмотр" />}
        </div>
      </form>
    </div>
  );
};

export default Upload;
