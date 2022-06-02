import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getVideogameById } from '../../actions'

function Detail(props){
    const {idVideogame} = useParams()
    useEffect(() => {
        props.getVideogameById(idVideogame)
    }, [])
    return(
        <div>
            <img src={props.gameDetail.image} alt={props.gameDetail.name}/>
            <h3>Name: {props.gameDetail.name}</h3>
            <h3>Genres: {props.gameDetail.genres}</h3>
            <h3>Description: {props.gameDetail.description}</h3>
            <h3>Released: {props.gameDetail.released}</h3>
            <h3>Rating: {props.gameDetail.rating}</h3>
            <h3>Platforms: {props.gameDetail.platforms}</h3>
        </div>
    )
}

function mapStateToProps(state){
    return {
        gameDetail: state.gameDetail
    }
}

function mapDispatchToProps(dispatch){
    return {
        getVideogameById: (idVideogame) => dispatch(getVideogameById(idVideogame)),
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)































/* import React from "react";
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getDetail} from '../../actions'
import {useEffect} from 'react'


export default function Detail(){
    console.log();
    const dispatch = useDispatch();
    const { idVideogame } = useParams();
    const game = useSelector((state) => state.videogamesDetail);

    useEffect(()=>{
        dispatch(getDetail(idVideogame))
    }, [])

    return (
        <div>
            {
                game.length>0 ?
                <div>
                    <h1>Nombre: {game.name}</h1>
                    <h2>Fecha De Lanzamiento: {game.released_date}</h2>
                    <h2>Rating: {game.rating}</h2>
                    <p>Descripcion: {game.description}</p>
                    <img src= {game.background_image? game.background_image : game.image} />
                    <p>
                        <span>Generos: </span>
                        {game.genres?.join(', ')}
                    </p>
                    <p>
                        <span>Plataformas:</span>
                        {game.platforms?.join(', ')}
                        </p>
                </div> : <p>Loading...</p>
            }
            <Link to= '/home'>
                <button>Volver </button>
            </Link>
        </div>
    )


} */