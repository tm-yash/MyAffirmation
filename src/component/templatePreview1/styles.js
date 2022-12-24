import {StyleSheet, Dimensions, Platform} from 'react-native';
import {ms, vs, s} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  flatLIstView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  bgObject1: {
    height: vs(190),
    width: s(200),
    resizeMode: 'contain',
    position: 'absolute',
    left: -10,
    top: 50,
  },
  bgObject2: {
    height: vs(190),
    width: s(200),
    resizeMode: 'contain',
    position: 'absolute',
    right: -10,
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
    height: vs(70),
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: s(12),
  },
  authorName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
    paddingVertical: 10,
    fontWeight: '600',
  },
  authorImag: {
    width: ms(53),
    borderRadius: 12,
    height: ms(53),
    marginBottom: s(20),
  },
  authorNameDash: {
    width: s(46),
    height: vs(3),
    backgroundColor: '#ffffff',
    marginRight: 10,
  },
  authorNameView: {
    marginTop: 10,
  },
  // NEW STYLE

  quoteOfTheDayHeader: {
    marginTop: vs(50),
  },
  authorInfo: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  AuthorDetails: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 5,
  },

  quoteStyles: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '600',
    lineHeight: 35,
    width: s(200),
  },
  leftQuote: {alignSelf: 'flex-start'},
  rightQuote: {
    alignSelf: 'flex-end',
  },
});
