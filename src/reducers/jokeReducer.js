import { types } from '../actions/types';

const initialState = {
    favoriteJokes: [],
    joke: {},
    categories: [],
    activeCategory: 'Random',
    searchValue: '',
    searchResult: {
        result: []
    }
}

export default function(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_JOKE:
            return {
                ...state,
                joke: action.payload
            }  
        case types.FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }   
        case types.FETCH_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.joke,
                searchValue: action.searchValue
            }     
        case types.FETCH_JOKES_BY_CATEGORY:
            return {
                ...state,
                joke: action.payload,
                activeCategory: action.activeCategory
            }
        case types.ADD_TO_FAVORITE:
            return {
                ...state,
                favoriteJokes: [...state.favoriteJokes, action.favoriteJokes]
            }   
        case types.DELETE_FAVORITE:
            return {
                ...state,
                favoriteJokes: action.favoriteJokes
            }  
        case types.EDIT_FAVORITE:
            return {
                ...state,
                favoriteJokes: action.favoriteJokes
            }        
        default:
            return state;  
    }        
}
