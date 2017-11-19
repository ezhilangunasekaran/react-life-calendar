import { combineReducers } from 'redux';
import weeks from './weekReducers';


const rootReducer = combineReducers({
    weeks
});

export default rootReducer;