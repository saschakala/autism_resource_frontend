import {combineReducers} from 'redux';

import sourceReducer from './sourceReducer';
import tagReducer from './tagReducer';


export const rootReducer = combineReducers({
    sources: sourceReducer,
    tags: tagReducer
})