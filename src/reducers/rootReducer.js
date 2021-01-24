import {combineReducers} from 'redux';

import bookReducer from './bookReducer';
import articleReducer from './sourceReducer';


export const rootReducer = combineReducers({
    books: bookReducer,
    articles: articleReducer
})