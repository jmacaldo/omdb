import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE } from '../actions';

export default function(state = null, action) {
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
      // ....
    }

    default:
      return state;
  }
}
