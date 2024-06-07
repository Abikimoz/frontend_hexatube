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
  { id: 'all', icon: <RxHome className='icons'/> },
  { id: 'transport', icon: <FaCar className='icons'/>},
  { id: 'treveling', icon: <BsBackpack className='icons'/> },
  { id: 'beauty', icon: <BsStars className='icons'/>},
  { id: 'news', icon: <BsNewspaper className='icons'/>},
  { id: 'diy', icon: <BiPalette className='icons'/>},
  { id: 'tech', icon: <GiTechnoHeart className='icons'/>},
  { id: 'coocking', icon: <GiForkKnifeSpoon className='icons'/>},
  { id: 'cartoon', icon: <TbMickeyFilled className='icons'/>},
  { id: 'education', icon: <MdCastForEducation className='icons'/>},
  { id: 'plantsAndAnimals', icon: <GiPlantsAndAnimals className='icons'/>},
  { id: 'family', icon: <MdFamilyRestroom className='icons'/>},
  { id: 'psychology', icon: <MdOutlinePsychology className='icons'/>},
  { id: 'medical', icon: <FaLaptopMedical className='icons'/>},
  { id: 'games', icon: <GrGamepad className='icons'/>},
  { id: 'show', icon: <MdOutlineTheaterComedy className='icons'/>},
  { id: 'music', icon: <IoMusicalNotes className='icons'/>},
  { id: 'films', icon: <GiFilmSpool className='icons'/>},
  { id: 'podcast', icon: <FaCommentDots className='icons'/>},
];

function Categories({ setCategory }) {
  return (
    <nav className="cat">
      <div className='nav-icons'>
        {categories.map(category => (
          <li key={category.id} onClick={() => setCategory(category.id)}>
            {category.icon} 
          </li>
        ))}
      </div>
    </nav>
  );
}


export default Categories;
{/* Ведется работа, или готово. Оцените */}