import { connect } from 'react-redux'
import { filterCreated,orderByName,orderByRating,filterVideogamesByGenre} from '../../actions/index'
import './Filtros.css'

export function Filtros(props){

    const genres = props.genres
    
    function handleFilterGenres(e) {
        e.preventDefault();
        props.filterVideogamesByGenre(e.target.value)
      }

    function handleSort (e){
        e.preventDefault();
        props.orderByName(e.target.value)
        props.setCont(props.cont + 1)  
    }

    function handleSortRating(e) {
        e.preventDefault();
        props.orderByRating(e.target.value)
        props.setCont(props.cont + 1)        
    }
    
    function handleFilterCreated (e){
        props.filterCreated(e.target.value, props.videogames , props.unfilteredVideogame) 
    }

        return(            
            <div className='selector'> 
            <div className='selectd'>
            <select className="genero" onChange={(e) => handleFilterGenres(e)}>
                <option hidden> Filtrar Genero</option>
            <option value="All">Todos Los Generos</option>
            {genres&&genres.map(genre => {
                return(
                <option key={genre.ID} value={genre.name}>
                {genre.name}
              </option>)
})}
          </select>
          </div>
                <div className='selecta'>
            <select  onChange={e => handleSort(e)}>
                <option hidden>Alfabeticamente</option>
                <option value='Asc'>A - Z</option>
                <option value='Des'>Z - A</option>
            </select>
            </div>
                <div className='selectb'>
            <select onChange={e => handleSortRating(e)}>
                <option hidden>Rating</option>
                <option value='top'>Mayor Rating</option>
                <option value='down'>Menor Rating</option>
            </select>
            </div>
                <div className='selectc'>
            <select onChange={e => handleFilterCreated(e)}>
                <option hidden>Filtrar</option>
                <option value="all">Todos Los Juegos</option>
                <option value="db">Juegos Creados</option>
                <option value="api">Juegos Existentes</option>
            </select>   
            </div>
            </div>
        )
}


function mapStateToProps(state){
    return{
        genres: state.genres, 
        videogames: state.videogames,
        unfilteredVideogame: state.unfilteredVideogame,
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

