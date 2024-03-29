import axios from 'axios'

export const getAllGames = () => {
    return async(dispatch) => {
        let json = await axios.get('/videogames'); 
        return dispatch({
            type: 'GET_ALL_GAMES',
            payload: json.data
        })
    }
}

export const refresh = () => {
  return async (dispatch) => {
    dispatch({type:'REFRESH'})
  }
}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
         payload,
    }
}

export function filterCreated(payload){
    return {
        type: 'FILTER_CREATED',
        payload,
    }
}

export function searchVideogames(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "/videogames?name=" + name
      );
      return dispatch({
        type: "SEARCH_VIDEOGAMES",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function orderByRating(payload) {
    return {
        type: 'ORDER_BY_RATING',
        payload
    }
}

export function filterVideogamesByGenre(payload) {
    return {
      type: "FILTER_BY_GENRE",
      payload,
    };
}

export const getAllGenres = () => {
    return async(dispatch) => {
        const res = await axios.get('/genres');
        return dispatch({
            type: 'GET_ALL_GENRES',
            payload: res.data
        })
    }
}

export const getVideogameById = (idVideogame) => {
    return async(dispatch) => {
        let res = await axios.get(`/videogame/${idVideogame}`)
         return dispatch({type: 'GET_VIDEOGAME_BY_ID', payload: res.data})  
    }
}

export const postVideogame = (payload) =>{
    return async function(dispatch){
        const resp = await axios.post('/videogame',payload);
        console.log(resp)
        return resp
    }
}

export function getDetail(id) {
    return async function (dispatch) {
      try {
        const res = await axios.get(`/videogame/${id}`);
        return dispatch({
          type: "GET_DETAILS",
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
} 


