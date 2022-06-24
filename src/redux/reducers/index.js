import { combineReducers } from 'redux';
import { 
    postOneReducer,
    postTwoReducer,
    postThreeReducer ,
    authorReducer
} from './blogReducers';

export const reducers = combineReducers({
    postOne: postOneReducer,
    postTwo: postTwoReducer,
    postThree: postThreeReducer,
    author: authorReducer
})