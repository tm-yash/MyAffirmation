import axios from 'axios';

const BASE_URL = 'http://192.168.1.19:8003/v1';

export const HomeSliderImage = async () => {
  try {
    const response = await axios.get(BASE_URL + '/quote/');

    // console.log('HomeSliderImage: ', response.data);

    if (response.status == 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log('error: ', error);
  }
};
