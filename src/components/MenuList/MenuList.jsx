import s from './style.module.css'
import MenuListItem from '../MenuListItem/MenuListItem'
import { DIFFICULTIES } from './constant'

// Render props: props - patron de diseño
// Propiedades
const MenuList = (props) => {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty) => (
        <MenuListItem
          key={difficulty}
          isSelected = {props.difficulty === difficulty}
          onClick = {props.onItemClick}
          difficulty = {difficulty}
        />
      ))
      }
    </div>
  );
}

export default MenuList;