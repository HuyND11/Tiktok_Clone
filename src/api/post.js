import axoisRequest from './index';
const url = 'post';
const PostAPI = {
  getPost: async () => {
    return axoisRequest.get(url);
  },

  postNewPost: async post => {
    console.log(post);
    return axoisRequest.post(url, post);
  },
};

export default PostAPI;
