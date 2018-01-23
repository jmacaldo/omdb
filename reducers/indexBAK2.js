import { combineReducers } from 'redux';
import reducers from './reducers';
import  moviesReducer  from  './movies';


const allReducers = combineReducers({
  movies: moviesReducer,
  reducers: reducers
});


export default allReducers;

//
