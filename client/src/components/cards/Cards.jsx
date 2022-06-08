import { connect } from 'react-redux';
import {getAllGames} from '../../actions'
import {useState, useEffect} from 'react'
import Card from '../card/Card'
import './Cards.css'
import loading from'../../media/loading.gif'
import imagen from '../../media/imagen.jpg'

  export function Cards(props){

    const[page, setPage] = useState(1)

    const group = 15
    const finalPage = page * group
    const initialPage = finalPage - group

    const videogame = props.videogames.slice(initialPage, finalPage)

    useEffect(()=>{
      props.getAllGames()
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className='cc'>
         <div className='paginado1'>
         <div><button onClick={()=> setPage(page - 1)}> Anterior </button></div>
          <h3 className='num'>Pag: {page}</h3>
          <div ><button onClick={() => setPage(page + 1)}> Siguiente </button></div>
        </div>
        <div id="vgCards">
          {videogame[0] ? videogame.map(vg =>
          <div className='cardsStyle' key={vg.ID}>
            <Card
            ID = {vg.ID}
            name= {vg.name}
            image= {vg.image || imagen}
            genres = {(typeof vg.genres[0] === 'string')? vg.genres : vg.genres.map(g => g.name)}
            />
          </div>          
          ): (<div className='cat'>
            <img className='imgl' src={loading} alt="Loading" />
            </div>)}
        </div>
        <div className='paginado'>
          <div ><button onClick={()=> setPage(page - 1)}> Anterior </button></div>
          <h3 className='num'>Pag: {page}</h3>
          <div ><button onClick={() => setPage(page + 1)}> Siguiente </button></div>
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

    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Cards)