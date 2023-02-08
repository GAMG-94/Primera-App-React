import React, { useState } from 'react'
import s from './style.module.css'

const MenuListItem = () => {

  const [isHovered, setIsHovered] = useState(false);

  const activate = () => {
    setIsHovered(true);
  }

  const deactivate = () => {
    setIsHovered(false);
  }

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      if (props.isSelected) {
        return "#26baea";
      } else {
        return "#aff0ef";
      }
    }
  }

  const onItemClick = () => {
    props.onClick(props.difficulty);
  }

  return (

    <div
      className={s.container}
      onClick={onItemClick}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor}}
    >
      Set to: {props.difficulty}
    </div>
  )
}

export default MenuListItem