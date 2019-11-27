import { combineReducers } from 'redux';
import counterReducer from './count/count.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
