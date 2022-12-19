import {StyleSheet, Dimensions} from 'react-native';
import {ms, vs, s} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  goBackIconBorder: {
    borderColor: '#000',
    borderWidth: 1,
    width: Platform.OS === 'ios' ? ms(50) : ms(45),
    height: Platform.OS === 'ios' ? ms(50) : ms(45),
    borderRadius: 12,
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
  authorName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',

    fontWeight: '400',
  },
  authorImag: {
    width: ms(53),
    borderRadius: 20,
    height: ms(53),
  },

  authorNameView: {
    marginTop: vs(30),
  },
  // NEW STYLE

  authorInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  yellowBackground: {
    zIndex: 9,
    height: vs(390),
    justifyContent: 'center',
    alignItems: 'center',
    width: s(320),
    marginVertical: vs(50),
  },
  quoteStyles: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    lineHeight: 30,
    width: s(270),
    textAlign: 'center',
    paddingVertical: 30,
  },

  QuoteFoThaDayFooterBorder: {
    borderColor: '#000',
    borderWidth: 2,
    width: Platform.OS === 'ios' ? ms(58) : ms(52),
    height: Platform.OS === 'ios' ? ms(58) : ms(52),
    borderRadius: 17,
  },
  footerIconText: {
    fontSize: 18,
    color: '#000',
    paddingTop: 5,
  },
  footer: {width: 270},
});
