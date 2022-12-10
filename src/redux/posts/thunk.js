import {createAsyncThunk} from '@reduxjs/toolkit';
import PostAPI from './../../api/post';

const getPostData = createAsyncThunk('post/getPostData', async () => {
  const response = await PostAPI.getPost();
  return response;
});

export default getPostData;
