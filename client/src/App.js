import './App.css';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import LandingPage from './components/landingPage/LandingPage'
import Home from './components/home/Home'
import Detail from './components/details/Detail'
import CreateVideoGame from './components/createVideoGame/CreateVideoGame'

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path= '/' element={<LandingPage/>}/>
      <Route path= '/home' element={<Home/>}/>      
      <Route path= '/videogame' element={<CreateVideoGame/>}/>
      <Route path= '/videogame/:idVideogame' element={<Detail/>}/>
    </Routes>
  </Router>
  );
}

export default App;
