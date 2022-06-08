import React ,{ useState } from "react";
import { useDispatch } from "react-redux";
import { searchVideogames } from "../../actions";
import './SearchBar.css'

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleImputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchVideogames(name));
  }
  
  return (
    <div className='box'>
      <input
        type="text"
        placeholder="Buscar Videojuego..."
        onChange={(e) => handleImputChange(e)}
      ></input>
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Buscar
      </button>
    </div>
  );
}
