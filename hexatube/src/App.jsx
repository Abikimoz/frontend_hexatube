import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Categories from './components/Сategories/Сategories.jsx';
import VideoGrid from './components/VideoGrid/VideoGrid.jsx';
import Register from './components/Register/Register.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Login from './components/Login/Login.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';

import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentComponent, setCurrentComponent] = useState('videoGrid');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const components = {
    videoGrid: <VideoGrid videos={videos} />,
    login: <Login />,
    register: <Register />,
    dashboard: <Dashboard />,
    about: <About/>,
    profile: <Profile/>
  };

  const renderContent = () => {
      return components[currentComponent] || <VideoGrid videos={videos} onVideoClick={handleVideoClick} />;
  };

  return (
      <div className="App">
        <Header />
        <Profile setSelectedComponent={setCurrentComponent}/>
        <Categories selectedCategory={selectedCategory} setCategory={handleCategoryChange} />
          <div className="content"> 
          {renderContent()}
          </div>
         <Footer setSelectedComponent={setCurrentComponent} />
      </div>
    );
}

export default App;
