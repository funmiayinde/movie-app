import { combineReducers } from 'redux'
import { moviesReducer } from './movies'

const reducers = combineReducers({
  movies: moviesReducer
})

export default reducers
