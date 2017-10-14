import global from './global.js';
import data from './data.js';
import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';

export default combineReducers({
    global,
    data,
    router,
});