
const initialState = { 
    videogames: [],
    gameDetail: {},
    genres : [],  
} 
function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_ALL_GAMES':
            return {...state,videogames: action.payload};   
        case 'GET_DETAILS':
			if (typeof action.payload.genres[0] === 'object') {
				action.payload.genres = action.payload.genres.map((g) => g.name);
			}
			return {
				...state,			
				gameDetail: action.payload,			
            };     
        case 'FILTER_CREATED':
            const allGames = state.videogames;
            const createdFilter =
             action.payload === 'created'
              ? allGames.filter(vg => vg.createdInDb)
              : allGames.filter(vg => !vg.createdInDb)
            console.log(createdFilter);
            return{
                ...state,
                videogames: action.payload === 'all'
                ? state.allGames : createdFilter
            };
        case 'ORDER_BY_NAME': 
        let sortedArr = action.payload === 'Asc' ? 
        state.videogames.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (b.name > a.name) {
                return -1;
            }
            return 0;
        }) : 
        state.videogames.sort(function (a, b){
            if (a.name > b.name) {
                return -1;
            }
            if (b.name > a.name) {
                return 1;
            }
            return 0;
        })    
        return {
            ...state,
            videogames: sortedArr  
        };
        case 'ORDER_BY_RATING':
            let sortArray = action.payload === 'top' ?
                state.videogames.sort(function (a, b) {
                    if (a.rating > b.rating) { 
                        return 1;
                    }
                    if (b.rating > a.rating) {
                        return -1;
                    }
                    return 0;
                }) :
                state.videogames.sort(function (a, b) {
                    if (a.rating > b.rating) {
                        return -1;
                    }
                    if (b.rating > a.rating) {
                        return 11;
                    }
                    return 0;
                })
            return {
                ...state,
                videogames: sortArray
            };
        case 'POST_VIDEOGAME':
                return {
                    ...state
                };           
        case "SEARCH_VIDEOGAMES":
                return {
                  ...state,
                  videogames: action.payload,
                };
        case 'FILTER_BY_GENRE':
                const allVideogames = state.videogames;
                const genreFiltered =
                  action.payload === "All"
                    ? allVideogames
                    : allVideogames.filter((el) => el.genres.includes(action.payload));
                return {
                  ...state,
                  videogames: genreFiltered,
                };
        case 'GET_ALL_GENRES':
                return{
                    ...state,
                    genres: action.payload,
                };
        case 'GET_ALL_PLATFORMS':
                    return{
                        ...state,
                        platforms: action.payload,
                    };
        case 'GET_VIDEOGAME_BY_ID':
            return({...state,gameDetail: action.payload});
                default: return state
    }
}

export default rootReducer;