import {StyleSheet, Platform} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  allCatrgoriesFlatLisView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: Platform.OS === 'ios' ? vs(20) : vs(20),
    width: s(115),
  },
  categoriesImag: {
    backgroundColor: '#ffffff',
    height: Platform.OS === 'ios' ? ms(75) : ms(72),
    width: Platform.OS === 'ios' ? ms(75) : ms(72),
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  categoriesName: {
    paddingTop: vs(10),
    color: '#000000',
    width: s(80),
    textAlign: 'center',
  },
  goBackHeaderFlax: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? vs(50) : vs(20),
    marginBottom: Platform.OS === 'ios' ? s(10) : s(10),
  },
  goBackHEaderTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: s(45),
    color: '#000000',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
