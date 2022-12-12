import {createSlice} from '@reduxjs/toolkit';
import getPostData from './thunk';

const initialState = {
  data: [],
  loading: false,
  error: [],
};

export const getPostSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: builder => {
    builder.addCase(getPostData.pending, (state, action) => {
      console.log('action', action);
      state.loading = true;
    });
    builder.addCase(getPostData.fulfilled, (state, action) => {
      console.log('action', action);
      state.loading = false;
      state.data.push(...action?.payload?.data);
    });
    builder.addCase(getPostData.rejected, (state, action) => {
      console.log('action', action);
      state.loading = false;
    });
  },
});

export const addTask = getPostData.actions;
export const selectTask = state => state.task;
export default getPostSlice.reducer;
