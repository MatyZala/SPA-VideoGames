import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './Detail.css'
import img from '../../media/imagen.jpg'
import loading from'../../media/loading.gif'

export default function Detail() {
  const dispatch = useDispatch();
  const {idVideogame} = useParams();

  useEffect(() => {
    dispatch(getDetail(idVideogame));
  }, [dispatch, idVideogame]);

  const myVideogame = useSelector((state) => state.gameDetail);

  return (
    <div >
      {myVideogame? (
        <div className="detail">
        <div className="ld" >
        <Link to="/home">
          <button >Volver</button>
        </Link>
        </div>
          <div className="n">{myVideogame.name}</div>
          <img
            className="ide"
            src={myVideogame.image || img}
            alt=""
          />
          <span className="g">
            <u>Genero:</u>{" "}
            {(typeof myVideogame.genres[0] === 'string')?myVideogame.genres + ' ' : myVideogame.genres.map(g => g.name + ' ')}
          </span>
          <div className="d">
            <u>Descripcion:</u> {myVideogame.description.replace(/(<([^>]+)>)/gi, "")}
          </div>
          <span className="r"><u>Fecha de Lanzamiento:</u>{myVideogame.released}</span>
          <span className="ra"><u>Rating:</u> {myVideogame.rating}</span>
          <span className="pl">
            <u>Plataformas:</u>{" "}
            {!myVideogame.createdInDb
              ? myVideogame.platforms + " "
              : myVideogame.platforms.map((el) => el.name + " ")}
          </span>
        </div>
      ) : (<div className='imd'>
      <img className='imgd' src={loading} alt="Loading" />
      <p>Cargando VideoJuego</p>
      </div>)}
    </div>
  );
}