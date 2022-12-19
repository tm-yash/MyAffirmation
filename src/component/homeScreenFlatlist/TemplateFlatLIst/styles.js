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
  TemplateName: {
    paddingTop: vs(10),
    fontSize: 16,
    fontWeight: '500',
  },
  TemplateImagView: {
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vs(15),
  },
});
