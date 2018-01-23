// components/CounterApp.jsx
import { connect } from 'react-redux';
import { loadMovies, selectMovie } from '../actions';
import MovieList from './MovieList';
import {bindActionCreators, dispatch} from 'redux';



const mapStateToProps = (state) => {
   return {
  	 movies: state.movies
 	}
};


const mapDispatchToProps = (dispatch) =>{
  return {
    loadMovies: (movie) => {
      console.log('dispatch to props:',movie);
      dispatch(loadMovies(movie, dispatch));
    },
    selectMovie: (movie) => {
      console.log('Movie clicked from app:', movie.Title);
      dispatch(selectMovie(movie, dispatch));
    }
    ,
    requestPending: (movie) => {
      console.log('Movie clicked from app:', movie.Title);
      dispatch(requestPending(movie, dispatch));
    }
  }
};

const MovieListApp = connect(mapStateToProps,mapDispatchToProps)(MovieList);

export default MovieListApp;

//
