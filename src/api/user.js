import axiosRequest from './index';
const url = 'users';

const UserAPI = {
  getUser: () => {
    return axiosRequest.get(url);
  },

  postNewUser: data => {
    return axiosRequest.post(data);
  },
};

export default UserAPI;
