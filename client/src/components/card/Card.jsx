import React from 'react';
import { Link } from 'react-router-dom';
import imagen from '../../media/imagen.jpg'
import './Card.css'

export default function Card(props){
    return(
            <Link to={`/videogame/${props.ID}` } className='link'>
                <div className='contenido'>
                <div className='card'>
                <h4>{props.name}</h4>
                <div>
                <img id='vgimg' src={props.image || imagen}  alt='imagen no disponible'/>
                </div>
                <p>{props.genres + ' '}</p>
                <h3>Ver Detalles</h3>
                </div>
                </div>
            </Link>

    )
}
