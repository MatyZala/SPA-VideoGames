import { connect } from 'react-redux';
import {getAllGames, getAllGenres} from '../../actions'
import {useState, useEffect} from 'react'
import Card from '../card/Card'
import './Cards.css'
import loading from'../../media/loading.gif'

  export function Cards(props){

    const[page, setPage] = useState(1)

    const group = 15
    const finalPage = page * group
    const initialPage = finalPage - group

    const videogame = props.videogames.slice(initialPage, finalPage)

    useEffect(()=>{
      props.getAllGames()
      props.getAllGenres()
    }, [])

    if(page < 1) {
      setPage(1)
      return
    }

    if(page > 10) {
      setPage(10)
      return
    }

    return(
      <div>
        <div id="vgCards">
          {videogame[0] ? videogame.map(vg =>
          <div className='cardsStyle'>
            <Card
            ID = {vg.ID}
            name= {vg.name}
            image= {vg.image}
            genres = {vg.genres}
            />
          </div>          
          ): (<div>
            <img src={loading} alt="Loading" />
            <p>Cargando videogames</p>
            </div>)}
        </div>
        <div className='paginado'>
          <button onClick={()=> setPage(page - 1)}> Atras </button>
          <h3 className='num'>Page: {page}</h3>
          <button onClick={() => setPage(page + 1)}> Adelante </button>
        </div>
      </div>
        )
  }

  function mapStateToProps(state){
    return {videogames: state.videogames}
  }

  function mapDispatchToProps(dispatch){
    return {
      getAllGames: () => dispatch(getAllGames()),
      getAllGenres: () => dispatch(getAllGenres())

    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Cards)