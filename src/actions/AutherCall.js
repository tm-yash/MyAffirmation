import axios from 'axios';

const BASE_URL = 'http://192.168.1.19:8003/v1';

export const AutherCall = async () => {
  try {
    const response = await axios.get(
      BASE_URL + '/author?pagenumber=1&pagesize=12',
    );

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log('AutherCall error: ', error);
  }
};
