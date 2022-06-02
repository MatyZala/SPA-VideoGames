import SearchBar from "../searchBar/SearchBar";
import Filtros from '../filtros/Filtros'
import { NavLink } from 'react-router-dom'

export default function NavBar(){
    return(
        <div>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/videogame'}>Create Videogame</NavLink>
            <Filtros/>
            <SearchBar/>
        </div>
    )
}