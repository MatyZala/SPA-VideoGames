import SearchBar from "../searchBar/SearchBar";
import Filtros from '../filtros/Filtros'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar(props){
    return(
        <div className="NB">
            <NavLink to={'/videogame'} className='v'><h2>Crear Videojuego</h2></NavLink>
            <Filtros cont = {props.cont} setCont = {props.setCont}/>
            <SearchBar className='sb'/>
        </div>
    )
}