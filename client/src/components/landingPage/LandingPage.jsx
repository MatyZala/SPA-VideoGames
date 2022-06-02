import React from 'react'
import { NavLink } from "react-router-dom"
import './LandingPage.css'
import landing from '../../media/landing.mp4'

export default function LandingPage(){
    return(
        <div className="absolute">            
        <video className="video" src={landing} autoPlay loop muted/>            
        <h1>Bienvenidos a Wiki-Games</h1>
        <NavLink to='/home'>
            <button className="boton">Ingresar</button>
        </NavLink>
        </div>
    )
}



