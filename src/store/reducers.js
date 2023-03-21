import { combineReducers } from "redux";
import MusicReducer from './music/reducer';


const rootReducer = combineReducers({
    MusicReducer,
})

export default rootReducer