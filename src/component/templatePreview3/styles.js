import {StyleSheet, Dimensions} from 'react-native';
import {ms, vs, s} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  flatLIstView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  bgObject1: {
    height: vs(240),
    width: s(250),
    resizeMode: 'contain',
    position: 'absolute',
    left: -60,
    top: 50,
  },
  bgObject2: {
    height: vs(240),
    width: s(250),
    resizeMode: 'contain',
    position: 'absolute',
    right: -60,
    bottom: 100,
  },
  quoteView: {
    paddingHorizontal: s(20),
  },
  categoryQuote: {
    fontSize: 22,
    color: '#ffffff',
    paddingVertical: vs(30),
  },
  commenQuote1: {alignSelf: 'flex-start'},
  commenQuote2: {alignSelf: 'flex-end'},
  authorDetail: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: vs(8),
    paddingVertical: vs(10),
    width: s(310),
    height: vs(140),
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: s(12),
  },
  authorName: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#D0F7C6',
    paddingTop: 30,
    paddingBottom: 10,
    fontWeight: '600',
  },
  authorImag: {
    width: ms(120),
    borderRadius: 60,
    backgroundColor: 'red',
    height: ms(120),
  },

  // NEW STYLE

  quoteOfTheDayHeader: {
    marginTop: vs(50),
  },
  quoteStyles: {
    textAlign: 'center',
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '600',
    lineHeight: 30,
    width: s(250),
  },
  authorInfo: {
    alignItems: 'center',
  },
  AuthorDetails: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 5,
  },

  leftQuote: {alignSelf: 'flex-start'},
  rightQuote: {
    alignSelf: 'flex-end',
  },
});
