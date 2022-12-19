import {Platform, StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  templateScreenMainView: {
    flex: 1,
    backgroundColor: '#EDF4F6',
  },
  goBackHeaderFlax: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: Platform.OS === 'ios' ? vs(50) : vs(20),
  },
  goBackHeaderTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: s(45),
  },
  allCatrgoriesFlatLisView: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vs(10),
  },
  templateImag: {
    marginHorizontal: 200,
  },
  templateScreenImage: {
    width: Platform.OS === 'ios' ? s(150) : s(150),
    height: Platform.OS === 'ios' ? vs(155) : vs(179),
  },
});
