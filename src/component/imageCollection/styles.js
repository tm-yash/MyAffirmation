import {StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import {Platform} from 'react-native';

export const styles = StyleSheet.create({
  ImageCollectionScreen: {
    flex: 1,
    backgroundColor: '#EDF4F6',
    paddingTop: Platform.OS === 'ios' ? vs(32) : vs(0),
  },
  categoriesBtn: {
    paddingHorizontal: s(21),
    marginRight: s(5),
    borderRadius: 22,
    height: vs(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageCollectionHeader: {
    marginVertical: Platform.OS === 'ios' ? vs(20) : vs(20),
    paddingHorizontal: s(20),
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  ImageCollectionTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: Platform.OS === 'ios' ? '#000000' : '#000000',
  },
});
