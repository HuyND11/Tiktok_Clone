import {createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

const getPostData = createAsyncThunk('post/getPostData', async () => {
  const users = await firestore().collection('post').get();
  const response = users.docs.map(doc => ({...doc.data(), id: doc.id}));
  return response;
});

export default getPostData;
