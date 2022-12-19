import {Platform} from 'react-native';
import {Images} from './Images';
import {Colors} from '../styles/Colors';

export const BASE_URL = 'http://192.168.1.17:8003/v1';
// export const BASE_URL = 'https://instaquotes-apis.herokuapp.com/v1';
// export const BASE_URL = 'https://instaquotes-app.herokuapp.com/v1';

export const REGISTER_KEY = 'registerKey';
export const LOGIN_KEY = 'LOGIN_KEY';
export const ONBOARDING_KEY = 'ONBOARDING_KEY';
export const AUTH_CLIENT_ID =
  '507229512582-gkfjdgbf5tjut7dj8jhrjanbvuujvc8a.apps.googleusercontent.com';

export const TEMPLATES = [
  {
    type: 'author2',
    image: Images.Templet,
    startColor: Colors.item2,
    endColor: Colors.card2,
  },
  {
    type: 'author',
    image: Images.Templet1,
    startColor: Colors.item,
    endColor: Colors.card,
  },
  {
    type: 'author1',
    image: Images.Templet2,
    startColor: Colors.item1,
    endColor: Colors.card1,
  },
  {
    type: 'author4',
    image: Images.Templet4,
    startColor: Colors.item4,
    endColor: Colors.card4,
  },
  {
    type: 'author5',
    image: Images.Templet5,
    startColor: Colors.item5,
    endColor: Colors.card5,
  },
  {
    type: 'author6',
    image: Images.Templet6,
    startColor: Colors.item6,
    endColor: Colors.card6,
  },
  {
    type: 'author7',
    image: Images.Templet7,
    startColor: Colors.item7,
    endColor: Colors.card7,
  },
  {
    type: 'author12',
    image: Images.Templet12,
    startColor: 'black',
    endColor: '',
  },
  {
    type: 'author3',
    image: Images.Templet3,
    startColor: 'black',
    endColor: '',
  },
  {
    type: 'author8',
    image: Images.Templet8,
    startColor: Colors.item8,
    endColor: Colors.card8,
  },
  {
    type: 'author9',
    image: Images.Templet9,
    startColor: Colors.item9,
    endColor: Colors.card9,
  },
  {
    type: 'author10',
    image: Images.Templet10,
    startColor: Colors.item10,
    endColor: Colors.card10,
  },
  {
    type: 'author11',
    image: Images.Templet11,
    startColor: Colors.item11,
    endColor: Colors.card11,
  },
];

export const HitSlop = {top: 20, left: 20, bottom: 20, right: 20};

export const GREDIENTCOLOR = [
  {
    startColor: '#ff6e7f',
    endColor: '#bfe9ff',
  },
  {
    startColor: '#cc2b5e',
    endColor: '#753a88',
  },
  {
    startColor: '#ec008c',
    endColor: '#fc6767',
  },
  {
    startColor: '#1488cc',
    endColor: '#2b32b2',
  },
  {
    startColor: '#2193b0',
    endColor: '#6dd5ed',
  },
  {
    startColor: '#12c2e9',
    endColor: '#c471ed',
  },
  {
    startColor: '#654ea3',
    endColor: '#eaafc8',
  },
  {
    startColor: '#4e54c8',
    endColor: '#8f94fb',
  },
  {
    startColor: '#42275a',
    endColor: '#734b6d',
  },
];
export const APP_AD_ID =
  Platform.OS === 'ios'
    ? 'ca-app-pub-9864610739182190~9416510156'
    : 'ca-app-pub-9864610739182190~8919199593';
export const BANNER_AD_ID =
  Platform.OS === 'ios'
    ? 'ca-app-pub-9864610739182190/7911856790'
    : 'ca-app-pub-9864610739182190/7382756642';
export const INTER_AD_ID =
  Platform.OS === 'ios'
    ? 'ca-app-pub-9864610739182190/5094121767'
    : 'ca-app-pub-9864610739182190/1921163512';

export const FETCH_QUOTE_REQUEST = 'FETCH_QUOTE_REQUEST';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_ERROR = 'FETCH_QUOTE_ERROR';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';

export const FETCH_AUTHOR_REQUEST = 'FETCH_AUTHOR_REQUEST';
export const FETCH_AUTHOR_SUCCESS = 'FETCH_AUTHOR_SUCCESS';
export const FETCH_AUTHOR_ERROR = 'FETCH_AUTHOR_ERROR';

export const GET_DEVICE_REQUEST = 'GET_DEVICE_REQUEST';
export const GET_DEVICE_SUCCESS = 'GET_DEVICE_SUCCESS';
export const GET_DEVICE_ERROR = 'GET_DEVICE_ERROR';

export const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR';

export const NOTIFICATION_REQUEST = 'NOTIFICATION_REQUEST';
export const NOTIFICATION_SUCCESS = 'NOTIFICATION_SUCCESS';
export const NOTIFICATION_ERROR = 'NOTIFICATION_ERROR';

export const IS_NOTIFICATION_REQUEST = 'IS_NOTIFICATION_REQUEST';

export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
