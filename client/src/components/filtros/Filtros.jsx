import { connect } from 'react-redux'
import { filterCreated,orderByName,orderByRating,filterVideogamesByGenre} from '../../actions/index'
import { useState } from 'react'

export function Filtros(props){

    const genres = props.genres
    const [orden, setOrden] = useState('')
    
    function handleFilterGenres(e) {
        e.preventDefault();
        props.filterVideogamesByGenre(e.target.value)
      }

    function handleSort (e){
        e.preventDefault();
        props.orderByName(e.target.value)      
        setOrden(`Ordenado ${e.target.value}`)
        console.log(e.target.value);
    }

    function handleSortRating(e) {
        e.preventDefault();
        props.orderByRating(e.target.value)        
        setOrden(`Ordenado ${e.target.value}`)
    }
    
    function handleFilterCreated (e){
        props.filterCreated(e.target.value)
    }

        return(            
            <div>                
            <label>Generos</label>
            <select className="genero" onChange={(e) => handleFilterGenres(e)}>
            <option value="All">Todos</option>
            {genres&&genres.map(genre => {
                return(
                <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>)
})}
          </select>
                <label>Orden Alfabetico</label>
            <select  onChange={e => handleSort(e)}>
                <option value='Asc'>Ascendente</option>
                <option value='Des'>Descendente</option>
            </select>
                <label>Orden por rating</label>
            <select onChange={e => handleSortRating(e)}>
                <option value='top'>Mayor</option>
                <option value='down'>Menor</option>
            </select>
                <label>Filtros</label>
            <select onChange={e => handleFilterCreated(e)}>
                <option value="all">Todos</option>
                <option value="created">Creados</option>
                <option value="api">Existentes</option>
            </select>   
            </div>
        )
}


function mapStateToProps(state){
    return{
        genres: state.genres
    }
}

function mapDispatchToProps(dispatch){
    return{
        filterCreated: (payload) => dispatch(filterCreated(payload)),
        orderByName: (payload) => dispatch(orderByName(payload)),
        orderByRating: (payload) => dispatch(orderByRating(payload)),
        filterVideogamesByGenre: (payload) => dispatch(filterVideogamesByGenre(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtros)

