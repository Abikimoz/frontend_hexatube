import { useState, useEffect  } from 'react';
import axios from 'axios';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Categories from './components/Сategories/Сategories.jsx';
import VideoGrid from './components/VideoGrid/VideoGrid.jsx';
import Register from './components/Register/Register.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Login from './components/Login/Login.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';
import Upload from './components/Upload/Upload.jsx';
import Team from './components/Team/Team.jsx';
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentComponent, setCurrentComponent] = useState('videoGrid');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchVideos();
}, [selectedCategory, searchQuery]);

const fetchVideos = async () => {
    try {
        const response = await axios.get('https://hexatube.fun:443/api/video/list', {
            params: {
                page_size: 10,
                page: 1,
                category: selectedCategory !== 'all' ? selectedCategory : undefined,
                query: searchQuery || undefined
            },
            headers: {
                accept: 'application/json'
            }
        });

        console.log('Response data:', response.data);

        const videoData = response.data.videos.map((video) => ({
            id: video.id,
            title: video.name,
            thumbnail: video.preview
        }));
        
        setVideos(videoData);
        console.log('Videos set:', videoData);
    } catch (error) {
        console.error('Error fetching the videos: ', error);
    }
};

const handleCategoryChange = (category) => {
    setSelectedCategory(category);
};

const handleSearch = (query) => {
    setSearchQuery(query);
};

const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setCurrentComponent('videoDetail');
};

  const components = {
    videoGrid: <VideoGrid videos={videos} />,
    login: <Login setSelectedComponent={setCurrentComponent}/>,
    register: <Register />,
    dashboard: <Dashboard />,
    about: <About/>,
    profile: <Profile setSelectedComponent={setCurrentComponent}/>,
    team: <Team/>,
    upload: <Upload/>,
    header: <Header setSelectedComponent={setCurrentComponent}/>,
    videoDetail: selectedVideo ? (
        <div>
            <h2>Выбрано видео: {selectedVideo.title}</h2>
        </div>
    ) : null,
  };

  const renderContent = () => {
      return components[currentComponent] || <VideoGrid videos={videos} onVideoClick={handleVideoClick} />;
  };

  return (
      <div className="App">
        <Header setSelectedComponent={setCurrentComponent}/>
        <div className='profile'>
        <Profile setSelectedComponent={setCurrentComponent}/>
        </div>
        <Categories selectedCategory={selectedCategory} setCategory={handleCategoryChange} />
          <div className="content"> 
          {renderContent()}
          </div>
          <Categories selectedCategory={selectedCategory} setCategory={handleCategoryChange} />
          <div className="content">
              {renderContent()}
          </div>
          <Footer setSelectedComponent={setCurrentComponent} />
      </div>
  );
}

export default App;
