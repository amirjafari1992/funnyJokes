import { types } from './types';



export const fetchJoke = () => dispatch => {
    fetch(`https://api.chucknorris.io/jokes/random`)
        .then(res => res.json())
        .then(data => dispatch({
            type: types.FETCH_JOKE,
            payload: data
        }))
}

export const fetchCategories = () => dispatch => {
    fetch(`https://api.chucknorris.io/jokes/categories`)
        .then(res => res.json())
        .then(data => dispatch({
            type: types.FETCH_CATEGORIES,
            categories: data
        }))
}

export const fetchJokesByCategory = (category) => dispatch => {
    let url = '';
    if (category === 'Random') {
        url = 'https://api.chucknorris.io/jokes/random'
    }
    else {
        url = `https://api.chucknorris.io/jokes/random?category=${category}`
    }
    fetch(url)
        .then(res => res.json())
        .then(data => dispatch({
            type: types.FETCH_JOKES_BY_CATEGORY,
            payload: data,
            activeCategory: category
        })
        )
}

export const fetchSearchResult = (value) => dispatch => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${value}`)
        .then(res => res.json())
        .then(data => dispatch({
            type: types.FETCH_SEARCH_RESULT,
            joke: data,
            searchValue: value
        })
        )
}

export const saveJokeToFavorites = (joke) => dispatch => {
    dispatch({
        type: types.ADD_TO_FAVORITE,
        favoriteJokes: joke
    })
}

export const deleteJokeFromFavorites = (jokes) => dispatch => {
    dispatch({
        type: types.DELETE_FAVORITE,
        favoriteJokes: jokes
    })
}

export const editJokeFromFavorites = (jokes) => dispatch => {
    dispatch({
        type: types.EDIT_FAVORITE,
        favoriteJokes: jokes
    })
}

