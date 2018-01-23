import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE } from '../actions';
import thunk from 'redux-thunk';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  movies: [{
    imdbID:'1234',
    Title:'movie 1'
  },
  {
    imdbID:'5678',
    Title:'movie 2'
  },
  {
    imdbID:'1414',
    Title:'movie 3'
  }
]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };

    case LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: true,
        movies: action.movies
      };
    }

    case LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false
      };
    }

    default:
      return state;
  }
}
