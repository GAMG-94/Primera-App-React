import React from 'react'
import s from './style.module.css';
//rafce - ABREVIATURA PARA CREAR EL ESQUELETO DE COMPONENTES

const DisplayDifficulty = (props) => { // Props se utiliza para recibir mas de 4 propiedades
  const { difficulty } = props;
  console.log(props);
  return (
    <div className={s.container}>
      {props.difficulty
        ? `Difficulty set to ${difficulty}`
        : "No difficulty set"}
    </div>
  );
};

export default DisplayDifficulty;