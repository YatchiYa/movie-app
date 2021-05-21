import { HANDLE_CHANGE} from "../../constants/movie/movie";
import moviesData from "./movies"

const initialState = {
    movies: moviesData,
    selected_movie: null,
    page_index: 0,
    elem_page: moviesData.length
  };



  function movieR(state = initialState, action) {
      switch(action.type){
        case HANDLE_CHANGE:
            return {
                ...state,
                [action.payload.ref] : action.payload.data
            };
               
        default:
            return state;
      }
  };
  export default movieR;