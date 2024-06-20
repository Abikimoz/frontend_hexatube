import { useState, useEffect } from 'react';
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
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentComponent, setCurrentComponent] = useState("videoGrid");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [triggerQuery, setTriggerQuery] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetchVideos();
    checkAuthStatus();
  }, [selectedCategory, triggerQuery]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "https://hexatube.fun:443/api/video/list",
        {
          params: {
            page_size: 10,
            page: 1,
            category: selectedCategory !== "all" ? selectedCategory : undefined,
            query: searchQuery !== "" ? searchQuery : undefined,
          },
          headers: {
            Accept: "application/json",
          },
        },
      );

      console.log("Response data:", response.data);

      setVideos(response.data.videos);
      console.log("Videos set:", response.data.videos);
    } catch (error) {
      console.error("Error fetching the videos: ", error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = () => {
    setTriggerQuery(!triggerQuery);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setCurrentComponent("videoDetail");
  };

  const registerUser = async (user) => {
    try {
      const response = await axios.post(
        "https://hexatube.fun:443/api/login/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true, // обязательно для отправки куки
        },
      );
      if (response.status === 200) {
        console.log("User registered successfully", response.data);
        // Дополнительные действия при успешной регистрации,
        // например, перенаправление на страницу входа.
      }
    } catch (error) {
      console.error("Error registering user", error);
      alert("Failed to register user");
    }
  };

  const loginUser = async (credentials) => {
    try {
      const response = await axios.post(
        "https://hexatube.fun:443/api/login",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true, // обязательно для отправки куки
        },
      );
      if (response.status === 200) {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
      }
    } catch (error) {
      console.error("Error logging in user", error);
      alert("Failed to log in user");
    }
  };

  const logoutUser = async () => {
    try {
      const response = await axios.post(
        "https://hexatube.fun:443/api/logout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true, // обязательно для отправки куки
        },
      );
      if (response.status === 200) {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
      }
    } catch (error) {
      console.error("Error logging out user", error);
      alert("Failed to log out user");
    }
  };

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get(
        "https://hexatube.fun:443/api/login/me",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true, // обязательно для отправки куки
        },
      );
      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  const components = {
    videoGrid: <VideoGrid videos={videos} onVideoClick={handleVideoClick} isAuthenticated={isAuthenticated} />,
    login: (
      <Login onLogin={loginUser} setSelectedComponent={setCurrentComponent} />
    ),
    register: <Register onRegister={registerUser} setSelectedComponent={setCurrentComponent} />,
    dashboard: <Dashboard />,
    about: <About />,
    team: <Team />,
    upload: <Upload />,
    header: <Header setSelectedComponent={setCurrentComponent} />,
    videoDetail: <VideoPlayer {...selectedVideo} isAuthenticated={isAuthenticated} />,
  };

  const renderContent = () =>
    components[currentComponent] || components.videoGrid;

  return (
    <div className="App">
      <Header
        setSelectedComponent={setCurrentComponent}
        onSearch={handleSearch}
        setSearchQuery={setSearchQuery}
      />
      <div className="profile">
        <Profile setSelectedComponent={setCurrentComponent} isAuthenticated={isAuthenticated} logoutUser={logoutUser} />
      </div>
      <Categories
        selectedCategory={selectedCategory}
        setCategory={handleCategoryChange}
        setSelectedComponent={setCurrentComponent}
      />
      <div className="content">
				{renderContent()}
      </div>
      <Footer setSelectedComponent={setCurrentComponent} />
    </div>
  );
}

export default App;
