import {StyleSheet, Dimensions} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {vs, s, ms} from 'react-native-size-matters';
// import {Fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  quoteOfTHeDayScreen: {
    flex: 1,
    backgroundColor: '#AA67DD',
  },
  quoteOfTheDayHeader: {
    marginTop: vs(50),
  },
  authorInfo: {
    alignItems: 'center',
    // marginTop: 40,
  },
  AuthorName: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
    paddingTop: 12,
  },
  AuthorDetails: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 5,
  },
  quoteViewStyle: {
    paddingHorizontal: s(20),
  },
  quoteStyles: {
    textAlign: 'center',
    // paddingHorizontal: s(20),
    fontSize: 18,
    paddingVertical: vs(30),
    color: '#ffffff',
  },
  leftQuote: {alignSelf: 'flex-start'},
  rightQuote: {
    alignSelf: 'flex-end',
  },
  QuoteFoThaDayFooter: {
    marginHorizontal: Platform.OS === 'ios' ? s(20) : s(22),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? vs(0) : vs(20),
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
});
