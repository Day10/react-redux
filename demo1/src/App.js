import React, { Component } from 'react';
import C from './constants';
import initialState from './state';
import {createStore, combineReducers} from 'redux'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = initialState
  }
  addColorHandler = () => {
    store.dispatch(addColor('Happy Orange', '#ff9800'));
    this.setState(store.getState())
  }
  removeColorHandler (id) {
    store.dispatch(removeColor(id));
    this.setState(store.getState())
  }
  rateColorHandler (id) {
    store.dispatch(rateColor(id, 5));
    this.setState(store.getState())
  }
  sortColorHandler = () => {
    store.dispatch(sortColor('SORT_BY_TITLE'));
  }

  render() {
    const { colors } = this.state 
    return (
      <div className="App">
        <div>
          {
            (colors.length === 0) ? 
              <p>没有颜色</p> :
              colors.map(color => 
                <section key={color.id}>
                  <h1 style={{color: color.color}}>{color.title}</h1>
                  <div>{color.rating}</div>
                  <button onClick={this.removeColorHandler.bind(this, color.id)}>删除颜色{color.title}</button>
                  <button onClick={() => this.rateColorHandler(color.id)}>为颜色打5分好评</button>
                </section>
              )
          }
          <button onClick={this.addColorHandler}>添加颜色</button>
          <button onClick={this.sortColorHandler}>按照title重排颜色</button>
          
        </div>
      </div>
    );
  }
}
// Action 生成器
const sortColor = sortedBy => {
  switch (sortedBy) {
    case 'rating':
      return {
        type: C.SORT_COLOR,
        sort: "SORT_BY_RATING"
      };
    case 'title':
      return {
        type: C.SORT_COLOR,
        sort: "SORT_BY_TITLE"
      };
    default: 
      return {
        type: C.SORT_COLOR,
        sort: "SORT_BY_DATE"
      }
  }
}
const addColor = (title, color) =>
  ({
    type: C.ADD_COLOR,
    id: Math.random().toString(36).substr(2), // 生成随机id方法
    title,
    color,
    rating: Math.floor(Math.random()*5),
    timestamp: new Date().toString()
  });
const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating
})
const removeColor = id => ({
  type: C.REMOVE_COLOR,
  id
})
// Reducer
const color = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        rating: action.rating,
        timestamp: action.timestamp
      };
    case C.RATE_COLOR:
      return (state.id === action.id) ? {
        ...state,
        rating: action.rating
      } : state
    default:
      return state;
  }
};
const colors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return [
        ...state,
        color({ }, action)
      ];
    case C.RATE_COLOR:
      return state.map(
        c => color(c, action)
      );
    case C.REMOVE_COLOR:
      return state.filter(
        c => c.id !== action.id
      )
    default:
      return state;
  }
};
const sort = (state = 'SORT_BY_DATE', action) => {
  switch (action.type) {
    case C.SORT_COLOR:
      return action.sort;
    default: 
      return state
  }
}
// store
const store = createStore(
  combineReducers({ colors, sort }),
  initialState
)
store.subscribe(() => {
  console.log(store.getState())
})

export default App;
