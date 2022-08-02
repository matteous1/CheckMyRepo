import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import app from './app/slice';

const reducer = combineReducers({
  app,
})

export const createStore = () => configureStore({
  reducer,
})
const store = createStore()
export default store