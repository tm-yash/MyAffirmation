import {StyleSheet, Dimensions} from 'react-native';
import {ms, vs, s} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  bgObject1: {
    height: vs(290),
    width: s(100),
    resizeMode: 'contain',
    position: 'absolute',
    left: 10,
    top: 110,
  },
  authorName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
    width: s(200),
    fontWeight: '400',
    paddingLeft: 30,
  },
  authorImag: {
    width: ms(53),
    borderRadius: 60,
    height: ms(53),
  },

  authorNameView: {
    marginTop: vs(60),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // NEW STYLE

  authorInfo: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: s(20),
  },

  quoteStyles: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '600',
    lineHeight: 35,
    width: s(200),
  },
});
