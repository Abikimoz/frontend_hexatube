import React from 'react';
import { categories } from './Collection.jsx';
import './Categories.css';

const Categories = ({ selectedCategory, setCategory }) => {
  return (
    <nav className="cat">
      <div className='nav-icons'>
      {categories.map(category => {
          const IconComponent = category.icon;
          return (
            <li 
              key={category.id} 
              onClick={() => setCategory(category.id)}
              className={selectedCategory === category.id ? 'active' : ''}
            >
              <IconComponent className={`icons ${selectedCategory === category.id ? 'active' : ''}`} />
            </li>
          );
        })}
      </div>
    </nav>
  );
}


export default Categories;
{/* готово*/}