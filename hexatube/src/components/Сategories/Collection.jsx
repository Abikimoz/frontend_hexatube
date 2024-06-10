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


export const categories = [
  { id: 'all', name: 'Случайные', icon: RxHome },
  { id: 'transport', name: 'Транспорт', icon: FaCar },
  { id: 'treveling', name: 'Путешествия', icon: BsBackpack },
  { id: 'beauty', name: 'Красота', icon: BsStars },
  { id: 'news', name: 'Новости', icon: BsNewspaper },
  { id: 'diy', name: 'Хендмейд и лайфхаки', icon: BiPalette },
  { id: 'tech', name: 'Технологии', icon: GiTechnoHeart },
  { id: 'coocking', name: 'Кулинария', icon: GiForkKnifeSpoon },
  { id: 'cartoon', name: 'Мультфильмы', icon: TbMickeyFilled },
  { id: 'education', name: 'Образование', icon: MdCastForEducation },
  { id: 'plantsAndAnimals', name: 'Флора и фауна', icon: GiPlantsAndAnimals },
  { id: 'family', name: 'Семья', icon: MdFamilyRestroom },
  { id: 'psychology', name: 'Психология', icon: MdOutlinePsychology },
  { id: 'medical', name: 'Медицина', icon: FaLaptopMedical },
  { id: 'games', name: 'Игры', icon: GrGamepad },
  { id: 'show', name: 'Шоу', icon: MdOutlineTheaterComedy },
  { id: 'music', name: 'Музыка', icon: IoMusicalNotes },
  { id: 'films', name: 'Фильмы', icon: GiFilmSpool },
  { id: 'podcast', name: 'Подкасты', icon: FaCommentDots },
];
