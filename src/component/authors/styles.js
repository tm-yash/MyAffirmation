import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  authorScreen: {
    flex: 1,
    backgroundColor: '#EDF4F6',
  },
  goBackHeaderFlax: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vs(15),
    marginTop: Platform.OS === 'ios' ? vs(50) : vs(20),
  },
  authorFlatListView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginVertical: vs(8),
    paddingVertical: vs(10),
    width: s(310),
    height: vs(70),
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: s(12),
  },
  goBackHeaderTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: s(55),
    color: '#000000',
  },
  authorImag: {
    width: ms(53),
    height: ms(53),
    marginRight: s(10),
    borderRadius: 30,
  },
  authorName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  authorSubTitle: {
    color: '#B3B4B3',
    paddingTop: vs(5),
    fontSize: 14,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
});
