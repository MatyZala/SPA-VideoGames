import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postVideogame, getAllGenres } from "../../actions";

export default function CreateVideogame() {
  const genres = useSelector((state) => state.genres);
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        platforms: [],
        genres: []
    })    

    const [errors, setErrors] = useState({})

    function validate(input){
        let errors = {};
        if(!input.name){
            errors.name = 'Se requiere un nombre!'
        } else if(typeof input.name === 'number') {
            errors.name = 'Debes ingresar solo texto!'
        } else if(!input.description){
            errors.description = 'Se requiere descripcion!'
        } else if(!input.released){
            errors.released = 'Se requiere fecha de lanzamiento!'
        } else if(!input.rating){
            errors.rating = 'Se requiere puntaje rating!'
        } else if(Number(input.rating) < 0){
            errors.rating = 'No se permiten numeros negativos'            
        } else if(Number(input.rating) > 5 ){
            errors.rating = 'El rating debe rondar entre 0 - 5'            
        } else if(!input.platforms.length){
            errors.platforms = 'Se requieren plataformas!'
        } else if(!input.genres.length){
            errors.genres = 'Se requieren generos!'
        }
        return errors;
    }

    const [button, setButton] = useState({})

    useEffect(() => {
        input.name &&
        input.description &&
        input.rating &&
        input.released &&
        input.platforms.length &&
        input.genres.length ? 
        setButton(false) :
        setButton(true)
    },[input])    

    function handleDelete(el) {
      setInput({
        ...input,
        genres: input.genres.filter((genre) => genre !== el),
      })
    }
    function handleSelect(e) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
    }

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]:  e.target.value 
        })
        setErrors(validate({
            ...input,
            [e.target.name]:  e.target.value 
        }))
        console.log(input)
    }

    const handleCheckPlatforms = (e) => {
        if (e.target.checked){
            setInput({
                ...input,
                platforms: [...input.platforms , e.target.value]
            })
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        dispatch(postVideogame(input))
        console.log(input);
        alert('Videojuego Agregado A La Wiki-Games Con Exito!')
        setInput({
            name: '',
            description: '',
            released: '',
            rating: '',
            platforms: [],
            genres: []        
        })
    }

    useEffect(() => {
      dispatch(getAllGenres());
    }, [dispatch]);

    return (
        <>
        <Link to='/home'>
            <button>HOME</button>
        </Link>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label>Nombre:</label>
                <input type="text" 
                value={input.name} 
                onChange={(e) => handleChange(e)} 
                name='name'/>
                {errors.name && (
                    <p>{errors.name}</p>
                )}
            </div>
            <div>
                <label>Descripcion:</label>
                <input type="text"
                value={input.description}
                onChange={handleChange} 
                name='description'/>
                {errors.description && (
                    <p>{errors.description}</p>
                )}
            </div>
            <div>
                <label>Fecha De Lanzamiento:</label>
                <input type="date"
                value={input.released}
                onChange={handleChange} 
                name='released'/>
                {errors.released && (
                    <p>{errors.released}</p>
                )}
            </div>
            <div>
                <label>Rating:</label>
                <input type="text"
                value={input.rating} 
                onChange={handleChange} 
                name='rating'/>
                {errors.rating && (
                    <p>{errors.rating}</p>
                )}
            </div>
            <div>
                <label>Plataformas:</label>
                <label><input 
                type="checkbox"
                value='PC'
                onChange={(e) => handleCheckPlatforms(e)} 
                name='PC'/>PC</label>
                <label><input 
                type="checkbox"
                value='PlayStation 5'
                onChange={(e) => handleCheckPlatforms(e)}
                name='PlayStation 5'/>PlayStation 5</label>
                <label><input 
                type="checkbox"
                value='Xbox One'
                onChange={(e) => handleCheckPlatforms(e)} 
                name='Xbox One'/>Xbox One</label>
                <label><input 
                type="checkbox"
                value='PlayStation 4'
                onChange={(e) => handleCheckPlatforms(e)}
                name='PlayStation 4'/>PlayStation 4</label>
                <label><input 
                type="checkbox"
                value='Xbox Series S/X'
                onChange={(e) => handleCheckPlatforms(e)}
                name='Xbox Series S/X'/>Xbox Series S/X</label>
                <label><input 
                type="checkbox"
                value='Nintendo Switch'
                onChange={(e) => handleCheckPlatforms(e)} 
                name='Nintendo Switch'/>Nintendo Switch</label>
                <label><input 
                type="checkbox"
                value='iOS'
                onChange={(e) => handleCheckPlatforms(e)}
                name='iOS'/>iOS</label>
                <label><input 
                type="checkbox"
                value='Android'
                onChange={(e) => handleCheckPlatforms(e)} 
                name='Android'/>Android</label>
                <label><input 
                type="checkbox"
                value='Nintendo 3DS'
                onChange={(e) => handleCheckPlatforms(e)}
                name='Nintendo 3DS'/>Nintendo 3DS</label>
                <label><input 
                type="checkbox"
                value='Nintendo DS'
                onChange={(e) => handleCheckPlatforms(e)}
                name='Nintendo DS'/>Nintendo DS</label>
                <label><input 
                type="checkbox"
                value='Nintendo DSi'
                onChange={(e) => handleCheckPlatforms(e)}
                name='Nintendo DSi'/>Nintendo DSi</label>
                <label><input 
                type="checkbox"
                value='macOS'
                onChange={(e) => handleCheckPlatforms(e)}
                name='macOS'/>macOS</label>
                <label><input 
                type="checkbox"
                value='Linux'
                onChange={(e) => handleCheckPlatforms(e)}
                name='Linux'/>Linux</label>
                <label><input 
                type="checkbox"
                value='Xbox 360'
                onChange={(e) => handleCheckPlatforms(e)}
                name='Xbox 360'/>Xbox 360</label>
                <label><input 
                type="checkbox"
                value='Xbox'
                onChange={(e) => handleCheckPlatforms(e)}
                name='Xbox'/>Xbox</label>
                <label><input 
                type="checkbox"
                value='PlayStation 3'
                onChange={(e) => handleCheckPlatforms(e)} 
                name='PlayStation 3'/>PlayStation 3</label>
                <label><input 
                type="checkbox"
                value='PlayStation 2'
                onChange={(e) => handleCheckPlatforms(e)}
                name='PlayStation 2'/>PlayStation 2</label>
                <label><input 
                type="checkbox"
                value='PlayStation'
                onChange={(e) => handleCheckPlatforms(e)}
                name='PlayStation'/>PlayStation</label>
                {errors.platforms && (
                    <p>{errors.description}</p>
                )}
            </div>
            <div>
            <div>
          <label>GENEROS</label>
          <select onChange={(e) => handleSelect(e)}>
            {genres.map((genres) => (
              <option key={genres.id} value={genres.name}>
                {genres.name}
              </option>
            ))}
          </select>
          <ul>
            <li>{input.genres.map((el) => el + " ,")}</li>
          </ul>
        </div>
        {input.genres.map((el) => (
          <div>
            <p>{el}</p>
            <button onClick={() => handleDelete(el)}>
              X
            </button>
          </div>
        ))}
                {errors.genres && (
                    <p>{errors.genres}</p>
                )}
            </div>
            <button disabled={button} type="submit">Create Videogame</button>
        </form>
        </>
    )
}
