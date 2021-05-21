import { HANDLE_CHANGE} from "../../constants/movie/movie";


  
export function handleChange(payload) {
    return { type: HANDLE_CHANGE, payload }
  };
