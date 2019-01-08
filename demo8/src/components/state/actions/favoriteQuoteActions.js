export const ADD_FAVORITE_QUOTE = 'ADD_FAVORITE_QUOTE';
export const REMOVE_FAVORITE_QUOTE = 'REMOVE_FAVORITE_QUOTE';
export const GET_FAVORITE_QUOTE = 'GET_FAVORITE_QUOTE';

const getFavoriteQuote = () => ({
    type: 'GET_FAVORITE_QUOTE',
    favorites: []
})

const addFavoriteQuote = favorite => ({
    type: 'ADD_FAVORITE_QUOTE',
    favorite: favorite
})

const removeFavoriteQuote = id => ({
    type: 'REMOVE_FAVORITE_QUOTE',
    id: id
})

export {
    addFavoriteQuote,
    removeFavoriteQuote,
    getFavoriteQuote 
}
