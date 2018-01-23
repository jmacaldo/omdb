// actions/index.js
// Namespace actions
export const LOAD_REQUEST = 'movieList/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movieList/LOAD_SUCCESS';
export const LOAD_FAILURE = 'movieList/LOAD_FAILURE';

import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk';


// action creators go here
export const selectMovie = (movie) =>{
		return {
      type: "LOAD_REQUEST"
    }

};

export const loadMovies = (search, dispatch) => {
	return function(dispatch){
		dispatch(requestPending());
		fetch(`http://www.omdbapi.com/?apikey=468a5348&s=${search}`)
	  .then((response) => response.json())
	  .then((responseJson) => {

			dispatch({
          type: LOAD_SUCCESS,
					isLoading: false,
          movies: responseJson.Search
        })
		})
  }
  // ...what about failure?...
};

export const requestPending = () => {
	return function(dispatch){
		dispatch({
				type: LOAD_REQUEST,
				isLoading: true,
			})
	}

};

export const requestMovies = () => {
};
