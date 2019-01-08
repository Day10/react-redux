import { createStore } from 'redux'
import { AppReducer } from '../reducers/AppReducer';

export const createAppStore = () => {
    let store = createStore(AppReducer);
    return store;
}