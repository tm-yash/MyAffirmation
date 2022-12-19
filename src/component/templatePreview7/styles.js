import {StyleSheet, Dimensions} from 'react-native';
import {ms, vs, s} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  bgObject1: {
    height: vs(400),
    width: s(700),
    resizeMode: 'contain',
    position: 'absolute',
    top: '20%',
  },
  authorName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',

    fontWeight: '400',
    paddingLeft: 30,
  },
  authorImag: {
    width: ms(53),
    borderRadius: 60,
    height: ms(53),
    alignSelf: 'flex-end',
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
    width: s(250),
  },
});
