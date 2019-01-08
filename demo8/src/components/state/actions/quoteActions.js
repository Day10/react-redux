export const GET_QUOTES = 'GET_QUOTES';

export const getQuotes = filter => ({
    type: GET_QUOTES,
    quotes: [
        {
            content: '犄旯旮角' + Math.random(),
            author: '345',
            id: 3
        },
        {
            content: '孜然一身' + Math.random(),
            author: '阳fadf哥',
            id: 4
        },
    ] 
});