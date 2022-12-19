// import axios from 'axios';
// export const BASE_URL = 'https://instaquotes-app.herokuapp.com/v1';

// export const CategoriesCall = async () => {
//   try {
//     const categoriesResponse = await axios.get(BASE_URL + '');
//     console.log('categoriesResponse: ', categoriesResponse);
//     return categoriesResponse.data;
//   } catch (error) {}
//   console.log('categoriesResponse error: ', error);
// };

import axios from 'axios';

const BASE_URL = 'http://192.168.1.19:8003/v1';

export const CategoriesCall = async categories => {
  try {
    const response = await axios.get(BASE_URL + '/category');
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {}
};
