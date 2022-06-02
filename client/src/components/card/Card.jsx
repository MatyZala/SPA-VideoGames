import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

export default function Card(props){
    return(
            <Link to={`/videogame/${props.ID}` }>
                <div className='card'>
                <div>{props.name}</div>
                <div>{props.genres}</div>
                <div>
                <img id='vgimg' src={props.image} alt="Not found" />
                </div>
                </div>
            </Link>

    )
}
