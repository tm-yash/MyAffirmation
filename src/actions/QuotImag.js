import axios from 'axios';

const BASE_URL = 'http://192.168.1.19:8003/v1';

export const QuotImage = async id => {
  try {
    const response =
      id == ''
        ? await axios.get(BASE_URL + '/quotimage/')
        : await axios.get(BASE_URL + `/quotimage/?categoryId=${id}`);

    // console.log('response: ', response);

    if (response.status == 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log('error: ', error);
  }
};
