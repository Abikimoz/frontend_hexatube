import React, { useState, useEffect } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { categories } from '../Сategories/Collection';
import axios from 'axios';
import './Upload.css';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('file', file);
    formData.append('category', selectedCategory);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Видео успешно загружено:', response.data);
    } catch (error) {
      console.error('Ошибка при загрузке видео:', error);
    }
  };

  return (
    <div className='upload'>
      <div className='background'>
        <h2>Загрузка</h2>
      </div>
      <form onSubmit={handleSubmit} className='upload-form'>
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
          <label htmlFor="author">Автор:</label>
          <input 
            type='text' 
            id='author' 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
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
            onChange={handleFileChange} 
            required 
          />
        </div>
        <div className='form-group '>
          <label htmlFor="image">Изображение:</label>
          <input 
            type='file' 
            id='image' 
            accept='image/*' 
            onChange={handleImageChange} 
            required 
          />
        </div>
        <div>
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Предпросмотр" />
            </div>
          )}
        </div>
        

        <button type='submit'><FaCloudUploadAlt color='white' size={50}/></button>
      </form>
    </div>
  );
};


export default Upload;
