import {StyleSheet, Dimensions} from 'react-native';
import {ms, vs, s} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  goBackHeaderView: {
    marginHorizontal: Platform.OS === 'ios' ? s(20) : s(22),
    zIndex: 9999999,
    position: 'absolute',
    alignSelf: 'flex-start',
    top: Platform.OS === 'ios' ? s(50) : s(22),
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginVertical: vs(8),
    paddingVertical: vs(10),
    width: s(310),
    height: vs(70),
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: s(12),
    position: 'absolute',
    bottom: 80,
  },
  authorName: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#ffffff',
    paddingVertical: 10,
    fontWeight: '600',
  },
  authorImag: {width: ms(70), borderRadius: 35, height: ms(70)},

  // NEW STATYLE

  quoteOfTHeDayScreen: {
    alignItems: 'center',
    paddingTop: vs(140),
    height: Dimensions.get('window').height,
  },
  quoteOfTheDayHeader: {
    marginTop: vs(50),
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
    paddingTop: vs(40),
    width: s(330),
    height: vs(350),
  },
  quoteStyles: {
    textAlign: 'center',
    fontSize: 22,
    paddingVertical: vs(30),
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
  footer: {width: 270},
});
