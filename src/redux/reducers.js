import {combineReducers} from '@reduxjs/toolkit';
import {getPostSlice} from './posts/slices';

const rootReducer = combineReducers({
  getPostToolkitReducer: getPostSlice.reducer,
});

export default rootReducer;
