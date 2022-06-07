
const initialState = { 
    videogames: [],
    gameDetail: undefined,
    genres : [],
    unfilteredVideogame: [],  
} 
function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_ALL_GAMES':
            return ({...state,videogames: action.payload, unfilteredVideogame: action.payload});   
        case 'GET_DETAILS':
			return {
				...state,			
				gameDetail: action.payload,			
            };     
        case 'FILTER_CREATED':
            if(state.videogames !== state.unfilteredVideogame) state.videogames = state.unfilteredVideogame
            const allGames = state.videogames;
            console.log(allGames);
            let createdFilter = []
            if(action.payload === 'db'){
                createdFilter = allGames.filter(vg => (typeof vg.ID) === 'string')
            } else{
                if(action.payload === 'db'){
                    createdFilter = allGames.filter(vg => (typeof vg.ID) === 'number')
                } else createdFilter = state.unfilteredVideogame
            }
            console.log(createdFilter);
            return{
                ...state,
                videogames: createdFilter
            };
        case 'REFRESH':{
            return({...state, gameDetail: undefined})
        }
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
            if(state.videogames !== state.unfilteredVideogame) state.videogames = state.unfilteredVideogame
                let filterVideogames = [];
                    filterVideogames = state.videogames.filter(vg => (typeof vg.genres[0] === 'string')
                    ? vg.genres.includes(action.payload) 
                    : vg.genres[0]?vg.genres[0].name === action.payload 
                    : vg.genres[0] && vg.genres[1]?vg.genres[1].name === action.payload
                    : vg.genres[2]?vg.genres[2].name === action.payload
                    : vg.genres[3]?vg.genres[3].name === action.payload
                    : vg.genres[4]?vg.genres[4].name
                    :undefined)
                if(action.payload === 'All') filterVideogames = state.unfilteredVideogame
                return {
                  ...state,
                  videogames: filterVideogames,
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