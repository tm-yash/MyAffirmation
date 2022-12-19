import axios from 'axios';

const BASE_URL = 'http://192.168.1.19:8003/v1';

export const imageCategories = async () => {
  try {
    const response = await axios.get(BASE_URL + '/category');
    console.log('respons success', response.data);
    if (response.status === 200) {
      return response.data;
    } else {
      null;
    }
  } catch (error) {
    console.log('================ error ====================');
    console.log(error);
    console.log('================ error ====================');
  }
};
