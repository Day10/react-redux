import { ADD_FAVORITE_QUOTE, REMOVE_FAVORITE_QUOTE, GET_FAVORITE_QUOTE } from '../actions/favoriteQuoteActions';

let initState = {
    favorites: [
        {
            content: '犄旯旮角' + Math.random(),
            author: '阳哥0',
            id: 0
        },
        {
            content: '孜然一身' + Math.random(),
            author: '阳哥1',
            id: 1
        },
    ] 
}

export const favoriteQuoteReducer = (state = initState, actions) => {
    switch (actions.type) {
        case GET_FAVORITE_QUOTE: 
            return {
                ...state,
                favorites: actions.favorites
            }
        case ADD_FAVORITE_QUOTE:
            let new_add_fav = {
                ...state,
                favorites: state.favorites.concat(actions.favorite)
            }
            console.log(new_add_fav)
            return new_add_fav
        case REMOVE_FAVORITE_QUOTE: 
            let new_fav = state.favorites.filter(favorite => {
                return favorite.id !== actions.id
            });
            return {
                ...state,
                favorites: new_fav
            }
        default:
            return state;
    }
}