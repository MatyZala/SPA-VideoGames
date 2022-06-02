import NavBar from '../navBar/NavBar'
import Cards from '../cards/Cards'

export default function Home(){
    return(
        <div className='container'>
            <NavBar/>
            <h1> Videogames</h1>
        <div>
            <Cards/>
        </div>
        <footer className='footer'>
        </footer>
        </div>
    )
}


