import { GET_QUOTE_OF_THE_DAY } from '../actions/quoteOfDayActions';

let initState = {
    quote: 123
}

export const quoteOfTheDayReducer = (state = initState, actions) => {
    switch (actions.type) {
        case GET_QUOTE_OF_THE_DAY:
            return {
                ...state,
                quote: actions.quote
            }
        default:
            return state;
    }
}