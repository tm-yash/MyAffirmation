import {StyleSheet, Dimensions, Platform} from 'react-native';
import {ms, vs, s} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  goBackHeaderView: {
    marginHorizontal: Platform.OS === 'ios' ? s(20) : s(22),
    zIndex: 9999999,
    position: 'absolute',
    // left: 60,
    top: Platform.OS === 'ios' ? s(50) : s(22),
    alignSelf: 'flex-start',
  },
  goBackIconBorder: {
    borderColor: '#ffffff',
    borderWidth: 1,
    width: Platform.OS === 'ios' ? ms(50) : ms(45),
    height: Platform.OS === 'ios' ? ms(50) : ms(45),
    borderRadius: 12,
  },
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
    left: '-30%',
    top: '-40%',
  },
  bgObject2: {
    height: vs(240),
    width: s(250),
    resizeMode: 'contain',
    position: 'absolute',
    right: '-20%',
    top: '60%',
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
    width: Platform.OS === 'ios' ? s(310) : s(290),
    height: Platform.OS === 'ios' ? vs(10) : vs(10),
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: s(12),
  },
  authorName: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#ffffff',
    paddingVertical: 10,
    fontWeight: '600',
  },
  authorImag: {
    width: Platform.OS === 'ios' ? ms(70) : ms(60),
    height: Platform.OS === 'ios' ? ms(70) : ms(60),
    borderRadius: 35,
  },

  // NEW STYLE

  quoteOfTHeDayScreen: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? vs(140) : vs(80),
    height: Dimensions.get('window').height,
  },
  quoteOfTheDayHeader: {
    marginTop: Platform.OS === 'ios' ? vs(50) : vs(30),
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
  quoteViewStyle: {
    paddingHorizontal: s(20),
    paddingVertical: Platform.OS === 'ios' ? vs(60) : vs(30),
    width: Platform.OS === 'ios' ? s(330) : s(330),
    height: Platform.OS === 'ios' ? vs(350) : vs(350),
  },
  quoteStyles: {
    textAlign: 'center',
    fontSize: 22,
    paddingVertical: Platform.OS ? vs(30) : vs(30),
    color: '#ffffff',
    fontWeight: '400',
    lineHeight: 30,
  },
  leftQuote: {alignSelf: 'flex-start'},
  rightQuote: {
    alignSelf: 'flex-end',
  },
  QuoteFoThaDayFooterBorder: {
    borderColor: '#ffffff',
    borderWidth: 2,
    width: Platform.OS === 'ios' ? ms(58) : ms(52),
    height: Platform.OS === 'ios' ? ms(58) : ms(52),
    borderRadius: 17,
  },
  footerIconText: {
    fontSize: 18,
    color: '#ffffff',
    paddingTop: 5,
  },
  footer: {
    width: Platform.OS === 'ios' ? s(270) : s(250),
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
});
