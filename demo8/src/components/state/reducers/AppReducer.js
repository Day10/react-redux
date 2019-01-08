import { quoteOfTheDayReducer } from './quoteOfTheDayReducer';
import { favoriteQuoteReducer } from './favoriteQuoteReducer';
import { quoteReducer } from './quoteReducer'
import { combineReducers } from 'redux';

export const AppReducer = combineReducers({
    quoteOfTheDayReducer: quoteOfTheDayReducer,
    favoriteQuoteReducer: favoriteQuoteReducer,
    quoteReducer: quoteReducer
})