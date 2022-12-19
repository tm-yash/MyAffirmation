import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  categoryFlatListTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  categorySeeMore: {
    fontSize: 14,
    fontWeight: '500',
    color: '#B3B3B3',
  },
  flatListHeadding: {
    paddingHorizontal: s(20),
  },
  authorName: {
    paddingTop: vs(10),
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: s(3),
    color: '#000000',
  },
  authorImagView: {
    width: ms(72),
    height: ms(72),
    // borderWidth: 2,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vs(15),
    marginHorizontal: s(5),
  },
  authorsFlatListView: {
    flexDirection: 'column',
    alignItems: 'center',
    width: s(75),
  },
});
