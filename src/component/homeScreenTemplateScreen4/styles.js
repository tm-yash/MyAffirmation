import {StyleSheet, Dimensions, Platform} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  quoteStyles: {
    fontSize: 22,
    color: '#ffffff',
    marginVertical: vs(60),
    fontWeight: '600',
    lineHeight: 35,
  },
  authorNameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  authorName: {
    fontSize: 18,
    paddingVertical: 10,
    paddingLeft: 10,
    color: '#ffffff',
  },
  authorImag: {
    width: ms(50),
    height: ms(50),
    borderRadius: 25,
  },
});
