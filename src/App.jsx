import { useState } from 'react'
import DisplayDifficulty from './components/DisplayDifficulty/DisplayDifficulty';
import MenuList from './components/MenuList/MenuList';
import s from './style.module.css'

function App() {

  // Estas son inyecciones de información - datos
  const [currentDifficulty, setCurrentDifficulty] = useState(""); //Si se deja vacio marca indefinido - "" Se sabe que es string - 1 que es de valor numerico

  // Ciclos de vida: mount (montado), update (actualizado), unmount (destruccion o desacople)

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  }

  // JSX = XML + JS
  return (
    // style={{ , }} se usa para darle estilos a unos elementos definidos
    //<div className={s.worksapace}>
    <div>      
      <h1 style={{ textAlign: "center", color: "red" }}>Selecciona la dificultad de React</h1>
      <div className={s.workspace}>
        <MenuList 
        difficulty={currentDifficulty}
        onItemClick={onMenuListItemClick}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>      
    </div>
  );
}

export default App;
