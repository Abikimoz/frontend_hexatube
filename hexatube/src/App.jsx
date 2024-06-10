import { useState } from 'react'
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Categories from './components/Сategories/Сategories.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState('all'); // Default category
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query);
    // Implement search logic here, e.g., filtering videos based on the query
  };

  return (
      <div className="App">
        <Header />
        <Profile />
        <Categories />
          <div className="content"> 
          </div>
         <Footer />
      </div>
    );
}

export default App;
