import {combineReducers} from 'redux';
import feedReducer from './feedReducer';

let reducers = combineReducers({
    feedReducer: feedReducer
})

const rootReducer = (state, action) => {
    return reducers(state, action);
}

export default rootReducer;