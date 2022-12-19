import {StyleSheet, Dimensions} from 'react-native';
import {ms, vs, s} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  bgObject2: {
    height: vs(290),
    width: s(340),
    resizeMode: 'contain',
    position: 'absolute',
    right: -10,
    alignSelf: 'flex-end',
    bottom: 105,
  },
  authorName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
    paddingVertical: 10,
    fontWeight: '400',
  },
  authorImag: {
    width: ms(53),
    borderRadius: 60,
    height: ms(53),
    marginBottom: s(20),
  },

  authorNameView: {
    marginTop: vs(30),
  },
  // NEW STYLE

  authorInfo: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  quoteStyles: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '600',
    lineHeight: 35,
    width: s(250),
  },
});
