import axoisRequest from './index';

const PostAPI = {
  getPost: async () => {
    let url = 'posts';
    console.log('get post api');
    return axoisRequest.get(url);
  },
};

export default PostAPI;
