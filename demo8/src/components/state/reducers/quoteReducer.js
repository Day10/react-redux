import { GET_QUOTES } from '../actions/quoteActions'

const initial_state = {
    quotes: [
        {
            content: '犄旯旮角' + Math.random(),
            author: '123',
            id: 2
        },
        {
            content: '孜然一身' + Math.random(),
            author: '23452',
            id: 3
        },
    ] 
}

export const quoteReducer = (state = initial_state, actions) => {
    switch (actions.type) {
        case GET_QUOTES:
            return {
                ...state,
                quotes: actions.quotes
            }
        default: 
            return state
    }
}