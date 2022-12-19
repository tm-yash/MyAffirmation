import axios from 'axios';

const BASE_URL = 'http://192.168.1.19:8003/v1';

export const FetchAllQuote = async () => {
  try {
    const response = await axios.get(BASE_URL + '/quote/');
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log('error: ', error);
  }
};

export const FetchAuthorQuote = async id => {
  console.log('FetchAuthorQuote : :', id);
  try {
    const response = await axios.get(BASE_URL + `/quote/?authorId=${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(
      '================ error of get image by author ====================',
    );
    console.log(error);
    console.log(
      '================ error of get image by author ====================',
    );
  }
};

export const FetchCategoriesQuote = async id => {
  try {
    const response =
      id == ''
        ? await axios.get(BASE_URL + '/quote/')
        : await axios.get(BASE_URL + `/quote/?categoryId=${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(
      '================ error of get image by author ====================',
    );
    console.log(error);
    console.log(
      '================ error of get image by author ====================',
    );
  }
};
