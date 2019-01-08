export const GET_QUOTE_OF_THE_DAY = 'GET_QUOTE_OF_THE_DAY';

// action generator
const getQuoteOfTheDayAction = () => ({
    type: 'GET_QUOTE_OF_THE_DAY',
    quote: Math.random()
})

export { getQuoteOfTheDayAction as getQuoteOfTheDay }