import {Platform, StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  categoryFlatListTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  categoriesFlatListView: {
    flexDirection: 'column',
    alignItems: 'center',
    width: s(75),
  },
  categorySeeMore: {
    fontSize: 14,
    fontWeight: '500',
    color: '#B3B3B3',
  },
  flatListHeadding: {
    paddingHorizontal: Platform.OS === 'ios' ? s(20) : s(20),
  },
  categoriesName: {
    paddingHorizontal: s(3),
    paddingTop: vs(10),
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#000000',
  },
  categoriesImagView: {
    width: ms(70),
    height: ms(70),
    borderWidth: 2,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vs(15),
    marginHorizontal: s(5),
    borderWidth: 1.5,
  },
  categoriesRandomView: {
    flexDirection: 'column',
    alignItems: 'center',
    width: s(75),
  },
  categoriesIcon: {width: ms(40), height: ms(40), tintColor: '#000000'},
});
