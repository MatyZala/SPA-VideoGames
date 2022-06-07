import NavBar from '../navBar/NavBar'
import Cards from '../cards/Cards'
import './Home.css'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllGenres, refresh } from '../../actions'
export function Home(props){
    const [cont, setCont] = useState(0)

    useEffect(() => {
        props.refresh()
        props.getAllGenres()
    })

    return(
        <div className='container'>
            <NavBar cont={cont} setCont={setCont}/>            
        <div>
            <Cards cont={cont}/>
        </div>
        <footer className='footer'>
        </footer>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
    getAllGenres:() => dispatch(getAllGenres()),
    refresh: () => dispatch(refresh())
}
}

export default connect(null, mapDispatchToProps)(Home)
