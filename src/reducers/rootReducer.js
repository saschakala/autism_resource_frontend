import {combineReducers} from 'redux'

import { bookReducer } from './bookReducer'
import { articleReducer } from './articleReducer'


export const rootReducer = combineReducers({
    books: bookReducer,
    articles: articleReducer,
})