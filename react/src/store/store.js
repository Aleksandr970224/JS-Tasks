import { combineReducers, legacy_createStore as createStore } from 'redux'
import { postReducer } from './postReducer'

const roorReducer = combineReducers({
  post: postReducer,
});

export const store = createStore(roorReducer);