import React from 'react';
import PropTypes from 'prop-types';
import { categories } from './Collection.jsx';
import './Categories.css';


const Categories = ({ setSelectedComponent, selectedCategory, setCategory }) => {
  return (
    <nav className="cat">
      <div className='nav-icons'>
      {categories.map(category => {
          const IconComponent = category.icon;
          return (
            <li 
              key={category.id} 
              onClick={() => { 
                setCategory(category.id);
                setSelectedComponent('VideoGrid')
               }}
              className={selectedCategory === category.id ? 'active' : ''}
            >
              <IconComponent className={`icons ${ selectedCategory === category.id  ? 'active' : ''}` } />
            </li>
          );
        })}
      </div>
    </nav>
  );
}

Categories.propTypes = {
  setSelectedComponent: PropTypes.func.isRequired,
};

export default Categories;
{/* готово*/}