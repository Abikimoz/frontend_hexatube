import React from 'react';
import './Categories.css';
import { RxHome } from "react-icons/rx";
import { FaCar, FaLaptopMedical } from "react-icons/fa";
import { BsBackpack, BsStars, BsNewspaper } from "react-icons/bs";
import { BiPalette } from "react-icons/bi";
import { GiTechnoHeart, GiForkKnifeSpoon, GiPlantsAndAnimals, GiFilmSpool } from "react-icons/gi";
import { TbMickeyFilled } from "react-icons/tb";
import { MdCastForEducation,MdFamilyRestroom, MdOutlinePsychology, MdOutlineTheaterComedy} from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
import { IoMusicalNotes } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa6";

const categories = [
  { id: 'all', icon: RxHome },
  { id: 'transport', icon: FaCar },
  { id: 'treveling', icon: BsBackpack },
  { id: 'beauty', icon: BsStars },
  { id: 'news', icon: BsNewspaper },
  { id: 'diy', icon: BiPalette },
  { id: 'tech', icon: GiTechnoHeart },
  { id: 'coocking', icon: GiForkKnifeSpoon },
  { id: 'cartoon', icon: TbMickeyFilled },
  { id: 'education', icon: MdCastForEducation },
  { id: 'plantsAndAnimals', icon: GiPlantsAndAnimals },
  { id: 'family', icon: MdFamilyRestroom },
  { id: 'psychology', icon: MdOutlinePsychology },
  { id: 'medical', icon: FaLaptopMedical },
  { id: 'games', icon: GrGamepad },
  { id: 'show', icon: MdOutlineTheaterComedy },
  { id: 'music', icon: IoMusicalNotes },
  { id: 'films', icon: GiFilmSpool },
  { id: 'podcast', icon: FaCommentDots },
];

function Categories({ selectedCategory, setCategory }) {
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
{/* Ведется работа, или готово. Оцените */}