import C from './constants'
export const addColor = (title, color) =>
    ({
        type: C.ADD_COLOR,
        id: Math.random().toString(36).substr(2), // 生成随机id方法
        title,
        color,
        rating: Math.floor(Math.random() * 5),
        timestamp: new Date().toString()
    });
export const rateColor = (id, rating) => ({
    type: C.RATE_COLOR,
    id,
    rating
})
export const removeColor = id => ({
    type: C.REMOVE_COLOR,
    id
})