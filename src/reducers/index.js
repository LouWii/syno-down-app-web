import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import profiles from './profiles';

const rootReducer = combineReducers({profiles, routing: routerReducer});

export default rootReducer;